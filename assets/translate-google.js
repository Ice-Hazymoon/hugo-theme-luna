(function () {
    window.googleTranslateElementInit = function () {
        new google.translate.TranslateElement(
            {pageLanguage: 'en'},
            'google_translate_element'
        );
    }
    
    var addScript = function (url) {
        var script = document.createElement('script');
        script.src = url;
        document.body.appendChild(script);
    }

    addScript('//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
})();