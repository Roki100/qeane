/**
 * Transforms miliseconds into a timestamp
 * @param {Number} duration - the duration (in miliseconds)
 * @returns {String} The duration (ex: "05:45")
 */
module.exports = function duration(duration) {
    let totalSeconds = Math.round(duration / 1000)
    let hours = Math.floor(totalSeconds / 3600) % 24;
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.round(totalSeconds % 60)
    minutes = minutes >= 10 ? minutes : "0" + minutes
    seconds = seconds >= 10 ? seconds : "0" + seconds
    if (hours) {
        return `${hours}:${minutes}:${seconds}`
    } else {
        return `${minutes}:${seconds}`
    }
}