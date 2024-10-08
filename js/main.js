//#region Startup

    let pageStarted = false;

    function pageStartup() {
        let pageStartupDiv = document.getElementById("pageStartupDiv");

        pageStarted = true;
        navHamburgerCollapse();
        pageStartupDiv.classList = "page-startup page-startup-loaded";
    }

    //#endregion

    //#region Nav

    let navHamburgerOpen = false;

    // Check close
    function navHamburgerInteract() {
        let navHamburger = document.getElementById("navHamburgerCollapsable");
        let navHamburgerIcon = document.getElementById("navHamburgerIcon");
        
        if (navHamburgerOpen === false) {
            navHamburgerOpen = true;
            // close
            navHamburgerIcon.src = "./assets/logo/page/hamburger.svg";
            navHamburger.style.animation = "nav-hamburger-tray-close 0.3s forwards ease";
        } else {
            navHamburgerOpen = false;
            // open
            navHamburgerIcon.src = "./assets/logo/page/hamburger_close.svg";
            navHamburger.style.animation = "nav-hamburger-tray-open 0.2s forwards ease";
        }
    }

    // Force close
    function navHamburgerCollapse() {
        let navMain = document.getElementById("navMain");

        navHamburgerOpen = false;
        navMain.classList = "nav-main nav-main-button-anim";
        navHamburgerInteract();
    }

    // Auto close nav
    let viewWidth = window.matchMedia("(max-width: 1080px)");

    viewWidth.addEventListener("change", function() {
        navHamburgerCollapse();
    });

//#endregions