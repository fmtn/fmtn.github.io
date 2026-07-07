(function () {
	'use strict';

	var header = document.querySelector('.site-header');
	var logo = document.querySelector('.logo');
	var toggle = document.querySelector('.nav-toggle');
	var menu = document.getElementById('nav-menu');

	/* Header background on scroll */
	function onScroll() {
		header.classList.toggle('scrolled', window.scrollY > 40);
		if (window.scrollY < 80) {
			clearCurrentSection();
		}
	}
	window.addEventListener('scroll', onScroll, { passive: true });
	onScroll();

	/* Mobile menu */
	toggle.addEventListener('click', function () {
		var open = header.classList.toggle('nav-open');
		toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
		document.body.style.overflow = open ? 'hidden' : '';
	});
	menu.addEventListener('click', function (e) {
		if (e.target.tagName === 'A') {
			header.classList.remove('nav-open');
			toggle.setAttribute('aria-expanded', 'false');
			document.body.style.overflow = '';
		}
	});

	/* Logo: reliably return to the top.
	   The header is fixed, so relying only on #top can be inconsistent. */
	logo.addEventListener('click', function (e) {
		e.preventDefault();
		header.classList.remove('nav-open');
		toggle.setAttribute('aria-expanded', 'false');
		document.body.style.overflow = '';
		clearCurrentSection();
		if (history.replaceState) {
			history.replaceState(null, '', location.pathname + location.search);
		}
		window.scrollTo({ top: 0, behavior: 'smooth' });
	});

	/* Scroll reveal */
	var reveals = document.querySelectorAll('.reveal');
	if ('IntersectionObserver' in window) {
		var observer = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					entry.target.classList.add('visible');
					observer.unobserve(entry.target);
				}
			});
		}, { threshold: 0.15, rootMargin: '0px 0px -5% 0px' });
		reveals.forEach(function (el) { observer.observe(el); });
	} else {
		reveals.forEach(function (el) { el.classList.add('visible'); });
	}

	/* Scrollspy: highlight the nav link for whichever section is currently
	   in view, using the same yellow underline as the hover state.
	   The AI section has no nav item of its own, so it counts towards
	   "Vårt arbete" (services) since it's a direct continuation of it. */
	var navLinks = document.querySelectorAll('#nav-menu a[href^="#"]');
	var spySections = document.querySelectorAll('main section[id]');
	var sectionToLink = { ai: 'services' };

	function clearCurrentSection() {
		if (!navLinks) { return; }
		navLinks.forEach(function (link) {
			link.classList.remove('current');
			link.removeAttribute('aria-current');
		});
	}

	function setCurrentSection(id) {
		var targetHref = '#' + (sectionToLink[id] || id);
		navLinks.forEach(function (link) {
			var isCurrent = link.getAttribute('href') === targetHref;
			link.classList.toggle('current', isCurrent);
			if (isCurrent) {
				link.setAttribute('aria-current', 'page');
			} else {
				link.removeAttribute('aria-current');
			}
		});
	}

	if ('IntersectionObserver' in window && spySections.length && navLinks.length) {
		var spy = new IntersectionObserver(function (entries) {
			var visible = entries.filter(function (entry) { return entry.isIntersecting; });
			if (!visible.length) { return; }
			visible.sort(function (a, b) { return a.boundingClientRect.top - b.boundingClientRect.top; });
			setCurrentSection(visible[0].target.id);
		}, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
		spySections.forEach(function (section) { spy.observe(section); });
	}

	/* Hero background video (Vimeo, dnt=1 = no cookies/tracking).
	   Skipped for users who prefer reduced motion. */
	var videoHost = document.querySelector('.hero-video');
	var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	var localPreview = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
	if (videoHost && !reducedMotion && !localPreview) {
		var iframe = document.createElement('iframe');
		iframe.src = 'https://player.vimeo.com/video/' + videoHost.dataset.vimeoId +
			'?background=1&autoplay=1&loop=1&muted=1&dnt=1';
		iframe.allow = 'autoplay; fullscreen';
		iframe.title = document.documentElement.lang === 'sv'
			? 'Bakgrundsvideo från Göteborg'
			: 'Background video of Gothenburg';
		iframe.setAttribute('tabindex', '-1');
		iframe.addEventListener('load', function () {
			setTimeout(function () { iframe.classList.add('playing'); }, 400);
		});
		videoHost.appendChild(iframe);
	}

	/* Copyright year */
	var year = document.getElementById('year');
	if (year) { year.textContent = new Date().getFullYear(); }

	/* For fellow proud nerds who open the console */
	console.log(
		'%c\n' +
		'          ~v~\n' +
		'     ~v~       ~v~\n' +
		'          ~v~\n' +
		'\n  Flying in formation.' +
		'\n  Nerdy enough to look under the hood? We should talk:' +
		'\n  hello@fourmation.se\n',
		'color:#FFD700; background:#293132; font-family:monospace; font-size:14px; padding:8px;'
	);
})();
