alert("Welcome To My Site :)");
let userName = prompt("Enter Your Name:");
let color = prompt("Enter A Color:");

document.styleSheets[0].cssRules[1].style.cssText = `--main-color: ${color};`;
document.querySelector("p").innerHTML = `Welcome ${userName}`;
