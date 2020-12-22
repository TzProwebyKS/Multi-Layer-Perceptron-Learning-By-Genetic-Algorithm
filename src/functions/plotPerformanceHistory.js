const { plot } = require('nodeplotlib')

module.exports = function(performanceHistory) {
    const data = [{x: [], y: [], type: 'line'}]

    for (let i = 0; i < performanceHistory.length; i++) {
        data[0].x.push(-i)
        data[0].y.push(performanceHistory[i])
    }

    plot(data)
}