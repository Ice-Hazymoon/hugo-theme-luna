export default function() {
    const activeMenu = document.querySelectorAll('.link-exact-active');
    if (activeMenu) Array.from(activeMenu).forEach((el) => el.classList.remove('link-exact-active'));
    const currentMenu = document.querySelectorAll(`[data-active-link="${window.location.pathname.replace(/\/$/, '')}/"]`);
    console.log(currentMenu);
    if (currentMenu) Array.from(currentMenu).forEach(el => el.classList.add('link-exact-active'));
}