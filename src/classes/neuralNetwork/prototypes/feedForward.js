const ReLu = require('../activationFunctions/ReLu')
const binaryStep = require('../activationFunctions/binaryStep')

module.exports = function() {
    let indexOfWeight = 0

    // calcs the first hidden
    for (let y = 0; y < this.architecture.hiddenNodes; y++) {
        this.hiddens[0][y] = 0

        for (let i = 0; i < this.inputs.length; i++) {
            this.hiddens[0][y] += this.inputs[i] * this.weights[indexOfWeight]
            indexOfWeight++
        }

        this.hiddens[0][y] = ReLu(this.hiddens[0][y])
    }

    // calcs all the left hidden
    for (let c = 1; c < this.architecture.hiddenLayers; c++) {
        this.hiddens[c] = [0]
        
        for (let r = 0; r < this.architecture.hiddenNodes; r++) {
            this.hiddens[c][r] = 0

            for (let k = 0; k < this.architecture.hiddenNodes; k++) {
                this.hiddens[c][r] += this.hiddens[c - 1][k] * this.weights[indexOfWeight]
                indexOfWeight++
            }

            this.hiddens[c][r] = ReLu(this.hiddens[c][r])
        }
    }

    const indexOfLastHidden = this.hiddens.length - 1 

    // calcs the output
    for (let c = 0; c < this.architecture.outputNodes; c++) {
        this.outputs[c] = 0

        for (let r = 0; r < this.architecture.hiddenNodes; r++) {
            this.outputs[c] += this.hiddens[indexOfLastHidden][r] * this.weights[indexOfWeight]
            indexOfWeight++
        }
    }

    for (let i = 0; i < this.outputs.length; i++) {
        this.outputs[i] = binaryStep(this.outputs[i])
    }
}