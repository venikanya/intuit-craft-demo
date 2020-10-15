import { User, Trips } from './mock.mjs';
const memoryDB = {};

export const loadDB = () => {
  memoryDB["/user"] = User();
  memoryDB["/trips"] = Trips();
};

export const getUser = () => {
  return memoryDB["/user"];
};

export const getTripsByType = (type, userId) => {
  const userTrips = memoryDB["/trips"].find(trip => trip.UserId === userId);
  if (userTrips && type) {
    return [userTrips.Trips.filter(trip => trip.Category === type)];
  }
  return userTrips.Trips;
};

export const addExpenseToTrip = (userId, tripId, expense) => {
  const userTripsIdx = memoryDB["/trips"].findIndex(trip => trip.UserId === userId);
  const userTrips = memoryDB["/trips"][userTripsIdx];
  if (userTrips && expense) {
    const trip = userTrips.Trips.find(trip => trip.Id === tripId);
    if (trip) {
      trip.ExpenseList = trip.ExpenseList.concat({
        Id: `expense-${userTrips.Trips.length + 1}`,
        Category: expense.type,
        Amount: expense.amount
      });
    }
  }
  memoryDB["/trips"].splice(userTripsIdx, 1, userTrips);
  return userTrips.Trips;
};
