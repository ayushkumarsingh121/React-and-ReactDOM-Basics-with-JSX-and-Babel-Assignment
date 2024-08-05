//  Problem Statement Create a React Element: Your primary task is to use React.createElement to create a new React element. This element should be a paragraph (
// ) with the text "Seize the day".


// React code  

let root = ReactDOM.createRoot(document.getElementById("root"))
let pTag = React.createElement("p", null, "Seize the day")
root.render(pTag)

// JavaScript code

// let pTag = document.createElement("p");
// pTag.textContent = "Seize the day";
// document.getElementById("root").appendChild(pTag);
