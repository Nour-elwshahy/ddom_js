document.addEventListener("DOMContentLoaded", () => {
  const text = document.getElementById("text");

  document
    .querySelectorAll("#style-controls input[type='radio']")
    .forEach((radio) => {
      radio.addEventListener("change", updateStyle);
    });

  function updateStyle() {
    text.style.fontFamily = getRadioValue("fontFamily");
    text.style.textAlign = getRadioValue("textAlign");
    text.style.lineHeight = getRadioValue("lineHeight");
    text.style.letterSpacing = getRadioValue("letterSpacing");
    text.style.textIndent = getRadioValue("textIndent");
    text.style.textTransform = getRadioValue("textTransform");
    text.style.textDecoration = getRadioValue("textDecoration");

    const borderStyle = getRadioValue("textBorder");
    const borderColor = getRadioValue("borderColor");

    if (borderStyle === "none" || borderColor === "none") {
      text.style.border = "none";
    } else {
      text.style.border = `1px ${borderStyle} ${borderColor}`;
    }
  }

  function getRadioValue(name) {
    const checkedRadio = document.querySelector(
      `input[name="${name}"]:checked`
    );
    return checkedRadio ? checkedRadio.value : "";
  }
});
