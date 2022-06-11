import jump from "jump.js";

export default function() {
    const el = <HTMLImageElement>document.getElementById('back-top');
    if (!window.__theme.backtop) return false;
    window.addEventListener('scroll', () => {
        const scrollH = Math.max(document.body.scrollHeight,document.documentElement.scrollHeight) - document.documentElement.clientHeight - 150;
        const css = 157 - (~~(document.documentElement.scrollTop / scrollH * 100) * 1.57);
        if (css <= 0) el.classList.add('back-top-completed');
        else el.classList.remove('back-top-completed');

        const circle = el.querySelector('svg circle') as HTMLElement;
        circle.style.strokeDashoffset = css < 0 ? '0' : css.toString();
    })

    const _disabledMouseWheel = (e) => e.stopPropagation();
    function disabledMouseWheel(_) {
        if (_) {
            document.addEventListener('wheel', _disabledMouseWheel, {
                passive: true
            });
            document.addEventListener('touchstart', _disabledMouseWheel, {
                passive: true
            });
        } else {
            document.removeEventListener('wheel', _disabledMouseWheel);
            document.removeEventListener('touchstart', _disabledMouseWheel);
        }
    }
    el.onclick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (this._jump) return false;
        this._jump = true;
        disabledMouseWheel(true);
        const easeInOut = (t, b, c, d) => {
            return t === d ? b + c : c * (-(2 ** ((-10 * t) / d)) + 1) + b;
        };
        jump(
            document.body,
            {
                duration: 400,
                offset: 0,
                callback: () => {
                    this._jump = false;
                    disabledMouseWheel(false);
                },
                easing: easeInOut,
                a11y: false
            }
        );
    }
    window.addEventListener(
        'scroll',
        () => {
            if (!el) return false;
            if (window.scrollY > 800) {
                el.classList.add('x');
            } else {
                el.classList.remove('x');
            }
        },
        {
            passive: true
        }
    );
}