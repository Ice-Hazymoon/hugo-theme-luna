export default function() {
    const activeMenu = document.querySelector('.link-exact-active')
    if (activeMenu) activeMenu.classList.remove('link-exact-active');
    const currentMenu = document.querySelector(`[data-active-link="${window.location.pathname.replace(/\/$/, '')}/"]`);
    if (currentMenu) currentMenu.classList.add('link-exact-active');
}