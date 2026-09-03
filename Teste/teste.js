const blocks = document.querySelectorAll(".block");
for (let block of blocks) {
    block.addEventListener("mouseover", function() {block.classList.add("selected")})
    block.addEventListener("mouseout", function() {block.classList.remove("selected")})
}
