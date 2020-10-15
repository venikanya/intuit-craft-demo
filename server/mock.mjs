const BUSINESS_TYPES = ["Business", "Non-Business"];
const EXPENSE_TYPES = ["Food", "Hotel", "Commute"];

const Expense = (id) => ({
  Id: id,
  Category: EXPENSE_TYPES[Math.round(Math.random()) + Math.round(Math.random())], // Food or Hotel or Commute
  Amount: (parseFloat(Math.random().toFixed(1)) * 10 + 1) * 100 //Number between 100 - 1000
});

const Trip = (id, dest) => ({
  Id: id,
  Destination: dest,
  Date: Date.now() - (Math.round(Math.random()) * 30) * 24 * 60 * 60 * 1000, // Generates dates from last 1 month
  Miles: (parseFloat(Math.random().toFixed(1)) + 1) * 1000, // Number between 1000 - 2000 miles
  Category: BUSINESS_TYPES[Math.round(Math.random())], // Business or Non-Business
  ExpenseList: [Expense("expense-1"), Expense("expense-2"), Expense("expense-3")]
});

export const Trips = () => [{
  UserId: 1,
  Trips:[Trip("trip-1", "New York"),Trip("trip-1", "New York"), Trip("trip-2", "Detroit"), Trip("trip-3", "Kansas City"), Trip("trip-4", "California"), Trip("trip-5", "Florida"), Trip("trip-5", "Florida")]
}];

export const User = () => ({
  Id: 1,
  Name: 'User 1'
});
