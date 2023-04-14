const select = document.querySelector(".dropdown__select");
const optionBox = document.querySelector(".dropdown__optionbox");

const options = document.querySelectorAll(".option");

select.addEventListener("click", () => {
    optionBox.classList.toggle("active");
    select.classList.toggle("active");
});

options.forEach((option) => {
    option.addEventListener("click", () => {
        options.forEach((option) => {
            option.classList.remove("selected");
            option.children[1].classList.remove("selected");
        })
        optionBox.classList.toggle("active");
        select.classList.toggle("active");
        option.classList.toggle("selected");
        option.children[1].classList.toggle("selected");
        select.innerHTML = option.children[0].innerHTML;
        select.classList.add("black-text");
        
    })
});