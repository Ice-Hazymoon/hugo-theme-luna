export default function() {
    if (!window.__theme.console.enabled) return false;
    const text = `\n\n%c${window.__theme.console.leftText}%c${window.__theme.console.rightText}%c\n\nhttps://github.com/Ice-Hazymoon/hugo-theme-luna\n\n`;
    const leftStyle = `background: ${window.__theme.console.leftColor};padding:5px 10px;border-radius:5px 0 0 5px;font-size:16px;color:#fff;`;
    const rightStyle = `background: ${window.__theme.console.rightColor};padding:5px 10px;border-radius:0 5px 5px 0;font-size:16px;color:#fff;`;
    const linkStyle = `font-style:italic;`;
    console.log(text,leftStyle,  rightStyle, linkStyle);
}