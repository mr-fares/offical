let par = document.getElementById("par")
let text = "we are social advertisisng company just dream and we will make it done"
let i = 0;

window.onload = function () {
    let interval = setInterval(() => {
        par.textContent += text[i]
        i++
        if (i >= text.length) {
            clearInterval(interval)
        }
    },150)
}

let login = document.getElementById("login")

let registerBtn = document.getElementById("registerBtn")
let popupBox= document.getElementById("popup-box")
let registerLink = document.getElementById("register")
let registerForm = document.getElementById("register2")
login.addEventListener("click",()=>{
    let overlay = document.createElement("div")
    overlay.className = "popup-overlay"
    document.body.appendChild(overlay)
    popupBox.style.display = "flex"
    registerLink.addEventListener("click",(e)=>{
        e.preventDefault()
        popupBox.style.display = "none"
        registerForm.style.display = "flex"
        document.getElementById("loginLink").addEventListener("click",(e) =>{
            e.preventDefault()
                    popupBox.style.display = "flex"
                    registerForm.style.display = "none"
        })
    })
})

registerBtn.addEventListener("click",()=>{
    let overlay = document.createElement("div")
    overlay.className = "popup-overlay"
    document.body.appendChild(overlay)
    let registerForm = document.getElementById("register2")
    registerForm.style.display = "flex"
            document.getElementById("loginLink").addEventListener("click",(e) =>{
            e.preventDefault()
                    popupBox.style.display = "flex"
                    registerForm.style.display = "none"
                    registerLink.addEventListener("click",(e)=>{
                        e.preventDefault()
                        popupBox.style.display = "none"
                        registerForm.style.display = "flex"
                    })
        })
})

let closeBtn1 = document.getElementById("close1")
let closeBtn2 = document.getElementById("close2")


closeBtn1.addEventListener("click",()=>{
    popupBox.style.display = "none"
    document.querySelector(".popup-overlay").remove()
})

closeBtn2.addEventListener("click",()=>{
    registerForm.style.display = "none"
    document.querySelector(".popup-overlay").remove()
    
})

let btn = document.getElementById("btn")

let whatsapp = document.getElementById("whatsapp")

window.onscroll = function () {
    if (scrollY >= 500) {
        btn.style.display = "block"
        whatsapp.style.display = "block"
    }else{
        btn.style.display = "none"
        whatsapp.style.display = "none"
    }
}

btn.onclick = function () {
    scroll({
        top:0,
        behavior:"smooth"
    })
}

whatsapp.onclick = function () {
    
    // type your whatsapp chat link here
    window.location = "https://www.google.com"
}

let homeIcon = document.getElementById("home")

homeIcon.addEventListener("click",()=>{
    window.location = "index en.html"
})
