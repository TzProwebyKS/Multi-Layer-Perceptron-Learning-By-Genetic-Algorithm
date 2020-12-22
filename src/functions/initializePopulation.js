const Individual = require('../classes/individual/individual')

module.exports = function(popSize, architecture) {
    const population = []

    for (let i = 0; i < popSize; i++) {
        population.push(new Individual(architecture))
    }

    return population
}