import createApplication from "./application";
import http from "http";

const PORT = process.env.HTTP_PORT || 3000;
const LOG_FORMAT = process.env.LOG_FORMAT || "dev";

const server = http.createServer(createApplication(LOG_FORMAT));

server.listen(PORT, () => {
  console.log(`Server is listening on :${PORT}`);
});
