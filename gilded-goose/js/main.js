/**
 * The Gilded Goose - Main JavaScript
 * Dael City, 1932
 */

(function() {
    'use strict';

    // ─── Mobile Navigation Toggle ────────────────────────────────────────────
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');

            // Animate hamburger
            const spans = navToggle.querySelectorAll('span');
            spans.forEach(span => span.classList.toggle('active'));
        });

        // Close menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
            }
        });
    }

    // ─── Smooth Scroll for Anchor Links ──────────────────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ─── Fade In Animation on Scroll ─────────────────────────────────────────
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements that should animate in
    document.querySelectorAll('.spirit-card, .cocktail-card, .event-card, .gallery-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ─── Navigation Scroll Effect ────────────────────────────────────────────
    const nav = document.querySelector('.main-nav');
    let lastScroll = 0;

    if (nav) {
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;

            // Add background when scrolled
            if (currentScroll > 50) {
                nav.style.background = 'rgba(10, 10, 10, 0.95)';
                nav.style.backdropFilter = 'blur(10px)';
            } else {
                nav.style.background = 'linear-gradient(180deg, rgba(10, 10, 10, 1) 0%, transparent 100%)';
                nav.style.backdropFilter = 'none';
            }

            lastScroll = currentScroll;
        });
    }

    // ─── Gallery Lightbox (placeholder for future) ───────────────────────────
    // Gallery images will open in a lightbox when clicked
    // To be implemented when actual images are added

    // ─── Console Easter Egg ──────────────────────────────────────────────────
    console.log('%c🪿 The Gilded Goose', 'color: #c9a959; font-size: 24px; font-weight: bold;');
    console.log('%cDael City, 1932', 'color: #27ae60; font-style: italic;');
    console.log('%c"Some doors only open with the right words."', 'color: #8a8578;');

})();
