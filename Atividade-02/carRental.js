class CarRental {
  constructor(carId, rentalDate) {
    this.carId = carId;
    this.rentalDate = rentalDate;
  }

  confirmationCar() {
    console.log(`Car ID: ${this.carId} - Rental Date: ${this.rentalDate}`);
  }
}

module.exports = CarRental;