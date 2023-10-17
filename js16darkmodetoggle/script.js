const toggleDarkMode = document.querySelector(".toggle-darkmode");
const toggleText = document.querySelector(".toggle-text");

let darkMode  = localStorage.getItem("darkMode");

//set Dark Mode
const enableDarkMode = () => {
    document.body.classList.add("darkmode");
    toggleText.textContent = "Light";
    localStorage.setItem("darkMode","enabled");
};

//disable Dark Mode
const disableDarkMode = () => {
    document.body.classList.remove("darkmode");
    toggleText.textContent = "Dark";
    localStorage.setItem("darkMode",null);
};

//save darkmode history
if(darkMode === "enabled"){
    enableDarkMode();
};

//Add Event Listener
toggleDarkMode.addEventListener("click",() => {
    let dark  = localStorage.getItem("darkMode");

    if(dark !== "enabled"){
        enableDarkMode();
    }else{
        disableDarkMode();
    }
    // document.body.classList.toggle("darkmode");
    // console.log(document.body.classList);
});