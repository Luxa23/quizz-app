const bookmarks = document.querySelectorAll("[data-js = 'svg--bookmark']");

// new
bookmarks.forEach(bookmark => {
  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('bookmark--active');
  });
});

// old function only for one
// function toggleBookmark() {
//   bookmarkToggle.addEventListener('click', () => {
//     bookmarkToggle.classList.toggle('bookmark--active');
//   });
// }

// toggleBookmark();

// show answer
const question = document.querySelector("[data-js = 'question']");
const buttonShowAnswer = document.querySelector("[data-js = 'showAnswer']");

buttonShowAnswer.addEventListener('click', () => {
  question.classList.toggle('card__answer--show');
  console.log(question);
});
