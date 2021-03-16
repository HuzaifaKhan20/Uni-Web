// var navLinks = document.getElementById("navLinks");


// function showMenu(){
//     navLinks.style.right = "0";
// }

// function hideMenu(){
//     navLinks.style.right = "-200px";
// }




const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu');