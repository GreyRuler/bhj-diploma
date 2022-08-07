/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const button = document.querySelector('.sidebar-toggle')
    const body = document.querySelector('body')
    button.addEventListener('click', () => {
      body.classList.toggle('sidebar-open')
      body.classList.toggle('sidebar-collapse')
    })
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регистрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    const modalLogin = App.getModal('login')
    const buttonLogin = document.querySelector('.menu-item_login')
    buttonLogin.addEventListener('click', () => {
      modalLogin.open()
    })
    
    const modalRegister = App.getModal('register')
    const buttonRegister = document.querySelector('.menu-item_register')
    buttonRegister.addEventListener('click', () => {
      modalRegister.open()
    })

    const buttonLogout = document.querySelector('.menu-item_logout')
    buttonLogout.addEventListener('click', () => {
      User.logout(() => App.setState('init'))
    })
  }
}