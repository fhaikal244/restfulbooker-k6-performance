@echo off
echo ================================
echo    K6 Performance Test Runner
echo ================================

echo [1/4] Running Smoke Test...
k6 run tests/smoke-test.js
start reports/smoke-report.html

echo [2/4] Running Load Test...
k6 run tests/load-test.js
start reports/load-report.html

echo [3/4] Running Stress Test...
k6 run tests/stress-test.js
start reports/stress-report.html

echo [4/4] Running Spike Test...
k6 run tests/spike-test.js
start reports/spike-report.html

echo ================================
echo    All Tests Completed!
echo ================================
pause