/* ================================
   龙安设计工作室 — Interactions
   ================================ */

(function () {
    'use strict';

    // ── Navbar scroll state ──
    const navbar = document.getElementById('navbar');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    function updateNavbar() {
        navbar.classList.toggle('scrolled', window.scrollY > 40);
    }

    window.addEventListener('scroll', updateNavbar, { passive: true });
    updateNavbar();

    // ── Mobile menu toggle ──
    navToggle.addEventListener('click', function () {
        const isOpen = navMenu.classList.toggle('show');
        this.classList.toggle('active', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // ── Close menu on link click ──
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            navMenu.classList.remove('show');
            navToggle.classList.remove('active');
            document.body.style.overflow = '';

            navLinks.forEach(function (l) { l.classList.remove('active'); });
            this.classList.add('active');
        });
    });

    // ── Active nav highlight on scroll ──
    const sections = document.querySelectorAll('section[id]');
    function highlightNav() {
        let current = '';
        sections.forEach(function (sec) {
            const top = sec.offsetTop - 120;
            if (window.scrollY >= top) current = sec.getAttribute('id');
        });
        navLinks.forEach(function (link) {
            link.classList.toggle('active', link.getAttribute('href') === '#' + current);
        });
    }
    window.addEventListener('scroll', highlightNav, { passive: true });
    highlightNav();

    // ── Stat counter animation ──
    const statNumbers = document.querySelectorAll('.stat-number');
    let counted = false;

    function animateStats() {
        if (counted) return;
        const rect = statNumbers[0].closest('.about-stats').getBoundingClientRect();
        if (rect.top > window.innerHeight) return;

        counted = true;
        statNumbers.forEach(function (el) {
            const target = parseInt(el.getAttribute('data-target'), 10);
            if (isNaN(target)) return;
            const duration = 1200;
            const start = performance.now();

            function step(now) {
                const progress = Math.min((now - start) / duration, 1);
                const eased = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.floor(eased * target);
                if (progress < 1) requestAnimationFrame(step);
                else el.textContent = target;
            }
            requestAnimationFrame(step);
        });
    }

    window.addEventListener('scroll', animateStats, { passive: true });
    animateStats();

    // ── Contact form ──
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Collect form data
            const name = form.querySelector('input[placeholder="您的姓名"]').value || '';
            const email = form.querySelector('input[placeholder="邮箱地址"]').value || '';
            const project = form.querySelector('input[placeholder="项目类型"]').value || '';
            const message = form.querySelector('textarea').value || '';

            // Build and open mailto link
            const subject = encodeURIComponent('咨询 - 深圳市安图设计工作室');
            const body = encodeURIComponent(
                '姓名：' + name + '\n' +
                '邮箱：' + email + '\n' +
                '项目类型：' + project + '\n' +
                '需求描述：' + message
            );
            window.location.href = 'mailto:1415485506@qq.com?subject=' + subject + '&body=' + body;

            const btn = form.querySelector('.btn-submit');
            const orig = btn.textContent;
            btn.textContent = '已发送 ✓';
            btn.style.background = '#16a34a';
            btn.disabled = true;
            setTimeout(function () {
                btn.textContent = orig;
                btn.style.background = '';
                btn.disabled = false;
                form.reset();
            }, 2500);
        });
    }

})();

