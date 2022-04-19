import {} from './bookmarks.js';

import './bookmarks';

// new

cards.forEach(card => {
  const button = card.querySelector('[data-js="showAnswer"]');
  const answer = card.querySelector('.secret');
  button.addEventListener('click', () => {
    answer.classList.toggle('secret');
    console.log(cards);
  });
});

// old function only for one card
// function toggleBookmark() {
//   bookmarkToggle.addEventListener('click', () => {
//     bookmarkToggle.classList.toggle('bookmark--active');
//   });
// }

// toggleBookmark();
