let count = 0

let peopleCount = document.getElementById("people-count")
let incrementBtn = document.getElementById("increment-btn")

let saveBtn = document.getElementById("save-btn")
let previousEntries = document.getElementById("previous-entries")


incrementBtn.addEventListener('click', () => {
    count += 1
    peopleCount.textContent = count
})

saveBtn.addEventListener('click', () => {
    previousEntries.textContent += count + " - "
    peopleCount.textContent = 0
    count = 0
})