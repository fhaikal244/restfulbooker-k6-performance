export const testData = {
  validBooking: {
    firstname: "John",
    lastname: "Doe",
    totalprice: 150,
    depositpaid: true,
    bookingdates: {
      checkin: "2025-01-01",
      checkout: "2025-01-10"
    },
    additionalneeds: "Breakfast"
  },
  updatedBooking: {
    firstname: "Jane",
    lastname: "Smith",
    totalprice: 200,
    depositpaid: false,
    bookingdates: {
      checkin: "2025-02-01",
      checkout: "2025-02-10"
    },
    additionalneeds: "Lunch"
  },
  partialUpdate: {
    firstname: "Updated",
    lastname: "Name"
  }
}