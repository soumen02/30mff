window.onload = function () {
    let svg = document.getElementById("darkknight");
    // trigger click only when picture is clicked and not background
    svg.addEventListener("mouseover", function () {
        svg.style.opacity = 1;
    });
    svg.addEventListener("mouseout", function () {
        svg.style.opacity = 0.5;
    });
    svg.addEventListener("click", function () {
        alert("clicked");
    });
}
