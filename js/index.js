console.log("hello");

let hamburgerIsOpen = false;

function openHamburger() {
  let hamburgerNav = document.getElementById("hamburger-nav");

  if (!hamburgerIsOpen) {
    console.log(hamburgerIsOpen);
    hamburgerNav.style.display = "block";
    hamburgerIsOpen = true;
  } else {
    console.log(hamburgerIsOpen);
    hamburgerNav.style.display = "none";
    hamburgerIsOpen = false;
  }
}
