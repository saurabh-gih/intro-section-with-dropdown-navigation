var menuBtn = document.querySelector(".menu_btn")
var closeBtn = document.querySelector(".close_btn")
var toggleBtn = document.querySelector(".toggle_btn")
var menuItems = document.querySelector(".menu_items")

toggleBtn.addEventListener("click", ()=>{
    if(menuItems.classList.contains("active")){
        menuItems.classList.remove("active")
        menuBtn.style.display="block"
        closeBtn.style.display="none"
    }
    else{
        menuItems.classList.add("active")
        menuBtn.style.display="none"
        closeBtn.style.display="block"
    }
})

const featureSublist = document.querySelector("#feature_sublist")
const companySublist = document.querySelector("#company_sublist")
const dropdown = document.querySelectorAll(".dropdown")


featureSublist.parentNode.addEventListener("click", ()=>{
    dropdown.forEach(e => {
        if(e.style.display==="block")
            e.style.display="none"
    });
    if(featureSublist.style.display==="block")
    featureSublist.style.display="none"
    else
    featureSublist.style.display="block"
})

companySublist.parentNode.addEventListener("click", ()=>{
    dropdown.forEach(e => {
        if(e.style.display==="block")
            e.style.display="none"
    });
    if(companySublist.style.display==="block")
    companySublist.style.display="none"
    else
    companySublist.style.display="block"
})