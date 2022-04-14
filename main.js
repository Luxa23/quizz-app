const bookmark = document.querySelector("[data-js = 'svg--bookmark']");

bookmark.addEventListener('click', () => {
  bookmark.classList.toggle('bookmark--active');
  console.log(bookmark);
});

const question = document.querySelector("[data-js = 'question']");
const buttonShowAnswer = document.querySelector("[data-js = 'showAnswer']");

buttonShowAnswer.addEventListener('click', () => {
  question.classList.toggle('card__answer--show');
  console.log(question);
});
