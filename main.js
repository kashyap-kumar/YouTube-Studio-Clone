
// SIDENAV TOGGLE START #######
let sideNav = document.getElementById("sideNav");
let menuIcon = document.getElementById("menuIcon");
let bodyOverflow = document.getElementById("body");

let tempBG = document.createElement("div");
tempBG.id = "tempBG";
document.body.appendChild(tempBG)

menuIcon.onclick = () => {
    tempBG.classList.add("tempBG");
    sideNav.style.left = "0";
    bodyOverflow.style.overflow = "hidden";
}

document.getElementById("tempBG").onclick = () =>{
    sideNav.style.left = "-80vw";
    tempBG.classList.remove("tempBG")
    bodyOverflow.style.overflow = "";
}
// SIDENAV TOGGLE END   #######
