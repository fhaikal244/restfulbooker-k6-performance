# Restful Booker Performance Testing ⚡

![k6](https://img.shields.io/badge/k6-7D64FF?style=for-the-badge&logo=k6&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
[![CI](https://github.com/fhaikal244/restfulbooker-k6-performance/actions/workflows/k6.yml/badge.svg)](https://github.com/fhaikal244/restfulbooker-k6-performance/actions/workflows/k6.yml)

Performance Testing Framework built using k6 with Smoke, Load, Stress, and Spike testing scenarios.

---

## 🛠️ Tech Stack
- **k6** — Performance Testing
- **JavaScript** — Programming Language
- **HTML Report** — Test Reporting
- **GitHub Actions** — CI/CD

---

## 📁 Project Structure

```plaintext
├── .github/workflows/    # CI/CD pipeline
├── tests/
│   ├── smoke-test.js     # Smoke testing
│   ├── load-test.js      # Load testing
│   ├── stress-test.js    # Stress testing
│   └── spike-test.js     # Spike testing
├── data/
│   └── test-data.js      # Test data
├── config/
│   └── config.js         # Environment config
├── utils/
│   └── helper.js         # Reusable functions
├── run.bat               # Run all tests
├── smoke.bat             # Run smoke test
├── load.bat              # Run load test
├── stress.bat            # Run stress test
└── spike.bat             # Run spike test
```

---

## 📋 Test Scenarios

| Scenario | Users | Duration | Threshold |
|---|---|---|---|
| Smoke | 1 | 30s | p(95) < 2s, error < 1% |
| Load | 10 | 5m | p(95) < 2s, error < 1% |
| Stress | 100 | 9m | p(95) < 5s, error < 5% |
| Spike | 200 | 1m | p(95) < 10s, error < 10% |

---

## ✅ Test Coverage

| Endpoint | Method | Tested |
|---|---|---|
| /auth | POST | ✅ |
| /booking | GET | ✅ |
| /booking | POST | ✅ |
| /booking/{id} | GET | ✅ |
| /booking/{id} | PUT | ✅ |
| /booking/{id} | DELETE | ✅ |

---

## 📊 Test Results

| Test | Status | p(95) | Error Rate |
|---|---|---|---|
| Smoke | ✅ Pass | < 2s | 0% |
| Load | ✅ Pass | < 2s | < 1% |
| Stress | ✅ Pass | 820ms | 0.38% |
| Spike | ✅ Pass | < 10s | < 10% |

---

## 🚀 Getting Started

### Prerequisites
```plaintext
k6 v2.0.0+
```

### Installation
```bash
# Clone repo
git clone https://github.com/fhaikal244/restfulbooker-k6-performance.git

# Enter directory
cd restfulbooker-k6-performance
```

### Run Tests
```bash
# Run all tests
.\run.bat

# Run specific test
.\smoke.bat
.\load.bat
.\stress.bat
.\spike.bat
```

---

## 🌐 Target Application

| | |
|---|---|
| URL | https://restful-booker.herokuapp.com |
| Docs | https://restful-booker.herokuapp.com/apidoc |

---

## 📊 CI/CD

Automated performance tests run on every push via GitHub Actions.
