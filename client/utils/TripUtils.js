export const getExpenseAmount = (trip) => {
  if (!trip) {
    return 0;
  }
  const { ExpenseList = [] } = trip;
  return ExpenseList.reduce((acc, expense) => {
    if (expense && typeof expense.Amount === 'number') {
      acc += expense.Amount;
    }
    return acc;
  }, 0)
}
