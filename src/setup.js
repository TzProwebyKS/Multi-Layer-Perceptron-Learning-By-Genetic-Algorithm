const initializePopulation = require('./functions/initializePopulation')
const Individual = require('./classes/individual/individual')
const plotPerformanceHistory = require('./functions/plotPerformanceHistory')

const architecture = {
    inputNodes: 2,
    hiddenNodes: 2,
    hiddenLayers: 1,
    outputNodes: 1
}

const dataSet = [[0, 0], [0, 1], [1, 0], [1, 1]]
const correctOutputs = [[0], [1], [1], [0]]
const popSize = 2000
const epochs = 10000

const population = initializePopulation(popSize, architecture)
const performanceHistory = []
let stop = false

function setup() {
    for (var c = 0; c < epochs && !stop; c++) {
        for (let indiv of population) {
            for (let i = 0; i < correctOutputs.length; i++) {
                indiv.neuralNetwork.setInputs(dataSet[i])
                indiv.neuralNetwork.feedForward()
                indiv.calcFitness(correctOutputs[i])
            }
        }
    
        population.sort((a, b) => b.fitness - a.fitness)
        performanceHistory.push(population[0].fitness)
            
        if (population[0].fitness == correctOutputs.length) {
            stop = true
            break
        }
    
        const bestWeights = population[0].neuralNetwork.weights.slice()
    
        for (let i = 0; i < population.length; i++) {
            population[i] = new Individual(architecture)
            population[i].neuralNetwork.setWeights(bestWeights)
    
            if (i != 0) {
                population[i].neuralNetwork.updateRandomWeight()
            }
        }
    }

    plotPerformanceHistory(performanceHistory)
}

setup()