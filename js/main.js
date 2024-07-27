let pageStarted = false;

//#region startup

function pageStartup() {
    let pageStartupDiv = document.getElementById("pageStartupDiv");

    pageStarted = true;
    navHamburguerCollapse();
    pageStartupDiv.classList = "page-startup page-startup-loaded";
}

//#endregion

//#region Nav

let navHamburguerOpen = false;

// Check close
function navHamburguerInteract() {
    let navHamburguer = document.getElementById("navHamburguerCollapsable");
    let navHamburguerIcon = document.getElementById("navHamburguerIcon");
    
    if (navHamburguerOpen === false) {
        navHamburguerOpen = true;
        navHamburguer.style.visibility = "hidden";
        navHamburguerIcon.src = "./assets/logo/page/hamburguer.svg";
    } else {
        navHamburguerOpen = false;
        navHamburguer.style.visibility = "visible";
        navHamburguerIcon.src = "./assets/logo/page/hamburguer_close.svg";
    }
}

// Force close
function navHamburguerCollapse() {
    navHamburguerOpen = false;
    navHamburguerInteract();
}

// Auto close nav
let viewWidth = window.matchMedia("(max-width: 1080px)");

viewWidth.addEventListener("change", function() {
    navHamburguerCollapse();
});

//#endregion