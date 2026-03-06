/* фокус на инпут при клике по иконке */
const Search_Icon = document.querySelector('.search-svg-wrap');
const Search_input = document.querySelector('.header-top-search-input');
Search_Icon.addEventListener('click', function(){
  Search_input.focus();
});
/* ----------------------------------------------------------*/
/*const burger = document.getElementById('burger');
const menu = document.querySelector('.header-top-nav')
burger.addEventListener('click', function(){
  menu.style.display = 'block';
});
document.addEventListener('click', function(){
  menu.style.display = 'none';
});

*/
/*--------------------------------------------------------- */
/* при клике на на список выпадает меню */
/*const Drop_Down = document.querySelector('.dropdown');
const Dropdown_Menu = document.querySelector('.dropdown-menu');
let is_Open = false;
function Open_dropdown_menu (){
  Dropdown_Menu.style.display = 'relative'
  is_Open = true;
}
function Close_dropdown_menu (){
  Dropdown_Menu.style.display = 'none'
  is_Open = false;
}
function Toggle_Dropdown () {
  if (is_Open) {
    Close_dropdown_menu();
  } else {
    Open_dropdown_menu();
  }
}
Drop_Down.addEventListener('click', function(e){
  e.preventDefault();
  e.stopPropagation();
  Toggle_Dropdown();
});
document.addEventListener('click', function(e){
  if (!Drop_Down.contains(e.target) && !Dropdown_Menu.contains(e.target)) {
    Close_dropdown_menu();
  }
});*/
/*-----------------------------------------------------------------------------*/ 
/**/
const Shop_Now_button = document.querySelector('.ShopNow-link');
const Decoration_Star_1 = document.querySelector('.star-settings-1');
const Star_Path_1 = Decoration_Star_1.querySelector('path');
const Decoration_Star_2 = document.querySelector('.star-settings-2');
const Star_Path_2 = Decoration_Star_2.querySelector('path');

Shop_Now_button.addEventListener('mouseenter', function() {
  Star_Path_1.style.opacity = '0.6';
  Star_Path_2.style.opacity = '0.6';
  Decoration_Star_1.style.transform = 'translateY(-25px)';
  Decoration_Star_2.style.transform = 'translateY(-15px)';
})
Shop_Now_button.addEventListener('click', function() {

})
Shop_Now_button.addEventListener('mouseleave', function() {
  Decoration_Star_1.style.transform = 'translateY(15px)';
  Decoration_Star_2.style.transform = 'translateY(5px)';
  Star_Path_1.style.opacity = '1';
  Star_Path_2.style.opacity = '1';
})

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
/*-----------------------------------------------------------------------*/ 
const Email_Input = document.querySelector('.email-for-form');
const Email_Icon = document.querySelector('.wrap-icon-for-form-email');
Email_Icon.addEventListener('click', function() {
  Email_Input.focus();
});

