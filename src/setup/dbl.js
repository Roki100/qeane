module.exports = (client) => {
    const DBL = require("dblapi.js");
    const dbl = new DBL('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjcyNzE2MzA5NzAyNjAwMzAwNCIsImJvdCI6dHJ1ZSwiaWF0IjoxNTk2MTA3MDYzfQ.OypRRYlaw1-8W8ILhHUVMjFD_SWXNwew4p1hir_lKD8', client);
    client.dbl = dbl
}