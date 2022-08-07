/**
 * Класс RegisterForm управляет формой
 * регистрации
 * */
class RegisterForm extends AsyncForm {
  /**
   * Производит регистрацию с помощью User.register
   * После успешной регистрации устанавливает
   * состояние App.setState( 'user-logged' )
   * и закрывает окно, в котором находится форма
   * */
  onSubmit(data) {
    User.register(data, (response) => {
      if (response && response.user) {
        this.element.reset()
        App.setState('user-logged')
        const modalRegister = App.getModal('register')
        modalRegister.onClose(modalRegister)
      }
    })
  }
}