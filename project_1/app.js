// steps
// step 1 - onload
// step 2 - generate random color
// step 3 - collect all references
// step 4 - event the click event
// onload
window.onload = function () {
    main();
};
function main() {
    // collect all references
    var root = document.getElementById("root");
    var changeBtn = document.getElementById("change-btn");
    // event the click event
    changeBtn.addEventListener("click", function () {
        var bgColor = generateRGBColor();
        root.style.backgroundColor = bgColor;
    });
}
// generate random color
function generateRGBColor() {
    // rgb(0,0,0) ~ rgb(255,255,255)
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(".concat(r, ",").concat(g, ",").concat(b, ")");
}
