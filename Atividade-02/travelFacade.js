const FlightBooking = require('./flightBooking');
const HotelBooking = require('./hotelBooking');
const CarRental = require('./carRental');

class TravelFacade {
  constructor(travelBooking) {
    this.FligthBooking = new FlightBooking(travelBooking.flightId, travelBooking.flightPassanger);
    this.HotelBooking = new HotelBooking(travelBooking.hotelRoom, travelBooking.reservationName, travelBooking.checkIn);
    this.CarRental = new CarRental(travelBooking.carId, travelBooking.rentalDate);
  }

  travelPackageConfirmation() {
    this.FligthBooking.confirmationFlight();
    this.HotelBooking.confirmationHotel();
    this.CarRental.confirmationCar();
  }
}

module.exports = TravelFacade;

