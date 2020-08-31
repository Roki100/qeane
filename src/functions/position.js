module.exports = (pos) => {
    pos = Math.floor(pos / 1000)
    const seconds = pos % 60
    const hours = Math.floor(pos / 3600)
    const minutes = Math.floor(pos / 60)
    return `${hours ? `${hours}:` : ""}${minutes}:${seconds}`
}