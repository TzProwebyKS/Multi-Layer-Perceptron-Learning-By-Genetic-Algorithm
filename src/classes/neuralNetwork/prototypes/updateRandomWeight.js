const newWeight = require('../utils/newWeight')

module.exports = function() {
    const indexOfWeight = Math.floor(Math.random() * this.weights.length)
    this.weights[indexOfWeight] = newWeight()
}