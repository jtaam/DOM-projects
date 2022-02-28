// generate random hexcode to change background color and click to copy in clipboard
// step 1 - onload
// step 2 - generate hexcode
// step 3 - references
// step 4 - click event
// step 5 - copy event
// step 6 - copy confirmation toast message - activate
// step 7 - copy confirmation toast message - create
// step 8 - copy confirmation toast message - clear
// step 9 - create isHexValid function
// step 10 - implement change handler on input field
// step 11 - prevent invalid hexcode
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
        output.value = bgColor.substring(1);
    });
    // copy
    copyBtn.addEventListener("click", function () {
        if (div !== null) {
            div.remove();
            div = null;
        }
        window.navigator.clipboard.writeText("#" + output.value);
        if (isValidHex(output.value)) {
            generateCopyConfirmToastMessage("#".concat(output.value, " in clipboard"));
        }
        else {
            alert("Invalid color code");
        }
    });
    output.addEventListener("keyup", function (e) {
        var color = e.target.value;
        if (color) {
            output.value = color.toUpperCase();
            if (isValidHex(color)) {
                console.log(color);
                root.style.backgroundColor = "#".concat(color);
            }
        }
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
    return Math.floor(Math.random() * 255)
        .toString(16)
        .toUpperCase();
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
// hex valid
function isValidHex(color) {
    if (color.length !== 6)
        return false;
    return /^[0-9A-Fa-f]{6}$/i.test(color);
}
