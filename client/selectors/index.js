import { createSelector } from 'reselect'


const getTrips = state => state.trips.list || [];

export const getMilesPerYear = createSelector(
  getTrips,
  trips => trips.reduce((acc, item) => {
    const tripDate = item.Date;
    const tripYear = new Date(tripDate).getFullYear();
    if (tripYear === new Date(Date.now()).getFullYear()) {
      acc += item.Miles;
    }
    return acc;
  }, 0)
);

export const getTripsByProject = createSelector(
  getTrips,
  trips => trips.reduce((acc, item) => {
    if (!acc[item.Id]) {
      acc[item.Id] = [item];
    } else {
      acc[item.Id] = acc[item.Id].concat([item]);
    }
    return acc;
  }, {})
);
