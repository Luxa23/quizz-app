const bookmarks = document.querySelectorAll("[data-js = 'svg--bookmark']");
const cards = document.querySelectorAll('.card');

// new
bookmarks.forEach(bookmark => {
  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('bookmark--active');
  });
});

cards.forEach(card => {
  const button = card.querySelector('[data-js="showAnswer"]');
  const answer = card.querySelector('.secret');
  button.addEventListener('click', () => {
    answer.classList.toggle('secret');
    console.log(cards);
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
// const question = document.querySelector("[data-js = 'question']");
// const buttonShowAnswer = document.querySelector("[data-js = 'showAnswer']");

// buttonShowAnswer.addEventListener('click', () => {
//   question.classList.toggle('card__answer--show');
//   console.log(question);
// });
