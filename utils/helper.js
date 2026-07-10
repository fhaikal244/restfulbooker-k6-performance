import http from 'k6/http';
import { check } from 'k6';
import { config } from '../config/config.js';

// ── Headers ───────────────────────────────────────

export const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json'
};

export const authHeaders = (token) => ({
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Cookie': `token=${token}`
});

// ── Auth ──────────────────────────────────────────

export function getToken() {
  const response = http.post(
    `${config.baseUrl}/auth`,
    JSON.stringify(config.auth),
    { headers }
  );

  check(response, {
    'auth status 200': (r) => r.status === 200,
    'token exists': (r) => r.json('token') !== undefined
  });

  return response.json('token');
}

// ── Booking ───────────────────────────────────────

export function getAllBookings() {
  const response = http.get(
    `${config.baseUrl}/booking`,
    { headers }
  );

  check(response, {
    'get all bookings status 200': (r) => r.status === 200,
    'bookings not empty': (r) => r.json().length > 0
  });

  return response;
}

export function createBooking(payload) {
  const response = http.post(
    `${config.baseUrl}/booking`,
    JSON.stringify(payload),
    { headers }
  );

  check(response, {
    'create booking status 200': (r) => r.status === 200,
    'booking id exists': (r) => r.json('bookingid') !== undefined
  });

  return response;
}

export function getBookingById(id, token) {
  const response = http.get(
    `${config.baseUrl}/booking/${id}`,
    { headers: authHeaders(token) }
  );

  check(response, {
    'get booking status 200': (r) => r.status === 200
  });

  return response;
}

export function updateBooking(id, payload, token) {
  const response = http.put(
    `${config.baseUrl}/booking/${id}`,
    JSON.stringify(payload),
    { headers: authHeaders(token) }
  );

  check(response, {
    'update booking status 200': (r) => r.status === 200
  });

  return response;
}

export function deleteBooking(id, token) {
  const response = http.del(
    `${config.baseUrl}/booking/${id}`,
    null,
    { headers: authHeaders(token) }
  );

  check(response, {
    'delete booking status 201': (r) => r.status === 201
  });

  return response;
}

// ── Logging ───────────────────────────────────────

export function logResult(testName, response) {
  console.log(`[${testName}] Status: ${response.status} | Duration: ${response.timings.duration}ms`);
}