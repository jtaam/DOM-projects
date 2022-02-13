// steps
// step 1 - onload
// step 2 - generate hexcode
// step 3 - references
// step 4 - event

// onload
window.onload = () => {
  main();
};

function main() {
  // collect all references
  const root = document.getElementById("root");
  const generateBtn = document.getElementById("generate-btn");
  const output = document.getElementById("output");

  //   event
  generateBtn.addEventListener("click", function () {
    const bgColor: string = generateHexCode();
    root.style.backgroundColor = bgColor;
    (output as HTMLInputElement).value = bgColor;
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
