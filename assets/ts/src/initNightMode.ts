export default function() {
    const el = document.querySelector('.dark-mode-switch') as HTMLElement;
    const _i = el.querySelector('i') as HTMLElement;

    function setDarkMode(isDark) {
        if (isDark) {
            _i.classList.remove('eva-moon');
            _i.classList.add('eva-sun');
            el.title = window.__theme.i18n.darkMode.light;
            document.documentElement.classList.add('dark');
        } else {
            _i.classList.remove('eva-sun');
            _i.classList.add('eva-moon');
            el.title = window.__theme.i18n.darkMode.dark;
            document.documentElement.classList.remove('dark');
        }
    }
    
    if (window.__theme.autoDarkMode) {
        setDarkMode(localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches));
    } else {
        setDarkMode(localStorage.theme === 'dark');
    }
    

    el.addEventListener('click', () => {
        if (_i.classList.contains('eva-sun')) {
            localStorage.setItem('theme', 'light');
            setDarkMode(false);
        } else {
            localStorage.setItem('theme', 'dark');
            setDarkMode(true);
        }
    })
}