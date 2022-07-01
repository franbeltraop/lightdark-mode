function changeMode () {
  chanceClasses ();
  changeText ();
}

function chanceClasses () {
  button.classList.toggle (darkModeClass);
  h1.classList.toggle (darkModeClass);
  body.classList.toggle (darkModeClass);
  footer.classList.toggle (darkModeClass);
}

function changeText () {
  if (body.classList.contains (darkModeClass)) {
    button.innerHTML = "Light Mode";
    h1.innerHTML = "Dark Mode ON";
    return;
  }

  button.innerHTML = "Dark Mode";
  h1.innerHTML = "Light Mode ON";
}

const darkModeClass = "dark-mode";
const button = document.getElementById ("mode-selector");
const h1 = document.getElementById ("page-title");
const body = document.getElementsByTagName ("body") [0];
const footer = document.getElementsByTagName ("footer") [0];

button.addEventListener ("click", changeMode);