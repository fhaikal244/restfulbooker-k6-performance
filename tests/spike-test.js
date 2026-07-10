import { sleep } from 'k6';
import { config } from '../config/config.js';
import {
  getToken,
  getAllBookings,
  createBooking,
  logResult
} from '../utils/helper.js';
import { testData } from '../data/test-data.js';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';

export function handleSummary(data) {
  return {
    'reports/spike-report.html': htmlReport(data),
    stdout: textSummary(data, { indent: ' ', enableColors: true })
  };
}

export const options = {
  stages: config.stages.spike,
  thresholds: {
    http_req_duration: ['p(95)<10000'], // lebih toleran saat spike
    http_req_failed: ['rate<0.10'],     // error rate < 10%
  }
};

export default function () {

  const token = getToken();
  sleep(0.5);

  const allBookings = getAllBookings();
  logResult('Get All Bookings', allBookings);
  sleep(0.5);

  const newBooking = createBooking(testData.validBooking);
  logResult('Create Booking', newBooking);
  sleep(0.5);

}