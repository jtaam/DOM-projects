// generate random hexcode to change background color and click to copy in clipboard
// step 1 - onload
// step 2 - generate hexcode
// step 3 - references
// step 4 - click event
// step 5 - copy event

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
    window.navigator.clipboard.writeText((output as HTMLInputElement).value);
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
