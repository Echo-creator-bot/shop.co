// Функция для включения/выключения режима слайдера
function setupSlider(container) {
  // Проверяем, нужно ли включать слайдер
  function checkAndToggleSlider() {
    // Если контент шире контейнера - включаем слайдер
    if (container.scrollWidth > container.clientWidth) {
      container.classList.add('slider-mode');
    } else {
      container.classList.remove('slider-mode');
    }
  }
  
  // Проверяем при загрузке
  checkAndToggleSlider();
  
  // Проверяем при изменении размера окна
  window.addEventListener('resize', checkAndToggleSlider);
  
  // ===== КОД ПЕРЕТАСКИВАНИЯ =====
  let isDown = false;
  let startX;
  let scrollLeft;
  
  container.addEventListener('mousedown', (e) => {
    // Работаем только если есть класс slider-mode
    if (!container.classList.contains('slider-mode')) return;
    
    isDown = true;
    container.style.cursor = 'grabbing';
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    e.preventDefault();
  });
  
  container.addEventListener('mouseleave', () => {
    if (!container.classList.contains('slider-mode')) return;
    isDown = false;
    container.style.cursor = 'grab';
  });
  
  container.addEventListener('mouseup', () => {
    if (!container.classList.contains('slider-mode')) return;
    isDown = false;
    container.style.cursor = 'grab';
  });
  
  container.addEventListener('mousemove', (e) => {
    if (!isDown || !container.classList.contains('slider-mode')) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
  });
}

// Ждем загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
  // Находим все ряды с карточками
  const catalogRows = document.querySelectorAll('.flex-wrap-for-catalog');
  
  // Для каждого ряда запускаем функцию
  catalogRows.forEach(row => {
    setupSlider(row);
  });
});