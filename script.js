let container = document.querySelector(".container");
let qrInput = document.querySelector("#text");
let generateBtn = document.querySelector("#generate");
let img = document.querySelector("#qrImage");

let prevInput = "";
generateBtn.addEventListener("click", () => {
  let input = qrInput.value.trim();
  if (!input || input === prevInput) {
    alert("Please enter a valid text or URL");
    return;
  } else {
    prevInput = input;
    generateBtn.innerHTML = "Generating QR Code...";
    img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${input}`;
    img.onload = () => {
      generateBtn.innerHTML = "Generate QR Code";
      container.classList.add("active");
    };
  }
});
