module.exports = (gain) => {
    let bands = [
        {"band": 0, "gain": 0.175},
        {"band": 1, "gain": 0.150},
        {"band": 2, "gain": 0.125},
        {"band": 3, "gain": 0.1}
    ]
    let tmp = [];
    bands.map(band => {
        if (gain === 0) band.gain = 0
        band.gain = band.gain + gain
        tmp.push(band)
    })
    return tmp;
}