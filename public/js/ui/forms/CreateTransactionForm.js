/**
 * Класс CreateTransactionForm управляет формой
 * создания новой транзакции
 * */
class CreateTransactionForm extends AsyncForm {
  /**
   * Вызывает родительский конструктор и
   * метод renderAccountsList
   * */
  constructor(element) {
    super(element)
    this.renderAccountsList()
  }

  /**
   * Получает список счетов с помощью Account.list
   * Обновляет в форме всплывающего окна выпадающий список
   * */
  renderAccountsList() {
    const accountsSelect = this.element.querySelector('.accounts-select');
    [...accountsSelect.children].forEach(element => {
      element.remove()
    })
    Account.list(User.current(), (data) => {
      data.forEach(element => {
        accountsSelect.insertAdjacentHTML('afterbegin', `<option value="${element.id}">${element.name}</option>`)
      })
    })
  }

  /**
   * Создаёт новую транзакцию (доход или расход)
   * с помощью Transaction.create. По успешному результату
   * вызывает App.update(), сбрасывает форму и закрывает окно,
   * в котором находится форма
   * */
  onSubmit(data) {
    Transaction.create(data, () => {
        this.element.reset()
        const modalNewIncome = App.getModal('newIncome')
        modalNewIncome.onClose(modalNewIncome)
        const modalNewExpense = App.getModal('newExpense')
        modalNewExpense.onClose(modalNewExpense)
        App.update()
      }
    )
  }
}