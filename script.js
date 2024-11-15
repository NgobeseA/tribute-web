let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

function enableDarkmode(){
    localStorage.setItem('darkmode', 'active')
    document.body.classList.add('darkmode')
}

function disableDarkmode(){
    localStorage.setItem('darkmode', null)
    document.body.classList.remove('darkmode')
}

if(darkmode === "active")
    enableDarkmode()

themeSwitch.addEventListener(onclick, () => {
    localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode();
})