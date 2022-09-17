const dropdown = document.querySelector(".dropdown")
const dropdown__value =Array.from(dropdown.querySelectorAll(".dropdown__value"))
dropdown__value[0].onclick = ()=>{
    let ActiveDrop = Array.from(dropdown.querySelectorAll(".dropdown__list_active"))
    if (ActiveDrop.length > 0){
        dropdown.querySelector(".dropdown__list_active").className = "dropdown__list"
        
    }
    else {
        console.log(dropdown.querySelector(".dropdown__list").classList.add("dropdown__list_active"))
        // console.log("RRRR")
    }
}

const ListDropdown = Array.from(dropdown.querySelectorAll(".dropdown__link"))
ListDropdown.map(el => el.onclick = ()=> {
    dropdown__value[0].textContent = el.textContent
    dropdown.querySelector(".dropdown__list_active").className = "dropdown__list"
    return false
    
}
)

