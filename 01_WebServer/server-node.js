const http = require("http");
const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.statusCode = 200; // if everyting is good we send statuscode = 200
    res.setHeader("Content-Type", "text/plain"); // we sometimes send headers back
    res.end("Hello ice Tea"); // i want to end the response
  } else if (req.url === "/ice-tea") {
    res.statusCode = 200; // if everyting is good we send statuscode = 200
    res.setHeader("Content-Type", "text/plain"); // we sometimes send headers back
    res.end("Thanks for ordering ice tea, its really hot"); // i want to end the response
  } else {
    res.statusCode = 404; // if everyting is good we send statuscode = 200
    res.setHeader("Content-Type", "text/plain"); // we sometimes send headers back
    res.end("404 Not found"); // i want to end the response
  }
});

server.listen(port, hostname, () => {
  console.log(`Server is listening at http://${hostname}:${port}`);
});
