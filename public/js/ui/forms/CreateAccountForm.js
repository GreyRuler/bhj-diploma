/**
 * Класс CreateAccountForm управляет формой
 * создания нового счёта
 * */
class CreateAccountForm extends AsyncForm {
  /**
   * Создаёт счёт с помощью Account.create и закрывает
   * окно в случае успеха, а также вызывает App.update()
   * и сбрасывает форму
   * */
  onSubmit(data) {
    Account.create(data, () => {
        this.element.reset()
        const modalCreateAccount = App.getModal('createAccount')
        modalCreateAccount.onClose(modalCreateAccount)
        App.update()
      }
    )
  }
}