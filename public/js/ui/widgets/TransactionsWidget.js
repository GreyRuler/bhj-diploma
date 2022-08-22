/**
 * Класс TransactionsWidget отвечает за
 * открытие всплывающих окон для
 * создания нового дохода или расхода
 * */

class TransactionsWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor(element) {
    if (element === undefined) throw "Передан пустой элемент в конструктор"
    this.element = element
    this.registerEvents()
  }
  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */
  registerEvents() {
    const createIncomeButton = this.element.querySelector('.create-income-button')
    createIncomeButton.addEventListener('click', () => {
      App.getModal('newIncome').open()
    })

    const createExpenseButton = this.element.querySelector('.create-expense-button')
    createExpenseButton.addEventListener('click', () => {
      App.getModal('newExpense').open()
    })
  }
}
