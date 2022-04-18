const bookmarkToggle = document.querySelector("[data-js = 'svg--bookmark']");

function toggleBookmark() {
  bookmarkToggle.addEventListener('click', () => {
    bookmarkToggle.classList.toggle('bookmark--active');
  });
}

toggleBookmark();

const bookmarkToggle2 = document.querySelector("[data-js = 'svg--bookmark2']");

function toggleBookmark2() {
  bookmarkToggle2.addEventListener('click', () => {
    bookmarkToggle2.classList.toggle('bookmark--active');
  });
}

toggleBookmark2();

const question = document.querySelector("[data-js = 'question']");
const buttonShowAnswer = document.querySelector("[data-js = 'showAnswer']");

buttonShowAnswer.addEventListener('click', () => {
  question.classList.toggle('card__answer--show');
  console.log(question);
});
