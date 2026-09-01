const p = document.getElementById("result");
const pre_p = document.getElementById("pre_result");
const num_buttons = document.querySelectorAll(".num");
const operator_buttons = document.querySelectorAll(".operador");
var exp = "";

function pre_result() {pre_p.innerHTML = eval(`${exp+"+0"}`);}

for (let button of num_buttons) {button.addEventListener("click", function() {
    if (p.innerHTML[p.innerHTML.length-1] == "%") {return;}
    p.innerHTML += button.querySelector("p").innerHTML;
    exp += button.querySelector("p").innerHTML;
    pre_result();
})}

document.getElementById("limpa").addEventListener("click", function() {p.innerHTML = ""; exp = ""; pre_result();})
document.getElementById("retira").addEventListener("click", function() {
    var i = 1;
    if (p.innerHTML[p.innerHTML.length-1] == "%") {i = 6;}
    p.innerHTML = p.innerHTML.substring(0, p.innerHTML.length-1);
    exp = exp.substring(0, exp.length-i);
    pre_result();
})
document.getElementById("igual").addEventListener("click", function() {p.innerHTML = pre_p.innerHTML; exp = p.innerHTML;})

for (let button of operator_buttons) {
    button.addEventListener("click", function() {
        var n = p.innerHTML.length;
        // var antes = exp.substring(0, n-1);
        var last = p.innerHTML[n-1];
        var dig = button.querySelector("p").innerHTML;
        var op = dig;
        if (dig == "x") {op = "*";}
        else if (dig == "÷") {op = "/";}
        else if (dig == "%") {op = "*1/100";}
        if (last == "x" || last == "÷" || last == "+" || last == "-") {return;}
        p.innerHTML += dig;
        exp += op;
        pre_result();
    })
}
