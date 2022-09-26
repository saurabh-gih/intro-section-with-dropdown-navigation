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




