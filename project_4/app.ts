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
let div: HTMLElement = null;

// onload
window.onload = () => {
  main();
};

function main() {
  // collect all references
  const root = document.getElementById("root");
  const generateBtn = document.getElementById("generate-btn");
  const output = document.getElementById("output");
  const copyBtn: HTMLElement = document.getElementById("copy-btn");

  //   event
  generateBtn.addEventListener("click", function () {
    const bgColor: string = generateHexCode();
    root.style.backgroundColor = bgColor;
    (output as HTMLInputElement).value = bgColor;
  });

  // copy
  copyBtn.addEventListener("click", function () {
    if (div !== null) {
      div.remove();
      div = null;
    }
    window.navigator.clipboard.writeText((output as HTMLInputElement).value);

    generateCopyConfirmToastMessage(
      `${(output as HTMLInputElement).value} in clipboard`
    );
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
  return Math.floor(Math.random() * 255).toString(16);
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
