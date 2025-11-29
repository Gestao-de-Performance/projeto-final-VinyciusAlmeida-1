
$(document).ready(function () {
    function applyLanguage(lang) {
        $("[data-key]").each(function () {
            const key = $(this).data("key");

            if (this.placeholder !== undefined) {
                $(this).attr("placeholder", langData[lang][key]);
            } else {
                $(this).text(langData[lang][key]);
            }
        });

        localStorage.setItem("idioma", lang);
    }

    const saved = localStorage.getItem("idioma") || "pt";
    applyLanguage(saved);

    $(".mudarIdioma").on("click", function () {
        applyLanguage($(this).data("lang"));
    });
});
