// Init AOS
AOS.init({
    duration: 800,
    once: true,
    offset: 60
});

// ---- Theme Toggle ----
const toggleBtn = document.getElementById('themeToggle');
const icon = toggleBtn.querySelector('i');

if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// ---- Hamburger Toggle ----
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');
    });
});

// ---- Smooth Scroll for Anchor Links ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.scrollY - offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    });
});

// ---- Horizontal Scroll for Projects ----
const scrollContainer = document.getElementById('projectsScroll');
const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');

scrollLeftBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: -340, behavior: 'smooth' });
});
scrollRightBtn.addEventListener('click', () => {
    scrollContainer.scrollBy({ left: 340, behavior: 'smooth' });
});

function checkScrollButtons() {
    if (scrollContainer.scrollWidth <= scrollContainer.clientWidth) {
        scrollLeftBtn.style.display = 'none';
        scrollRightBtn.style.display = 'none';
    } else {
        scrollLeftBtn.style.display = 'flex';
        scrollRightBtn.style.display = 'flex';
    }
}
window.addEventListener('resize', checkScrollButtons);
checkScrollButtons();

// ---- Contact Form (Demo) ----
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = this.querySelector('.btn-submit');
    const original = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';
    btn.disabled = true;
    setTimeout(() => {
        btn.innerHTML = '<i class="fas fa-check" style="margin-right:8px;"></i> Sent!';
        btn.style.background = '#1e7e34';
        setTimeout(() => {
            btn.innerHTML = original;
            btn.style.background = '';
            btn.disabled = false;
            form.reset();
        }, 2000);
    }, 1500);
});