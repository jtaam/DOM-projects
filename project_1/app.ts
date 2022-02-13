// steps
// step 1 - onload
// step 2 - generate random color
// step 3 - collect all references
// step 4 - event the click event

// onload
window.onload = () => {
  main();
};

function main(): void {
  // collect all references
  const root = document.getElementById("root");
  const changeBtn = document.getElementById("change-btn");

  // event the click event
  changeBtn.addEventListener("click", function () {
    const bgColor: string = generateRGBColor();
    root.style.backgroundColor = bgColor;
  });
}

// generate random color
function generateRGBColor(): string {
  // rgb(0,0,0) ~ rgb(255,255,255)
  const red: number = getColor();
  const green: number = getColor();
  const blue: number = getColor();

  return `rgb(${red},${green},${blue})`;
}

// get color
function getColor(): number {
  return Math.floor(Math.random() * 255);
}
