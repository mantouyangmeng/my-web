const toggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (toggle && navLinks) {
    toggle.addEventListener('click', () => navLinks.classList.toggle('open'));
}

const filterBtns = document.querySelectorAll('.filter-btn');
const pubItems = document.querySelectorAll('.pub-item[data-filter]');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const f = btn.dataset.filter;
        pubItems.forEach(item => {
            item.style.display = (f === 'all' || item.dataset.filter.includes(f)) ? '' : 'none';
        });
    });
});
