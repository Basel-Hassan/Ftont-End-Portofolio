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
var navLinksArr = Array.from(document.querySelectorAll(".nav-links a"))
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
var checkColor = localStorage.getItem("checkColor")
var colorsArr = [
    {title : "Purple Blue" , primary :"#6366f1" , secondary : "#8b5cf6" , accent : "#a855f7"} ,
    {title : "Pink Orange" , primary :"#ec4899" , secondary : "#f97316" , accent : "#fb923c"} ,
    {title : "Green Emerald" , primary :"#10b981" , secondary : "#059669" , accent : "#34d399"} ,
    {title : "Blue Cyan" , primary :"#3b82f6" , secondary : "#06b6d4" , accent : "#22d3ee"} ,
    {title : "Red Rose" , primary :"#ef4343" , secondary : "#f43f5e" , accent : "#fb7185"} ,
    {title : "Amber Orange" , primary :"#f59e0b" , secondary : "#ea580c" , accent : "#fbbf24"} ,
]
var themeColorsGrid = document.getElementById("theme-colors-grid")
var testimonialsCarousel = document.getElementById("testimonials-carousel")
var testimonialCardsArr = Array.from(document.querySelectorAll(".testimonial-card"))
var carouselIndicatorsArr = Array.from(document.querySelectorAll(".carousel-indicator"))
var nextTestimonial = document.getElementById("next-testimonial")
var prevTestimonial = document.getElementById("prev-testimonial")
var carouselCurrentIndex = 0
var fullName = document.getElementById("full-name")
var nameMessage = document.getElementById("nameMessage")
var email = document.getElementById("email")
var emailMessage = document.getElementById("emailMessage")
var phone = document.getElementById("phone")
var phoneMessage = document.getElementById("phoneMessage")
var projectDetails = document.getElementById("project-details")
var detailsMessage = document.getElementById("detailsMessage")
var submit = document.querySelector("form button")
var kindBtn = document.getElementById("kindBtn")
var kindArrow = document.getElementById("kindArrow")
var kindOptions = document.getElementById("kindOptions")
var kindOptionsArr = Array.from(document.querySelectorAll("#kindOptions .custom-option"))
var kindText = document.getElementById("kindText")
var salaryBtn = document.getElementById("salaryBtn")
var salaryArrow = document.getElementById("salaryArrow")
var salaryOptions = document.getElementById("salaryOptions")
var salaryOptionsArr = Array.from(document.querySelectorAll("#salaryOptions .custom-option"))
var salaryText = document.getElementById("salaryText")
var navLinks = document.querySelector(".nav-links")
var mobileMenuBtn = document.querySelector(".mobile-menu-btn")
var menuIcon = document.getElementById("menuIcon")

storeagetheme()
fontStorage()
changeFont()
AddColorsBtns()
ColorStorage()
changeIndicatorsStyle(carouselCurrentIndex)
clickIndicators()

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
                portfolioGridArr[index].style.display = ""
            }else if(e.target.getAttribute("data-filter") !== portfolioGridArr[index].getAttribute("data-category")) {
                portfolioGridArr[index].style.display = "none"
            } else {
                portfolioGridArr[index].style.display = ""
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

//*  Font

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

//*  color

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

    localStorage.setItem("checkColor" , index)
}

function clearColors(index ,  colorBtnsArr) {
    for (let i = 0; i < colorsArr.length; i++) {
        if (i !== index) {
            colorBtnsArr[i].classList.remove("ring-2" , "ring-primary" , "ring-offset-2" , "ring-offset-white" , "dark:ring-offset-slate-900")
        }
    }
}

function ColorStorage() {
    var colorBtnsArr = Array.from(document.querySelectorAll("#theme-colors-grid button"))
    clearColors(checkColor , colorBtnsArr)
    if (checkColor != null) {
    colorBtnsArr[checkColor].classList.add("ring-2" , "ring-primary" , "ring-offset-2" , "ring-offset-white" , "dark:ring-offset-slate-900")
    
    html.style.cssText = `
    --color-primary: ${colorsArr[checkColor].primary}; 
    --color-secondary: ${colorsArr[checkColor].secondary}; 
    --color-accent: ${colorsArr[checkColor].accent};
    `
    } else {
    colorBtnsArr[0].classList.add("ring-2" , "ring-primary" , "ring-offset-2" , "ring-offset-white" , "dark:ring-offset-slate-900")
    
    html.style.cssText = `
    --color-primary: ${colorsArr[0].primary}; 
    --color-secondary: ${colorsArr[0].secondary}; 
    --color-accent: ${colorsArr[0].accent};
    `
    }
}

//*  reset

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

    var colorBtnsArr = Array.from(document.querySelectorAll("#theme-colors-grid button"))
    colorBtnsArr[0].classList.add("ring-2" , "ring-primary" , "ring-offset-2" , "ring-offset-white" , "dark:ring-offset-slate-900")
    
    html.style.cssText = `
    --color-primary: ${colorsArr[0].primary}; 
    --color-secondary: ${colorsArr[0].secondary}; 
    --color-accent: ${colorsArr[0].accent};
    `
    localStorage.setItem("checkColor" , 0)
})

//*  Carousel
function getVisibleCards() {
    if (window.innerWidth >= 1024) {
        return 3;
    }

    if (window.innerWidth >= 640) {
        return 2;
    }

    return 1;
}

function moveCarousel(currentIndex) {
    // let containerWidth = testimonialsCarousel.offsetWidth
    // let cardWidth = testimonialCardsArr[0].offsetWidth;
    // let visibleCards = Math.round(containerWidth / cardWidth);
    let visibleCards = getVisibleCards();
    let translate = ((100 / visibleCards) * currentIndex)
    testimonialsCarousel.style.cssText = `
    transform: translateX(${translate}%);
    `
}

nextTestimonial.addEventListener("click" , function() {
    carouselCurrentIndex++
    if (carouselCurrentIndex >=  carouselIndicatorsArr.length) {
        carouselCurrentIndex = 0
    }

    moveCarousel(carouselCurrentIndex)
    changeIndicatorsStyle(carouselCurrentIndex)
})

prevTestimonial.addEventListener("click" , function() {
    carouselCurrentIndex--
    if (carouselCurrentIndex < 0) {
        carouselCurrentIndex = carouselIndicatorsArr.length - 1
    }
    moveCarousel(carouselCurrentIndex)
    changeIndicatorsStyle(carouselCurrentIndex)
})

function changeIndicatorsStyle(currentIndex) {
    for (let i = 0; i < carouselIndicatorsArr.length; i++) {
        if (carouselIndicatorsArr[i].getAttribute("data-index") == currentIndex) {
            carouselIndicatorsArr[i].classList.add("active" , "bg-accent" , "scale-125")
            carouselIndicatorsArr[i].classList.remove("bg-slate-400" , "dark:bg-slate-600")
        }else {
            carouselIndicatorsArr[i].classList.remove("active" , "bg-accent" , "scale-125")
            carouselIndicatorsArr[i].classList.add("bg-slate-400" , "dark:bg-slate-600")
        }
    }
}

function clickIndicators() {
    // let containerWidth = testimonialsCarousel.offsetWidth
    // let cardWidth = testimonialCardsArr[0].offsetWidth;
    // let visibleCards = Math.round(containerWidth / cardWidth);
    let visibleCards = getVisibleCards();

    for (let i = 0; i < carouselIndicatorsArr.length; i++) {
        carouselIndicatorsArr[i].addEventListener("click" , function(){
            let indIndex = carouselIndicatorsArr[i].getAttribute("data-index")
            let translate = ((100 / visibleCards) * indIndex)
            testimonialsCarousel.style.cssText = `
            transform: translateX(${translate}%);
            `
            changeIndicatorsStyle(indIndex)
        })
    }
}

//*  form

document.forms[0].addEventListener("submit" , function(e) {
    e.preventDefault()
})

function nameValidation() {
    let nameValue = fullName.value

    if (!nameValue) {
        return false ;
    }

    return true ;
}

fullName.addEventListener("input" , function() {
    nameMessage.classList.add("hidden")
})

function emailValidation() {
    let emailValue = email.value
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailValue) {
        return false ;
    }

    return emailRegex.test(emailValue)

    return true ;
}

email.addEventListener("input" , function() {
    emailMessage.classList.add("hidden")
})

function phoneValidation() {
    let phoneValue = phone.value
    const PhoneRegex = /^(?:\+20|20|0)?1[0125]\d{8}$/;

    if (!phoneValue) {
        return true ;
    }
    return PhoneRegex.test(phoneValue);
    return true ;
}

phone.addEventListener("input" , function() {
    phoneMessage.classList.add("hidden")
})

function detailsValidation() {
    let detailsValue = projectDetails.value
    const detailsRegex = /^.{10,}$/;

    if (!detailsValue) {
        return false ;
    }
    return detailsRegex.test(detailsValue);
    return true ;
}

projectDetails.addEventListener("input" , function() {
    detailsMessage.classList.add("hidden")
})

function clearForm() {
    fullName.value = ""
    email.value = ""
    phone.value = ""
    projectDetails.value = ""
    kindText.innerHTML = "اختر نوع المشروع"
    kindText.classList.remove("text-slate-800" , "dark:text-white")
    kindText.classList.add("text-slate-500" , "dark:text-slate-400")
    salaryText.innerHTML = "اختر الميزانية"
    salaryText.classList.remove("text-slate-800" , "dark:text-white")
    salaryText.classList.add("text-slate-500" , "dark:text-slate-400")
}

function activeForm() {
    if (nameValidation()) {
        nameMessage.classList.add("hidden")
    } else {
        nameMessage.classList.remove("hidden")
    }

    if (emailValidation()) {
        emailMessage.classList.add("hidden")
    } else {
        emailMessage.classList.remove("hidden")
    }

    if (phoneValidation()) {
        phoneMessage.classList.add("hidden")
    } else {
        phoneMessage.classList.remove("hidden")
    }

    if (detailsValidation()) {
        detailsMessage.classList.add("hidden")
    } else {
        detailsMessage.classList.remove("hidden")
    }

    if (nameValidation() && emailValidation() && phoneValidation() && detailsValidation()) {
        clearForm()
    Swal.fire({
    icon: "success",
    title: "تم إرسال رسالتك بنجاح!",
    text: "شكرًا لتواصلك، سأرد عليك في أقرب وقت ممكن.",
    confirmButtonText: "حسنًا",
    confirmButtonColor: "#ff6b35",
    background: "#1e293b",
    color: "#fff",
    backdrop: "rgba(15,23,42,0.8)",
    timer : 3000 ,
    customClass: {
        confirmButton: "my-confirm-btn"
    },
    buttonsStyling: false
});
    }
}


submit.addEventListener("click" , function () {
    activeForm()
})

//* Select

kindBtn.addEventListener("click" , function() {
    kindOptions.classList.toggle("hidden")
    if (!kindOptions.classList.contains("hidden")) {
        kindArrow.style.transform = "rotate(180deg)"
    }else {
        kindArrow.style.transform = "rotate(0deg)"
    }
})

salaryBtn.addEventListener("click" , function() {
    salaryOptions.classList.toggle("hidden")
    if (!salaryOptions.classList.contains("hidden")) {
        salaryArrow.style.transform = "rotate(180deg)"
    }else {
        salaryArrow.style.transform = "rotate(0deg)"
    }
})

function addOptions() {
    for (let item of kindOptionsArr) {
        item.addEventListener("click" , function() {
            kindText.innerHTML = item.getAttribute("data-value")
            kindText.classList.add("text-slate-800" , "dark:text-white")
            kindText.classList.remove("text-slate-500" , "dark:text-slate-400")
            kindOptions.classList.add("hidden")
            kindArrow.style.transform = "rotate(0deg)"
        })
    }

    for (let item of salaryOptionsArr) {
        item.addEventListener("click" , function() {
            salaryText.innerHTML = item.getAttribute("data-value")
            salaryText.classList.add("text-slate-800" , "dark:text-white")
            salaryText.classList.remove("text-slate-500" , "dark:text-slate-400")
            salaryOptions.classList.add("hidden")
            salaryArrow.style.transform = "rotate(0deg)"
        })
    }
}

addOptions()

window.addEventListener("click" , function(e) {
    if (!kindBtn.contains(e.target) && !kindOptions.contains(e.target)) {
        kindOptions.classList.add("hidden")
        kindArrow.style.transform = "rotate(0deg)"
    }

    if (!salaryBtn.contains(e.target) && !salaryOptions.contains(e.target)) {
        salaryOptions.classList.add("hidden")
        salaryArrow.style.transform = "rotate(0deg)"
    }
})

//* menu toggle

mobileMenuBtn.addEventListener("click" , function() {
    navLinks.classList.toggle("active")
    menuIcon.classList.toggle("fa-bars")
    menuIcon.classList.toggle("fa-times")
})

function closeMenuAfterClick() {
    for (let item of navLinksArr) {
        item.addEventListener("click" , function () {
            navLinks.classList.remove("active")
        })
    }
}

closeMenuAfterClick()