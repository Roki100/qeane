/**
 * Returns a random color (used for embeds)
 */
module.exports = () => {
    return Math.floor(Math.random() * (0xffffff + 1))
}