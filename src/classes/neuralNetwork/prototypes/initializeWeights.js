const newWeight = require('../utils/newWeight')

module.exports = function() {
    const { inputNodes, hiddenNodes, hiddenLayers, outputNodes } = this.architecture

    let quantityOfWeights = 0
    // weights from input
    quantityOfWeights += (inputNodes + 1) * hiddenNodes
    // weights from hidden
    quantityOfWeights += hiddenNodes * hiddenLayers * (hiddenLayers - 1)
    // weights from output
    quantityOfWeights += hiddenNodes * outputNodes

    this.weights = []

    for (let c = 0; c < quantityOfWeights; c++) {
        this.weights.push(newWeight())
    }
}