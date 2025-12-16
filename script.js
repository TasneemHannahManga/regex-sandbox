** start of script.js **

const regexPattern = document.querySelector("#pattern");
const stringToTest = document.querySelector("#test-string");
const testButton = document.querySelector("#test-btn");
const testResult = document.querySelector("#result");
const caseInsensitiveFlag = document.querySelector("#i");
const globalFlag = document.querySelector("#g");

function getFlags () {
  if (i.checked && g.checked) {
    return "gi";
  } else if (i.checked && !g.checked) {
    return "i";
  } else if (!i.checked && g.checked) {
    return "g";
  } else if (!i.checked && !g.checked) {
    return "";
  }
}

testButton.addEventListener("click", () => {
  const regex = new RegExp(regexPattern.value, getFlags());

  const match = stringToTest.innerText.match(regex);

  if (match) {
    stringToTest.innerHTML = stringToTest.innerHTML.replace(regex, (content) => `<span class='highlight'>${content}</span>`);
    testResult.innerHTML = match.join(", ");
  } else {
    testResult.innerHTML = "no match"
  }
})

** end of script.js **
