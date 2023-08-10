const conatiner = document.querySelectorAll(".container");
const len = conatiner.length;
for (let i = 0; i < len; i++) {
    const icon = conatiner[i].querySelector(".btn");
    const answer = conatiner[i].querySelector(".answer");
    conatiner[i].addEventListener('click', () => {
        icon.classList.toggle("rotate");
        answer.classList.toggle("active");
    })
}