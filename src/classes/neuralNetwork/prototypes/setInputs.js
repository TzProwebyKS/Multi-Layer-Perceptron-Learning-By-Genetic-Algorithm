module.exports = function(inputs) {
    if (inputs.length != this.architecture.inputNodes) {
        throw new Error('INPUTS must be the same length as setted in ARCHITECTURE.')
    }

    const bias = 1
    this.inputs = [bias, ...inputs]
}