function generateUniqueEmail(workerIndex) {
    return `testuser_${workerIndex}_${Date.now()}@example.com`;
}

module.exports = { generateUniqueEmail };
