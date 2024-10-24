const TravelFacade = require('./travelFacade');

const travelBooking = {
  flightId: '123',
  flightPassanger: 'Akio',
  hotelRoom: '203',
  reservationName: 'Akio',
  checkIn: '2024-10-24',
  carId: '123',
  rentalDate: '2024-10-25',
};

const travel = new TravelFacade(travelBooking);
travel.travelPackageConfirmation();