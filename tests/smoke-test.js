import { sleep } from 'k6';
import { config } from '../config/config.js';
import { getToken, getAllBookings, createBooking, logResult } from '../utils/helper.js';
import { testData } from '../data/test-data.js';
import { htmlReport } from 'https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js';
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';

export const options = {
  stages: config.stages.smoke,
  thresholds: config.thresholds
};

export function handleSummary(data) {
  return {
    'reports/smoke-report.html': htmlReport(data),
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
  logResult('Create Booking', newBooking);
  sleep(1);
}