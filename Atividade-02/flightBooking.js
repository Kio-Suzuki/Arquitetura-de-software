class FligthBooking {
  constructor(flightId, flightPassanger) {
    this.flightId = flightId;
    this.flightPassanger = flightPassanger;
  }

  confirmationFlight() {
    console.log(`Flight ID: ${this.flightId} - Passenger: ${this.flightPassanger}`);
  }
}

module.exports = FligthBooking;