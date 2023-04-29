const ratingState = document.querySelector(".rating-state");
const thankyouState = document.querySelector(".thank-you-state");
const submitBtn = document.getElementById("submit-btn");
const ratings = document.querySelectorAll(".rating-btn");
const userRating = document.getElementById("user-rating");
let ratingScore;

ratings.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.target.classList.add("active");

    ratingScore = element.value;
    console.log(element);
  });
});

submitBtn.addEventListener("click", (e) => {
  thankyouState.classList.remove("hidden");
  ratingState.classList.add("hidden");
  userRating.innerHTML = ratingScore;
});
