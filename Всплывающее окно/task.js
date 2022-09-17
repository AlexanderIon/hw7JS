const tabs1 = document.getElementById('tabs1')

const tabContent =Array.from(tabs1.querySelectorAll('.tab__content'))
const tabs = Array.from(tabs1.querySelectorAll('.tab'))
const arrayTads = ['Обо мне',"Главная"]
console.log(arrayTads.indexOf('Обо мне'))
console.log(tabs[0].textContent)
console.log(tabs[1].textContent)
console.log(tabs[2].textContent)
tabs.map(element=>element.onclick = ()=>{
    let indexTab = tabs.findIndex(i => i.textContent === element.textContent)
    let activeTab = tabs.findIndex(i => i.className==="tab tab_active")
    if (indexTab != activeTab){
        
        tabs[indexTab].classList.add('tab_active')
        tabs[activeTab].className = 'tab'
        tabContent[indexTab].classList.add("tab__content_active")
        tabContent[activeTab].className = "tab__content"
        
    }
    
})