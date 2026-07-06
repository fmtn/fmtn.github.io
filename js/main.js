(function () {
	'use strict';

	var header = document.querySelector('.site-header');
	var toggle = document.querySelector('.nav-toggle');
	var menu = document.getElementById('nav-menu');

	/* Header background on scroll */
	function onScroll() {
		header.classList.toggle('scrolled', window.scrollY > 40);
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

	/* Hero background video (Vimeo, dnt=1 = no cookies/tracking).
	   Skipped for users who prefer reduced motion. */
	var videoHost = document.querySelector('.hero-video');
	var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	if (videoHost && !reducedMotion) {
		var iframe = document.createElement('iframe');
		iframe.src = 'https://player.vimeo.com/video/' + videoHost.dataset.vimeoId +
			'?background=1&autoplay=1&loop=1&muted=1&dnt=1';
		iframe.allow = 'autoplay; fullscreen';
		iframe.title = 'Background video of Gothenburg';
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
