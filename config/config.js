export const config = {
  baseUrl: 'https://restful-booker.herokuapp.com',
  
  auth: {
    username: 'admin',
    password: 'password123'
  },

  thresholds: {
    http_req_duration: ['p(95)<2000'],  
    http_req_failed: ['rate<0.01'],     
  },

  stages: {
    smoke: [
      { duration: '30s', target: 1 }   
    ],
    load: [
      { duration: '1m', target: 10 },  
      { duration: '3m', target: 10 },  
      { duration: '1m', target: 0 }    
    ],
    stress: [
      { duration: '1m', target: 50 },  
      { duration: '3m', target: 50 },  
      { duration: '1m', target: 100 }, 
      { duration: '3m', target: 100 }, 
      { duration: '1m', target: 0 }    
    ],
    spike: [
      { duration: '30s', target: 1 },   
      { duration: '10s', target: 200 }, 
      { duration: '30s', target: 1 }    
    ]
  }
}