(function () {
  var body = document.body, btn = document.getElementById('lang');
  function set(l) { body.setAttribute('data-lang', l); document.documentElement.lang = l; btn.textContent = l === 'en' ? 'ES · Español' : 'EN · English'; try { localStorage.setItem('glutea-lang', l); } catch (e) {} }
  var saved = null; try { saved = localStorage.getItem('glutea-lang'); } catch (e) {}
  set(saved || ((navigator.language || 'en').toLowerCase().indexOf('es') === 0 ? 'es' : 'en'));
  btn.addEventListener('click', function () { set(body.getAttribute('data-lang') === 'en' ? 'es' : 'en'); });
})();
