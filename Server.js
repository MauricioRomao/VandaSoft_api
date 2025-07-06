import { App } from "./App.js";

const port = process.env.PORT 



App.listen(port, () => {
  console.log(`Server Rodando ${port}`);
});