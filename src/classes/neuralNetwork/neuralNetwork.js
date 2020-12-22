function NeuralNetwork(architecture) {
    this.architecture = architecture
    this.hiddens = [[]]
    this.outputs = []

    this.initializeWeights()
}

NeuralNetwork.prototype.initializeWeights = require('./prototypes/initializeWeights')
NeuralNetwork.prototype.feedForward = require('./prototypes/feedForward')
NeuralNetwork.prototype.setInputs = require('./prototypes/setInputs')
NeuralNetwork.prototype.setWeights = require('./prototypes/setWeights')
NeuralNetwork.prototype.updateRandomWeight = require('./prototypes/updateRandomWeight')

module.exports = NeuralNetwork