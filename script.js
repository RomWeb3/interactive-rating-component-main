
const showTy = document.querySelector(".thankyou");
const hideRating = document.querySelector(".rating");

const rates = document.querySelectorAll(".rates");
const rating = document.getElementById("rating");




function showThankyou() {
    showTy.style.display = "block";
    hideRating.style.display ="none";
}



rates.forEach((rate) => {
    rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
    })
})
