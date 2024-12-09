class HotelBooking {
  constructor(hotelRoom, reservationName, checkIn) {
    this.hotelRoom = hotelRoom;
    this.reservationName = reservationName;
    this.checkIn = checkIn;
  }

  confirmationHotel() {
    console.log(`Reservation Name: ${this.reservationName} - Check In: ${this.checkIn} - Room: ${this.hotelRoom}`);
  }
}

module.exports = HotelBooking;