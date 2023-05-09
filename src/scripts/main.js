AOS.init()

const dateEvent = new Date("Aug 07, 2023 18:00:00")
const timeStempEvent = dateEvent.getTime()
const confirmButtonEl = document.querySelector(".button")

const countsTime = setInterval(function () {
    const currentDate = new Date()
    const timeStempDate = currentDate.getTime()
    const timer = document.querySelector('#count')

    const timeToEvent = timeStempEvent - timeStempDate

    const daysMs = 1000 * 60 * 60 * 24
    const hoursMs = 1000 * 60 * 60
    const minutesMs = 1000 * 60

    const daysToEvent = Math.floor(timeToEvent / daysMs)
    const hoursToEvent = Math.floor((timeToEvent % daysMs) / hoursMs) 
    const minutesToEvent = Math.floor((timeToEvent % hoursMs) / minutesMs)
    const secondsToEvent = Math.floor((timeToEvent % minutesMs) / 1000)

    timer.innerHTML = `${daysToEvent}d ${hoursToEvent}h ${minutesToEvent}m ${secondsToEvent}s`

    if (timeToEvent < 0) {
        timer.innerHTML = "Meu aniversário já foi, espero que você tenha ido &#128545"

        clearInterval()
    }

}, 1000)

confirmButtonEl.addEventListener('mouseover', function () {
    confirmButtonEl.innerHTML = "Melhor confirmar &#128520"
})

confirmButtonEl.addEventListener('mouseout', function () {
    confirmButtonEl.innerHTML = "Confirme sua presença &#128512"
})