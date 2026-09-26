console.log ("I still remember you.")
console.log ("you're me, from before... right?")

const header = document.querySelector("#h1");
const changeHeaderButton = document.querySelector("#change-header-button")
const changeThemeButton = document.querySelector("#colorchange")
const closed = document.querySelector("closed")
const open = document.querySelector("open")

changeHeaderButton.addEventListener("click",() => {
    header.innerHTML = "you don't?";
})

function changeButtonText(){
    if (document.body.classList.contains("dark")){
        changeThemeButton.textContent = "I don't want to...";
    } else {
        changeThemeButton.textContent = "look from my perspective?";
    }
}

//toggle perspective
changeThemeButton.addEventListener("click",() => {

    document.body.classList.toggle("dark");   
    changeButtonText(); 
})

// images

closed1.addEventListener("click",()=> {

    open1.classList.remove("hidden");
    closed1.classList.add("hidden");
})