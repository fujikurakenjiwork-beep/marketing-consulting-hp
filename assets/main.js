/* SAMPLE & Co. — 共通スクリプト（依存ライブラリなし）
   演出は class / data 属性で宣言し、IntersectionObserver 1本で束ねる */
(function(){
  'use strict';
  var root = document.documentElement;
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- ローディング（index のみ）→ 1.2秒以内に必ず開ける ---------- */
  var loading = document.getElementById('loading');
  var seen = false;
  try { seen = sessionStorage.getItem('sc-loaded') === '1'; sessionStorage.setItem('sc-loaded', '1'); } catch (e) {}
  var split = document.querySelector('.js-split');
  if (split) {
    var t = split.textContent.trim(); split.textContent = '';
    t.split('').forEach(function(ch, i){
      var s = document.createElement('span'); s.textContent = ch; s.style.setProperty('--i', i); split.appendChild(s);
    });
  }
  var opened = false;
  function openSite(){
    if (opened) return; opened = true;
    if (loading) loading.classList.add('is-done');
    /* rAF だけに頼ると非表示タブで止まるため、短い setTimeout で初期状態を1フレーム描かせてから開始 */
    setTimeout(function(){ root.classList.add('is-ready'); }, 40);
  }
  if (loading && !reduce && !seen) { setTimeout(openSite, 1100); setTimeout(openSite, 1200); }
  else { if (loading) loading.style.display = 'none'; openSite(); }

  /* ---------- reveal / stagger / count-up ---------- */
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if (!e.isIntersecting) return;
        e.target.classList.add('is-in');
        if (e.target.classList.contains('js-count-up')) countUp(e.target);
        io.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: .15 });
    document.querySelectorAll('.reveal,.stagger,.js-count-up').forEach(function(el){ io.observe(el); });
  } else {
    document.querySelectorAll('.reveal,.stagger').forEach(function(el){ el.classList.add('is-in'); });
  }

  function countUp(el){
    var to = parseFloat(el.dataset.to || '0'), dur = 1600, start = null;
    var fmt = function(n){ return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); };
    if (reduce) { el.textContent = fmt(to); return; }
    function step(ts){
      if (!start) start = ts;
      var p = Math.min((ts - start) / dur, 1), k = 1 - Math.pow(1 - p, 3);
      el.textContent = fmt(to * k);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------- スマホメニュー ---------- */
  var btn = document.querySelector('.menu-btn');
  function setMenu(open){
    root.classList.toggle('menu-open', open);
    if (btn) { btn.setAttribute('aria-expanded', String(open)); btn.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く'); }
  }
  if (btn) {
    btn.addEventListener('click', function(){ setMenu(!root.classList.contains('menu-open')); });
    document.querySelectorAll('.sp-menu a').forEach(function(a){ a.addEventListener('click', function(){ setMenu(false); }); });
    document.addEventListener('keydown', function(e){ if (e.key === 'Escape') setMenu(false); });
    matchMedia('(min-width: 900px)').addEventListener('change', function(m){ if (m.matches) setMenu(false); });
  }

  /* ---------- お問い合わせフォーム（デモ：送信はしない） ----------
     要差替: 本番では Formspree / Googleフォーム / 自社API などの送信先を form の action に設定し、
     下の「demo」分岐を外す。個人情報を URL パラメータに載せないこと。 */
  var form = document.querySelector('.js-form');
  if (form) {
    form.addEventListener('submit', function(e){
      var firstBad = null;
      form.querySelectorAll('[data-required]').forEach(function(field){
        var ok = true;
        var input = field.querySelector('input,textarea,select');
        if (input.type === 'checkbox') ok = input.checked;
        else if (input.type === 'email') ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value.trim());
        else ok = input.value.trim() !== '';
        field.classList.toggle('is-error', !ok);
        if (!ok && !firstBad) firstBad = input;
      });
      if (firstBad) { e.preventDefault(); firstBad.focus(); return; }
      if (form.dataset.demo === 'true') { e.preventDefault(); location.href = 'thanks.html'; }
    });
    form.addEventListener('input', function(e){
      var field = e.target.closest('.field');
      if (field && field.classList.contains('is-error')) field.classList.remove('is-error');
    });
  }

  /* ---------- フッターの年 ---------- */
  document.querySelectorAll('.js-year').forEach(function(el){ el.textContent = new Date().getFullYear(); });
})();
