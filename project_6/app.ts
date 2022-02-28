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
let div: HTMLElement = null;

// onload
window.onload = () => {
  main();
};

function main() {
  // collect all references
  const root = document.getElementById("root");
  const generateBtn = document.getElementById("generate-btn");
  const output: HTMLElement = document.getElementById("output");
  const copyBtn: HTMLElement = document.getElementById("copy-btn");

  //   event
  generateBtn.addEventListener("click", function () {
    const bgColor: string = generateHexCode();
    root.style.backgroundColor = bgColor;
    (output as HTMLInputElement).value = bgColor.substring(1);
  });

  // copy
  copyBtn.addEventListener("click", function () {
    if (div !== null) {
      div.remove();
      div = null;
    }

    window.navigator.clipboard.writeText(
      "#" + (output as HTMLInputElement).value
    );

    if (isValidHex((output as HTMLInputElement).value)) {
      generateCopyConfirmToastMessage(
        `#${(output as HTMLInputElement).value} in clipboard`
      );
    } else {
      alert("Invalid color code");
    }
  });

  output.addEventListener("keyup", function (e: any) {
    const color = e.target.value;
    if (color) {
      (output as HTMLInputElement).value = color.toUpperCase();
      if (isValidHex(color)) {
        console.log(color);
        root.style.backgroundColor = `#${color}`;
      }
    }
  });
}

// generate hexcode
function generateHexCode(): string {
  const red: string = getColor();
  const green: string = getColor();
  const blue: string = getColor();

  return `#${red}${green}${blue}`;
}

// get color
function getColor(): string {
  return Math.floor(Math.random() * 255)
    .toString(16)
    .toUpperCase();
}

// toast message
function generateCopyConfirmToastMessage(msg: string) {
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
function isValidHex(color: string) {
  if (color.length !== 6) return false;
  return /^[0-9A-Fa-f]{6}$/i.test(color);
}
