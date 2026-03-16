/*--------------------------------------------------------- */
const burger_button = document.querySelector('.header-menu');
const header_nav = document.querySelector('.header-top-nav');
const close_nav_button = document.querySelector('.svg-close-nav');

burger_button.addEventListener('click', function(){
  header_nav.classList.add('menu-show'); // Добавляем класс show
  close_nav_button.style.display = 'flex'; // Показываем крестик
});

close_nav_button.addEventListener('click', function(){
  header_nav.classList.remove('menu-show'); // Убираем класс show
  close_nav_button.style.display = 'none'; // Прячем крестик
});
/**/ 
/*клик по иконке и появляется инпут */
const loupe_button = document.querySelector('.search-for-576px');
const header_top_search_wrap = document.querySelector('.header-top-search-wrap');

loupe_button.addEventListener('click', function(){
  header_top_search_wrap.classList.add('search-show'); // Добавляем класс show
  
  setTimeout(function(){
    document.addEventListener('click', close_search_if_click); 
  }, 0);
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
log_in_button.style.textDecoration = 'underline';
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
/*-------------------------------------------------------------------------------------------- */

function close_search_if_click(event) {
  if (!header_top_search_wrap.contains(event.target) && event.target !== loupe_button) {
    header_top_search_wrap.classList.remove('search-show'); // Убираем класс show
    document.removeEventListener('click', close_search_if_click);
  }
}

/* */
/*выпадающее меню */
const dropdown = document.querySelector('.dropdown')
const dropdown_menu = document.querySelector('.dropdown-menu')
const dropdown_ico = document.querySelector('.dropdown_ico')
dropdown.addEventListener('click', function() {
  // Проверяем текущее состояние и переключаем
  if (dropdown_menu.style.display === 'flex') {
    dropdown_menu.style.display = 'none';
    dropdown_ico.style.transform = 'rotate(0deg)'; // или 'rotate(0deg)'
  } else {
    dropdown_menu.style.display = 'flex';
    dropdown_ico.style.transform = 'rotate(-180deg)';
  }
})


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