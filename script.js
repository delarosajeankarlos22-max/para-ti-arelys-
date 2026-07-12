document.addEventListener("DOMContentLoaded", () => {

    const titulo = document.querySelector("h1");

    titulo.animate([
        {transform:"scale(1)"},
        {transform:"scale(1.05)"},
        {transform:"scale(1)"}
    ],{
        duration:2000,
        iterations:Infinity
    });

});
