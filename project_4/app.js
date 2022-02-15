// generate random hexcode to change background color and click to copy in clipboard
// step 1 - onload
// step 2 - generate hexcode
// step 3 - references
// step 4 - click event
// step 5 - copy event
// step 6 - copy confirmation toast message - activate
// step 7 - copy confirmation toast message - create
// step 8 - copy confirmation toast message - clear
// Global
var div = null;
// onload
window.onload = function () {
    main();
};
function main() {
    // collect all references
    var root = document.getElementById("root");
    var generateBtn = document.getElementById("generate-btn");
    var output = document.getElementById("output");
    var copyBtn = document.getElementById("copy-btn");
    //   event
    generateBtn.addEventListener("click", function () {
        var bgColor = generateHexCode();
        root.style.backgroundColor = bgColor;
        output.value = bgColor;
    });
    // copy
    copyBtn.addEventListener("click", function () {
        if (div !== null) {
            div.remove();
            div = null;
        }
        window.navigator.clipboard.writeText(output.value);
        generateCopyConfirmToastMessage("".concat(output.value, " in clipboard"));
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
// toast message
function generateCopyConfirmToastMessage(msg) {
    div = document.createElement("div");
    div.innerText = msg;
    div.className = "toast-message toast-message-slide-in";
    div.addEventListener("click", function () {
        div.classList.remove("toast-message-slide-in");
        div.classList.add("toast-message-slide-out");
        div.addEventListener("animationend", function () {
            div.remove();
            div = null;
        });
    });
    document.body.appendChild(div);
}
