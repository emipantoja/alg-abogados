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

// --- FUNCIONALIDAD DEL MENÚ MÓVIL ---
const mobileMenuBtn = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');
const menuIcon = mobileMenuBtn.querySelector('i');

mobileMenuBtn.addEventListener('click', () => {
    // Alterna la clase 'active' para abrir/cerrar el menú
    navLinks.classList.toggle('active');
    
    // Cambia el icono de hamburguesa a una "X"
    if (navLinks.classList.contains('active')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
    } else {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    }
});

// Cerrar el menú automáticamente al hacer clic en un enlace
document.querySelectorAll('#nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    });
});
