import { cards, getElement } from './selectors.js';

cards.forEach(card => {
  const button = getElement('showAnswer', card);
  const answer = card.querySelector('.secret');
  button.addEventListener('click', () => {
    answer.classList.toggle('secret');
    console.log(cards);
  });
});
