// pages

function keyboard() {
    largePage();
    document.getElementById('home').className = 'hidden';
    document.getElementById('home-nav').className = 'hidden';
    document.getElementById('keyboard').className = 'visible';
    document.getElementById('keyboard-nav').className = 'visible';
    document.title = "picturamundi | keyboard"
}

function home() {
    smallPage();
    document.title = "picturamundi"
    setTimeout(() => {
        document.getElementById('home').className = 'visible';
        document.getElementById('home-nav').className = 'visible';
        document.getElementById('keyboard').className = 'hidden';
        document.getElementById('keyboard-nav').className = 'hidden';
    }, 350);
}

function smallPage() {
    document.getElementById('main-col').className = "shrink";
    document.getElementById('content').className = "shrink";
}

function largePage() {
    document.getElementById('main-col').className = "expand";
    document.getElementById('content').className = "expand";
}

// remember theme preference

document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body')
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
        body.className = storedTheme;
    }
})

// toggle theme button

function themeToggle() {
    if (body.className.includes('light-theme')) {
        body.className = "dark-theme";
        document.getElementById('legend').className = "dark-img";
    }
    else {
        body.className = "light-theme";
        document.getElementById('legend').className = "light-img";
    }
    localStorage.setItem('theme', body.className)
}

// show logo on first visit

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.noFirstVisit != "1") {
        document.getElementById('logo').style.display = "block";
        document.getElementById('home-box').style.animation = "home-box 4.5s";
        localStorage.noFirstVisit = "1";
    }
})

// forget first visit and reload button

function showLogo() {
    localStorage.noFirstVisit = null;
    location.reload();
}

// theme and favicon adapts to browser theme on load

document.addEventListener('DOMContentLoaded', () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.querySelector("body").className = "dark-theme";
        document.querySelector("link[rel='icon']").href = "favicon/dark.png";
        document.getElementById('legend').className = "dark-img";
    } else {
        document.querySelector("body").className = "light-theme";
        document.querySelector("link[rel='icon']").href = "favicon/light.png";
        document.getElementById('legend').className = "light-img";
    }
})

// theme and favicon adapts to browser theme on change

window.matchMedia('(prefers-color-scheme: dark)')
    .addEventListener('change', ({ matches }) => {
        if (matches) {
            document.querySelector("body").className = "dark-theme";
            document.querySelector("link[rel='icon']").href = "favicon/dark.png";
            document.getElementById('legend').className = "dark-img";
        } else {
            document.querySelector("body").className = "light-theme";
            document.querySelector("link[rel='icon']").href = "favicon/light.png";
            document.getElementById('legend').className = "light-img";
        }
    })

    // custom back arrow

    (function (window, location) {
        history.replaceState(null, document.title, location.pathname + "#!/stealingyourhistory");
        history.pushState(null, document.title, location.pathname);
        window.addEventListener("popstate", function () {
            if (location.hash === "#!/stealingyourhistory") {
                history.replaceState(null, document.title, location.pathname);
                setTimeout(function () {
                    location.replace("index.html");
                }, 0);
            }
        }, false);
    }(window, location));