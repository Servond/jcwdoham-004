import http, { IncomingMessage, ServerResponse } from "http";

const PORT = 8080;

const app = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  // GET http://localhost:8080/api
  if (req.url === "/api" && req.method === "GET") {
    res.writeHead(200, { "content-type": "application/json" });

    res.write(JSON.stringify({ message: "Hello from Node.js API!" }));
    res.end();
  }
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
