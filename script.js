const Flex_Row = document.querySelector('.flex-wrap-for-catalog');
let Clamped = false;        // зажата ли кнопка (isDown)
let Click_Position;         // позиция клика (startX)
let Scroll_left;            // текущая прокрутка (scrollLeft)

Flex_Row.addEventListener('mousedown', (e) => {
  Clamped = true;
  Flex_Row.style.cursor = 'grabbing';
  Click_Position = e.pageX - Flex_Row.offsetLeft;
  Scroll_left = Flex_Row.scrollLeft;
  e.preventDefault();
});

Flex_Row.addEventListener('mouseleave', () => {
  Clamped = false;
  Flex_Row.style.cursor = 'grab';
});

Flex_Row.addEventListener('mouseup', () => {
  Clamped = false;
  Flex_Row.style.cursor = 'grab';
});

Flex_Row.addEventListener('mousemove', (e) => {
  if (!Clamped) return;
  e.preventDefault();
  const x = e.pageX - Flex_Row.offsetLeft;
  const walk = (x - Click_Position) * 1.5;
  Flex_Row.scrollLeft = Scroll_left - walk;
});