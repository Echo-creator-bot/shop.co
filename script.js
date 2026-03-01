// Ждем загрузки страницы
document.addEventListener('DOMContentLoaded', function() {
  
  // Находим оба ряда с товарами
  const catalogRows = document.querySelectorAll('.flex-wrap-for-catalog');
  
  // Функция проверки ширины
  function checkWidthAndEnableDrag() {
    catalogRows.forEach(row => {
      // Если контент шире контейнера - включаем draggable
      if (row.scrollWidth > row.clientWidth) {
        row.classList.add('draggable-mode');
      } else {
        row.classList.remove('draggable-mode');
      }
    });
  }
  
  // Проверяем при загрузке
  checkWidthAndEnableDrag();
  
  // Проверяем при изменении размера окна
  window.addEventListener('resize', checkWidthAndEnableDrag);
  
  // ===== КОД ПЕРЕТАСКИВАНИЯ =====
  catalogRows.forEach(row => {
    let Clamped = false;
    let Click_Position;
    let Scroll_left;
    
    row.addEventListener('mousedown', (e) => {
      // Работаем только если есть класс draggable-mode
      if (!row.classList.contains('draggable-mode')) return;
      
      Clamped = true;
      row.style.cursor = 'grabbing';
      Click_Position = e.pageX - row.offsetLeft;
      Scroll_left = row.scrollLeft;
      e.preventDefault();
    });
    
    row.addEventListener('mouseleave', () => {
      if (!row.classList.contains('draggable-mode')) return;
      Clamped = false;
      row.style.cursor = 'grab';
    });
    
    row.addEventListener('mouseup', () => {
      if (!row.classList.contains('draggable-mode')) return;
      Clamped = false;
      row.style.cursor = 'grab';
    });
    
    row.addEventListener('mousemove', (e) => {
      if (!Clamped || !row.classList.contains('draggable-mode')) return;
      e.preventDefault();
      const x = e.pageX - row.offsetLeft;
      const walk = (x - Click_Position) * 1.5;
      row.scrollLeft = Scroll_left - walk;
    });
  });
  
});