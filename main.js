//console.log("Guckguck");

const question = document.querySelector("[data-js = 'question']");
const buttonShowAnswer = document.querySelector("[data-js = 'showAnswer']");

buttonShowAnswer.addEventListener("click", () => {
  question.classList.toggle("card__answer--show");
  console.log(question);
});

const bookmark = document.querySelector("[data-js = 'svg']");
const bookmarkActive = document.querySelector("[data-js = 'svg-active']");

bookmark.addEventListener("click", () => {
  bookmarkActive.classList.toggle("bookmark--active");
  console.log(bookmarkActive);
});
