let html = document.getElementById("html");
let html_img = document.getElementById("html-img");
let css = document.getElementById("css");
let css_img = document.getElementById("css-img");
let js = document.getElementById("js");
let js_img = document.getElementById("js-img");
let ts = document.getElementById("ts");
let ts_img = document.getElementById("ts-img");
let react = document.getElementById("react");
let react_img = document.getElementById("react-img");
let tailwind = document.getElementById("tailwind");
let tailwind_img = document.getElementById("tailwind-img");
let nodejs = document.getElementById("nodejs");
let nodejs_img = document.getElementById("nodejs-img");
let python = document.getElementById("python");
let python_img = document.getElementById("python-img");
let vs_code = document.getElementById("vs-code");
let vs_code_img = document.getElementById("vs-code-img");
let git = document.getElementById("git");
let git_img = document.getElementById("git-img");
let github = document.getElementById("github");
let github_img = document.getElementById("github-img");
let portflio_img = document.getElementById("portfolio-img");
let notevault_img = document.getElementById("notevault-img");
let portfolio = document.getElementById("portfolio");
let notevault = document.getElementById("notevault");

html.addEventListener("mouseover", () => {
    html_img.style.boxShadow = "1px 0px 20px 0.4em rgba(93, 44, 39, 0.69)"
    html_img.style.transition = "all 0.3s ease-in"
    html_img.style.scale = "1.1"
})

html.addEventListener("mouseout", () => {
    html_img.style.boxShadow = "none"
    html_img.style.scale = "1"
})

css.addEventListener("mouseover", () => {
    css_img.style.boxShadow = "1px 0px 20px 0.4em rgba(18, 55, 89, 0.69)"
    css_img.style.transition = "all 0.3s ease-in"
    css_img.style.scale = "1.1"
})

css.addEventListener("mouseout", () => {
    css_img.style.boxShadow = "none"
    css_img.style.scale = "1"
})

js.addEventListener("mouseover", () => {
    js_img.style.boxShadow = "1px 0px 20px 0.4em rgba(96, 85, 26, 0.69)"
    js_img.style.transition = "all 0.3s ease-in"
    js_img.style.scale = "1.1"
})

js.addEventListener("mouseout", () => {
    js_img.style.boxShadow = "none"
    js_img.style.scale = "1"
})

ts.addEventListener("mouseover", () => {
    ts_img.style.boxShadow = "1px 0px 20px 0.4em rgba(28, 56, 92, 0.69)"
    ts_img.style.transition = "all 0.3s ease-in"
    ts_img.style.scale = "1.1"
})

ts.addEventListener("mouseout", () => {
    ts_img.style.boxShadow = "none"
    ts_img.style.scale = "1"
})

react.addEventListener("mouseover", () => {
    react_img.style.boxShadow = "1px 0px 20px 0.4em rgba(44, 90, 111, 0.69)"
    react_img.style.transition = "all 0.3s ease-in"
    react_img.style.scale = "1.1"
})

react.addEventListener("mouseout", () => {
    react_img.style.boxShadow = "none"
    react_img.style.scale = "1"
})

tailwind.addEventListener("mouseover", () => {
    tailwind_img.style.boxShadow = "1px 0px 20px 0.4em rgba(30, 79, 110, 0.69)"
    tailwind_img.style.transition = "all 0.3s ease-in"
    tailwind_img.style.scale = "1.1"
})

tailwind.addEventListener("mouseout", () => {
    tailwind_img.style.boxShadow = "none"
    tailwind_img.style.scale = "1"
})

nodejs.addEventListener("mouseover", () => {
    nodejs_img.style.boxShadow = "1px 0px 20px 0.4em rgba(47, 70, 59, 0.69)"
    nodejs_img.style.transition = "all 0.3s ease-in"
    nodejs_img.style.scale = "1.1"
})

nodejs.addEventListener("mouseout", () => {
    nodejs_img.style.boxShadow = "none"
    nodejs_img.style.scale = "1"
})

python.addEventListener("mouseover", () => {
    python_img.style.boxShadow = "1px 0px 20px 0.4em rgba(28, 52, 78, 0.69)"
    python_img.style.transition = "all 0.3s ease-in"
    python_img.style.scale = "1.1"
})

python.addEventListener("mouseout", () => {
    python_img.style.boxShadow = "none"
    python_img.style.scale = "1"
})

vs_code.addEventListener("mouseover", () => {
    vs_code_img.style.boxShadow = "1px 0px 20px 0.4em rgba(11, 57, 94, 0.69)"
    vs_code_img.style.transition = "all 0.3s ease-in"
    vs_code_img.style.scale = "1.1"
})

vs_code.addEventListener("mouseout", () => {
    vs_code_img.style.boxShadow = "none"
    vs_code_img.style.scale = "1"
})

git.addEventListener("mouseover", () => {
    git_img.style.boxShadow = "1px 0px 20px 0.4em rgba(94, 42, 39, 0.69)"
    git_img.style.transition = "all 0.3s ease-in"
    git_img.style.scale = "1.1"
})

git.addEventListener("mouseout", () => {
    git_img.style.boxShadow = "none"
    git_img.style.scale = "1"
})

github.addEventListener("mouseover", () => {
    github_img.style.boxShadow = "1px 0px 20px 0.4em rgba(48, 58, 71, 0.88)"
    github_img.style.transition = "all 0.3s ease-in"
    github_img.style.scale = "1.1"
})

github.addEventListener("mouseout", () => {
    github_img.style.boxShadow = "none"
    github_img.style.scale = "1"
})

portfolio.addEventListener("mouseover", () => {
    portflio_img.style.scale = "1.03"
    portflio_img.style.transition = "all 0.3s ease-in"
})

portfolio.addEventListener("mouseout", () => {
    portflio_img.style.scale = '1'
})

notevault.addEventListener("mouseover", () => {
    notevault_img.style.scale = "1.03"
    notevault_img.style.transition = "all 0.3s ease-in"
})

notevault.addEventListener("mouseout", () => {
    notevault_img.style.scale = "1"
})

let body = document.getElementById("body")
let darkMode = document.getElementById("darkMode")
let lightMode = document.getElementById("lightMode")
let name = document.getElementById("name-label");
let email = document.getElementById("email-label");
let message = document.getElementById("message-label");
let aboutHeading = document.getElementById("about-heading")

function togglelightTheme() {
    body.classList.toggle("lightModeOn")
    localStorage.setItem("theme", body.classList.contains("lightModeOn") ? "light" : "dark");
}

window.onload = () => {
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("lightModeOn");
        darkMode.style.display = "block";
        lightMode.style.display = "none";
    }
}

let menu = document.getElementById("menu");
let cross = document.getElementById("cross");
let ul = document.getElementById("ul");

menu.addEventListener("click", () => {
    ul.classList.add("UlOpen");
    cross.style.display = "block"
    menu.style.display = "none"
    menu.style.transition = "all 0.3s ease-in"
})

cross.addEventListener("click", () => {
    ul.classList.remove("UlOpen")
    cross.style.display = "none"
    menu.style.display = "block"
    cross.style.transition = "all 0.3s ease-in"
})

darkMode.addEventListener("click", () => {
    darkMode.style.display = "none"
    lightMode.style.display = "block"
})

lightMode.addEventListener("click", () => {
    lightMode.style.display = "none"
    darkMode.style.display = "block"
})

let about = document.getElementById("about-nav")
let skill = document.getElementById("skill-nav")
let project = document.getElementById("project-nav")
let contact = document.getElementById("contact-nav")

about.addEventListener("click", () => {
    ul.classList.remove("UlOpen")
    if(window.innerWidth <= 750) {
        cross.style.display = "none"
        menu.style.display = "block"
    }
})

skill.addEventListener("click", () => {
    ul.classList.remove("UlOpen")
    if (window.innerWidth <= 750) {
        cross.style.display = "none"
        menu.style.display = "block"
    }
})

project.addEventListener("click", () => {
    ul.classList.remove("UlOpen")
    if (window.innerWidth <= 750) {
        cross.style.display = "none"
        menu.style.display = "block"
    }
})

contact.addEventListener("click", () => {
    ul.classList.remove("UlOpen")
    if (window.innerWidth <= 750) {
        cross.style.display = "none"
        menu.style.display = "block"
    }
})

// Add this after your existing JavaScript code
let navLinks = document.querySelectorAll('.header-ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        ul.classList.remove("UlOpen");
        cross.style.display = "none";
        menu.style.display = "block";
    });
});