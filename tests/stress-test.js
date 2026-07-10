import { sleep } from 'k6';
import { config } from '../config/config.js';
import {
  getToken,
  getAllBookings,
  createBooking,
  getBookingById,
  updateBooking,
  deleteBooking,
  logResult
} from '../utils/helper.js';
import { testData } from '../data/test-data.js';

export const options = {
  stages: config.stages.stress,
  thresholds: {
    http_req_duration: ['p(95)<5000'], // lebih toleran saat stress
    http_req_failed: ['rate<0.05'],    // error rate < 5%
  }
};
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';

export function handleSummary(data) {
  return {
    'reports/stress-report.html': htmlReport(data),
    stdout: textSummary(data, { indent: ' ', enableColors: true })
  };
}

export default function () {

  const token = getToken();
  sleep(1);

  const allBookings = getAllBookings();
  logResult('Get All Bookings', allBookings);
  sleep(1);

  const newBooking = createBooking(testData.validBooking);
  const bookingId = newBooking.json('bookingid');
  logResult('Create Booking', newBooking);
  sleep(1);

  const booking = getBookingById(bookingId, token);
  logResult('Get Booking By ID', booking);
  sleep(1);

  const updated = updateBooking(bookingId, testData.updatedBooking, token);
  logResult('Update Booking', updated);
  sleep(1);

  const deleted = deleteBooking(bookingId, token);
  logResult('Delete Booking', deleted);
  sleep(1);

}