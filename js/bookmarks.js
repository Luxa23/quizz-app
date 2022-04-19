// add import der const bookmarks
import { bookmarks } from './selectors.js';

bookmarks.forEach(bookmark => {
  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('bookmark--active');
  });
});

// old function only for one card
// function toggleBookmark() {
//   bookmarkToggle.addEventListener('click', () => {
//     bookmarkToggle.classList.toggle('bookmark--active');
//   });
// }

// toggleBookmark();
