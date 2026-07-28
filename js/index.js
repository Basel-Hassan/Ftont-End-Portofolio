var html = document.documentElement
var htmlTheme = html.classList
var body = document.body
var themeToggleButton = document.getElementById("theme-toggle-button")
var scrollToTop = document.getElementById("scroll-to-top")
var heroSection = document.getElementById("hero-section")
var aboutSection = document.getElementById("about")
var portfolioSection = document.getElementById("portfolio")
var experienceSection = document.getElementById("experience")
var testimonialsSection = document.getElementById("testimonials")
var contactSection = document.getElementById("contact")
var navLinksArr = document.querySelectorAll(".nav-links a")
var portfolioFiltersArr = Array.from(document.querySelectorAll("#portfolio-filters button"))
var portfolioGridArr = Array.from(document.querySelectorAll("#portfolio-grid > div"))
var navBar = document.getElementById("header")
var navPosition = navBar.getBoundingClientRect().bottom
var settingsToggle = document.getElementById("settings-toggle")
var settingsSidebar = document.getElementById("settings-sidebar")
var closeSettings = document.getElementById("close-settings")
var resetSettings = document.getElementById("reset-settings")
var fontOptions = Array.from(document.querySelectorAll(".font-option"))
var checkFont = JSON.parse(localStorage.getItem("ariaChecked"))
var colorsArr = [
    {title : "Purple Blue" , primary :"#6366f1" , secondary : "#8b5cf6" , accent : "#a855f7"} ,
    {title : "Pink Orange" , primary :"#ec4899" , secondary : "#f97316" , accent : "#fb923c"} ,
    {title : "Green Emerald" , primary :"#10b981" , secondary : "#059669" , accent : "#34d399"} ,
    {title : "Blue Cyan" , primary :"#3b82f6" , secondary : "#06b6d4" , accent : "#22d3ee"} ,
    {title : "Red Rose" , primary :"#ef4343" , secondary : "#f43f5e" , accent : "#fb7185"} ,
    {title : "Amber Orange" , primary :"#f59e0b" , secondary : "#ea580c" , accent : "#fbbf24"} ,
]
var themeColorsGrid = document.getElementById("theme-colors-grid")

storeagetheme()
fontStorage()
changeFont()
AddColorsBtns()

//*  Theame 
themeToggleButton.addEventListener("click" , function () {
    html.classList.toggle("dark")
    htmlTheme = html.classList
    localStorage.setItem("htmlTheme" , JSON.stringify(htmlTheme.value))
})

function storeagetheme() {
    if (JSON.parse(localStorage.getItem("htmlTheme")) == "dark") {
        html.classList.add("dark")
    }else if (JSON.parse(localStorage.getItem("htmlTheme")) != "dark" && JSON.parse(localStorage.getItem("htmlTheme")) != null ) {
        html.classList.remove("dark")
    }
}

//*  Scroll To Top
document.addEventListener("scroll" , function () {
    
    if (window.scrollY >= aboutSection.offsetTop) {
        scrollToTop.classList.add("show-btn")
    }else {
        scrollToTop.classList.remove("show-btn")
    }
})
scrollToTop.addEventListener("click" , function () {
    scroll(0,0)
})

//*  Scroll To Spy
function activeScrollSpy() {
        if (navPosition >= heroSection.getBoundingClientRect().top && navPosition <= heroSection.getBoundingClientRect().bottom) {
            navLinksArr[0].classList.add("active")
        }else {
            navLinksArr[0].classList.remove("active")
        }

        if (navPosition >= aboutSection.getBoundingClientRect().top && navPosition <= aboutSection.getBoundingClientRect().bottom) {
            navLinksArr[1].classList.add("active")
        }else {
            navLinksArr[1].classList.remove("active")
        }

        if (navPosition >= portfolioSection.getBoundingClientRect().top && navPosition <= portfolioSection.getBoundingClientRect().bottom) {
            navLinksArr[2].classList.add("active")
        }else {
            navLinksArr[2].classList.remove("active")
        }

        if (navPosition >= experienceSection.getBoundingClientRect().top && navPosition <= experienceSection.getBoundingClientRect().bottom) {
            navLinksArr[3].classList.add("active")
        }else {
            navLinksArr[3].classList.remove("active")
        }

        if (navPosition >= testimonialsSection.getBoundingClientRect().top && navPosition <= testimonialsSection.getBoundingClientRect().bottom) {
            navLinksArr[4].classList.add("active")
        }else {
            navLinksArr[4].classList.remove("active")
        }

        if (navPosition >= contactSection.getBoundingClientRect().top && navPosition <= contactSection.getBoundingClientRect().bottom) {
            navLinksArr[5].classList.add("active")
        }else {
            navLinksArr[5].classList.remove("active")
        }
    }

document.addEventListener("scroll" , activeScrollSpy)

//*  Navs & Tabs
for (let i = 0; i < portfolioFiltersArr.length; i++) {
        portfolioFiltersArr[i].addEventListener("click" , function (e) {
        e.target.classList.add("bg-linear-to-r" , "from-primary" , "to-secondary" , "text-white" , "hover:shadow-lg" , "hover:shadow-primary/50")
        e.target.classList.remove("bg-white" , "dark:bg-slate-800" , "text-slate-600" , "dark:text-slate-300" , "hover:bg-slate-100" , "dark:hover:bg-slate-700" , "border" , "border-slate-300" , "dark:border-slate-700")
        
        for (let index = 0; index < portfolioGridArr.length; index++) {
            if (e.target.getAttribute("data-filter") == "all") {
                portfolioGridArr[index].style.display = "";
            }else if(e.target.getAttribute("data-filter") !== portfolioGridArr[index].getAttribute("data-category")) {
                portfolioGridArr[index].style.display = "none";
            } else {
                portfolioGridArr[index].style.display = "";
                }
        }


        for (let x = 0; x < portfolioFiltersArr.length; x++) {
            if (portfolioFiltersArr[x] !== e.target) {
        portfolioFiltersArr[x].classList.remove("bg-linear-to-r" , "from-primary" , "to-secondary" , "text-white" , "hover:shadow-lg" , "hover:shadow-primary/50")
        portfolioFiltersArr[x].classList.add("bg-white" , "dark:bg-slate-800" , "text-slate-600" , "dark:text-slate-300" , "hover:bg-slate-100" , "dark:hover:bg-slate-700" , "border" , "border-slate-300" , "dark:border-slate-700")
            }
            
        }
        
    })
}

//*  Gear Side Bar

settingsToggle.addEventListener("click" , function() {
    settingsSidebar.classList.remove("translate-x-full")
    settingsToggle.style.right = "20rem"
})

closeSettings.addEventListener("click" , function() {
    settingsSidebar.classList.add("translate-x-full")
    settingsToggle.style.right = ""
})

function fontActivate(option) {
    option.classList.remove("border-slate-200", "dark:border-slate-700");
    option.classList.add(
        "active",
        "border-primary",
        "bg-slate-50",
        "dark:bg-slate-800"
    );
}

function notFontActivate(option) {
    option.classList.add("border-slate-200", "dark:border-slate-700");
    option.classList.remove(
        "active",
        "border-primary",
        "bg-slate-50",
        "dark:bg-slate-800"
    );
}

function changeFont() {
    for (let i = 0; i < fontOptions.length; i++) {
        
        if (fontOptions[i].getAttribute("aria-checked") == "true") {
            fontActivate(fontOptions[i])
            body.classList.add(`font-${fontOptions[i].getAttribute("data-font")}`)
        }else {
            body.classList.remove(`font-${fontOptions[i].getAttribute("data-font")}`)
            notFontActivate(fontOptions[i])
        }

        fontOptions[i].addEventListener("click" , function() {
            fontOptions[i].setAttribute("aria-checked", "true")
            for (let index = 0; index < fontOptions.length; index++) {
                body.classList.remove(`font-${fontOptions[index].getAttribute("data-font")}`)
                if (index !== i) {
                    notFontActivate(fontOptions[index])
                    fontOptions[index].setAttribute("aria-checked", "false")
                }
            }

            body.classList.add(`font-${fontOptions[i].getAttribute("data-font")}`)
            fontActivate(fontOptions[i])
            localStorage.setItem("ariaChecked" , i)
        })
    }
}

function fontStorage() {
    if (checkFont != null) {
        for (let i = 0; i < fontOptions.length; i++) {
            fontOptions[i].setAttribute("aria-checked", "false")
        }
        fontOptions[checkFont].setAttribute("aria-checked", "true")
    }
}

resetSettings.addEventListener("click" , function () {
    for (let i = 0; i < fontOptions.length; i++) {
        if (fontOptions[i].getAttribute("font-position")) {
            body.classList.add(`font-${fontOptions[i].getAttribute("data-font")}`)
            fontActivate(fontOptions[i])
            localStorage.setItem("ariaChecked" , i)
        }else {
            body.classList.remove(`font-${fontOptions[i].getAttribute("data-font")}`)
            notFontActivate(fontOptions[i])
        }
    }
})

function AddColorsBtns() {
    let box = ""
    for (let i = 0; i < colorsArr.length; i++) {
        box += `
        <button class="w-12 h-12 rounded-full cursor-pointer transition-transform hover:scale-110 border-2 border-slate-200 dark:border-slate-700 hover:border-primary shadow-sm" style="background: linear-gradient(135deg, ${colorsArr[i].primary}, ${colorsArr[i].secondary});" title="${colorsArr[i].title}" data-primary="${colorsArr[i].primary}" data-secondary="${colorsArr[i].secondary}" onclick="changeColors(${i})"></button>
        `
    }
    themeColorsGrid.innerHTML = box
}

function changeColors(index) {
    var colorBtnsArr = Array.from(document.querySelectorAll("#theme-colors-grid button"))
    clearColors(index , colorBtnsArr)
    
    colorBtnsArr[index].classList.add("ring-2" , "ring-primary" , "ring-offset-2" , "ring-offset-white" , "dark:ring-offset-slate-900")
    
    html.style.cssText = `
    --color-primary: ${colorsArr[index].primary}; 
    --color-secondary: ${colorsArr[index].secondary}; 
    --color-accent: ${colorsArr[index].accent};
    `
}

function clearColors(index ,  colorBtnsArr) {
    for (let i = 0; i < colorsArr.length; i++) {
        if (i !== index) {
            colorBtnsArr[i].classList.remove("ring-2" , "ring-primary" , "ring-offset-2" , "ring-offset-white" , "dark:ring-offset-slate-900")
        }
    }
}


//   <button class="w-12 h-12 rounded-full cursor-pointer transition-transform hover:scale-110 border-2 border-slate-200 dark:border-slate-700 hover:border-primary shadow-sm" style="background: linear-gradient(135deg, rgb(236, 72, 153), rgb(249, 115, 22));"></button>

// ring-2 ring-primary ring-offset-2 ring-offset-white dark:ring-offset-slate-900

// --color-primary: #ec4899; --color-secondary: #f97316; --color-accent: #fb923c;