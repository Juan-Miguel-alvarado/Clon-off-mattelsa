const envioDiv = document.getElementById("dv")
const header = document.getElementById("hd")
let Ultima = 0

if (envioDiv) {
    window.addEventListener("scroll", function () {
        const Actual = window.scrollY

        if (Actual > Ultima) {
            envioDiv.classList.add("ocultar")
            header.classList.add("arriba")
        } else {
            envioDiv.classList.remove("ocultar")
            header.classList.remove("arriba")
        }
        Ultima = Actual
    })
} else {
    console.error('error')
}

event.preventDefault
