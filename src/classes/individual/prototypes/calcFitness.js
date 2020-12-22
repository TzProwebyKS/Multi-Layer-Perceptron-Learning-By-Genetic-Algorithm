module.exports = function(correctOutputs) {
    for (let i = 0; i < correctOutputs.length; i++) {
        if (this.neuralNetwork.outputs[i] == correctOutputs[i]) {
            this.fitness++
        }
    }
}