/* Code Blue PC Repair: shared script for every page. */
(function () {
  document.getElementById('yr').textContent = new Date().getFullYear();

  // Header menu: close after a link is chosen or on Escape.
  var menu = document.querySelector('.menu');
  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { menu.open = false; });
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.open) { menu.open = false; menu.querySelector('summary').focus(); }
  });

  // Heartbeat: loops nonstop, but only runs while on screen, and visitors can pause it.
  var trace = document.querySelector('.trace'), beatBtn = document.querySelector('.beat-toggle');
  if (trace && beatBtn && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
    beatBtn.hidden = false;
    beatBtn.addEventListener('click', function () {
      beatBtn.textContent = trace.classList.toggle('user-paused') ? 'Play motion' : 'Pause motion';
    });
  }
  if (trace && 'IntersectionObserver' in window) {
    trace.classList.add('paused');
    new IntersectionObserver(function (en) { trace.classList.toggle('paused', !en[0].isIntersecting); }).observe(trace);
  }

  // Booking form
  var form = document.getElementById('book-form');
  if (form) {
    function syncWho() { document.getElementById('company-wrap').hidden = !document.getElementById('w-biz').checked; }
    form.addEventListener('change', syncWho);
    document.querySelectorAll('a[data-who]').forEach(function (a) {
      a.addEventListener('click', function () {
        document.getElementById(a.dataset.who === 'business' ? 'w-biz' : 'w-home').checked = true;
        syncWho();
      });
    });
    syncWho();
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      function v(n) { return form.elements.namedItem(n).value.trim(); }
      if (!v('name') || !v('message')) {
        form.elements.namedItem(!v('name') ? 'name' : 'message').value = '';
        form.reportValidity();
        return;
      }
      var who = form.querySelector('input[name="who"]:checked').value;
      var lines = ['For: ' + who, 'Name: ' + v('name')];
      if (v('phone')) lines.push('Phone: ' + v('phone'));
      lines.push('City: ' + v('city'));
      if (who === 'Business' && v('company')) lines.push('Business: ' + v('company'));
      if (v('when')) lines.push('Preferred time: ' + v('when'));
      if (form.elements.namedItem('discount').checked) lines.push('Discount: ' + form.elements.namedItem('discount').value);
      var body = lines.join('\n') + '\n\n' + v('message');
      location.href = 'mailto:info@codebluepcrepair.com?subject=' +
        encodeURIComponent((who === 'Business' ? 'Business IT request' : 'Appointment request') + ' from ' + v('name')) +
        '&body=' + encodeURIComponent(body);

      // Not everyone has an email app set up, so show a fallback.
      var sent = document.getElementById('book-sent');
      sent.hidden = false;
      sent.focus();
      document.getElementById('copy-req').onclick = function () {
        var btn = this, text = 'To: info@codebluepcrepair.com\n\n' + body;
        var done = function () { btn.textContent = 'Copied'; };
        var ask = function () { window.prompt('Copy your request:', text); };
        if (navigator.clipboard) navigator.clipboard.writeText(text).then(done, ask); else ask();
      };
    });
  }
})();
