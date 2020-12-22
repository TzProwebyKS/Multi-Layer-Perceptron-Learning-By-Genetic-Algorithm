const NeuralNetwork = require('../neuralNetwork/neuralNetwork')

function Individual(architecture) {
    this.fitness = 0
    this.neuralNetwork = new NeuralNetwork(architecture) 
}

Individual.prototype.calcFitness = require('./prototypes/calcFitness')

module.exports = Individual