import { Server } from "http";
import app from "./app";

import result from "./model/auth/auth.controler";

const port = 3000;


async function main() {
  const server: Server = app.listen(port, () => {
  console.log(`server is running on ${port}`)
  });
}

main();
