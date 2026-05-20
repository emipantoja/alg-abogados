function toggle(id) {
    const el = document.getElementById(id);
    el.style.display = (el.style.display === 'block') ? 'none' : 'block';
}

document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', () => {
        const a = q.nextElementSibling;
        const icon = q.querySelector('i');
        a.style.display = (a.style.display === 'block') ? 'none' : 'block';
        icon.classList.toggle('fa-plus');
        icon.classList.toggle('fa-minus');
    });
});