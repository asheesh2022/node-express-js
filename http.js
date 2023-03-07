const http = require("http")

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.end("welcome to our page")

    }
   else if (req.url === "/home") {
        res.end("welcome to our home  page")

    }
    else {
        res.end(`
        <h1>opps not found</h1>`)
    }
   
})
server.listen(3000)