// add import der const bookmarks
import { bookmarks } from '/selectors';

bookmarks.forEach(bookmark => {
  bookmark.addEventListener('click', () => {
    bookmark.classList.toggle('bookmark--active');
  });
});
