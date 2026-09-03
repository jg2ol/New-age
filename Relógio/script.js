const cronometro = document.getElementById("cronometro").h2
const buttons = document.gelElementById("control_time").querySelectorAll(".btn")

function start_cron() {
    tempo = setInterval(function() {
        var next_time = cronometro.innerHTML.substring(0, cronometro.lenght-4) - 1
        if (next_time == 0) {end_cron()}
        else {cronometro.innerHTML = next_time + " seg"}
    }, 1000)
}
function end_cron() {
    clearTimeout(tempo)
}

for (let btn of buttons) {
    btn.addEventListener("click", function() {
        if (cronometro.innerHTML.substring(0, cronometro.innerHTML-4) + btn.id <= 0) {end_cron();}
    })
}
// projeto inacabado [estudar +js]
