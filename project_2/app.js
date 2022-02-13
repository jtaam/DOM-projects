// steps
// step 1 - onload
// step 2 - generate hexcode
// step 3 - references
// step 4 - event
// onload
window.onload = function () {
    main();
};
function main() {
    // collect all references
    var root = document.getElementById("root");
    var generateBtn = document.getElementById("generate-btn");
    var output = document.getElementById("output");
    //   event
    generateBtn.addEventListener("click", function () {
        var bgColor = generateHexCode();
        root.style.backgroundColor = bgColor;
        output.value = bgColor;
    });
}
// generate hexcode
function generateHexCode() {
    var red = getColor();
    var green = getColor();
    var blue = getColor();
    return "#".concat(red).concat(green).concat(blue);
}
// get color
function getColor() {
    return Math.floor(Math.random() * 255).toString(16);
}
