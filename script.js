/* ДИСКЛЕЙЦМЕР*/
const disclaimer_close = document.querySelector('.disclaimer-close')
const disclaimer = document.querySelector('.disclaimer')
disclaimer_close.addEventListener('click', function() {
  disclaimer.style.display = 'none';
});

/* ФОРМА   */
const autorization = document.querySelector('.autorization')
const autorization_button = document.querySelector('.header-top-interaction-user')
const close_form = document.querySelector('.close-form')
autorization_button.addEventListener('click', function(){
  autorization.style.display = 'block';
  autorization.style.display = 'flex';
})
close_form.addEventListener('click', function(){
  autorization.style.display = 'none';
})


const sign_up_button = document.querySelector('.sign-up');
const log_in_button = document.querySelector('.log-in');
const LogIn_wrap = document.querySelector('.LogIn-wrap');
const SignUp_wrap = document.querySelector('.SignUp-wrap');
log_in_button.addEventListener('click', function() {
  LogIn_wrap.style.display = 'flex';
  SignUp_wrap.style.display = 'none';
  log_in_button.style.textDecoration = 'underline';
  sign_up_button.style.textDecoration = 'none';

})
sign_up_button.addEventListener('click', function() {
  LogIn_wrap.style.display = 'none';
  SignUp_wrap.style.display = 'flex';
  sign_up_button.style.textDecoration = 'underline';
  log_in_button.style.textDecoration = 'none';
})
const Sign_In = document.querySelector('.Sign-In')
Sign_In.addEventListener('click', function() {
  alert('Учебный проект!\n\nЭто демо-версия и система авторизации не функционирует')
})
const Sign_up_test = document.querySelector('.Sign_up_test')
Sign_up_test.addEventListener('click', function() {
  alert('Учебный проект!\n\nЭто демо-версия и система регистрации не функционирует')
})
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
  menu.style.display = 'none';===============
});

*/
/*--------------------------------------------------------- */
const header_menu = document.querySelector('.header-menu');
const for_top_logo = document.querySelector('.for-top-logo');
const nav_burger = document.querySelector('.nav-burger')
header_menu.addEventListener('click', function() {
  nav_burger.style.display = 'flex';
  for_top_logo.style.display = 'none';


  
})
const burger_dropdown = document.querySelector('.burger_dropdown')
const burger_nav_dropdown_menu_ul = document.querySelector('.burger-nav-dropdown-menu-ul')
const dropdown_ico = document.querySelector('.dropdown_ico')
burger_dropdown.addEventListener('click', function() {
  // Проверяем текущее состояние и переключаем
  if (burger_nav_dropdown_menu_ul.style.display === 'flex') {
    burger_nav_dropdown_menu_ul.style.display = 'none';
    dropdown_ico.style.transform = 'rotate(0deg)'; // или 'rotate(0deg)'
  } else {
    burger_nav_dropdown_menu_ul.style.display = 'flex';
    dropdown_ico.style.transform = 'rotate(180deg)';
  }
})
/* */
const dropdown = document.querySelector('.dropdown')
const dropdown_menu = document.querySelector('.dropdown-menu')
dropdown.addEventListener('click', function() {
  // Проверяем текущее состояние и переключаем
  if (dropdown_menu.style.display === 'flex') {
    dropdown_menu.style.display = 'none';
    dropdown_ico.style.transform = 'rotate(0deg)'; // или 'rotate(0deg)'
  } else {
    dropdown_menu.style.display = 'flex';
    dropdown_ico.style.transform = 'rotate(180deg)';
  }
})

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
const email_subscribe = document.querySelector('.button-Subscribe-to-Newsletter')
email_subscribe.addEventListener('click', function() {
  alert('Учебный проект!\n\nЭто демонстрация интерфейса, данные никуда не отправляются и не сохраняются')
})
/*----------------------------------------------------------------------------*/
const footer_ico = document.querySelectorAll('.footer-ico');
footer_ico.forEach(icon_messager => {
icon_messager.addEventListener('click', function() {
  alert('Учебный проект!\n\nЭто демо-версия и ссылки на соцсети неактивны.\n\nВ реальном проекте здесь были бы ссылки на актуальные профили.')
});
});
const footer_nav_item = document.querySelectorAll('.footer-nav-item');
footer_nav_item.forEach(nav_item => {
nav_item.addEventListener('click', function() {
  alert('Еще в разработке...')
});
});
const icon_pay_buttons = document.querySelectorAll('.icon-pay');
icon_pay_buttons.forEach(icon_pay => {
icon_pay.addEventListener('click', function() {
  alert('Учебный проект!\n\nЭто демо-версия\n\nВ коммерческом проекте здесь была бы интеграция с платёжной системой')
});
});