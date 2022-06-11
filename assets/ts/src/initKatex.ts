import katexRander from 'katex-render';
import 'katex-copy';

export default function() {
    this._renderKatex = () => {
        if (window.__theme.katex) {
            katexRander(document.body, {
                delimiters: [
                    {left: "$$", right: "$$", display: true},
                    {left: "$", right: "$", display: false},
                    {left: "\\(", right: "\\)", display: false},
                    {left: "\\begin{equation}", right: "\\end{equation}", display: true},
                    {left: "\\begin{align}", right: "\\end{align}", display: true},
                    {left: "\\begin{alignat}", right: "\\end{alignat}", display: true},
                    {left: "\\begin{gather}", right: "\\end{gather}", display: true},
                    {left: "\\begin{CD}", right: "\\end{CD}", display: true},
                    {left: "\\[", right: "\\]", display: true},
                ],
                // • rendering keys, e.g.:
                throwOnError : true
            })
        }
    };
    this._renderKatex();
}