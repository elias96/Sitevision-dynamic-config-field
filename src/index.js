import router from "@sitevision/api/common/router";
import * as React from "react";
import { renderToString } from "react-dom/server";
import App from "./components/App";

router.get("/", (req, res) => {
  const data = {};
  res.agnosticRender(renderToString(<App {...data} />), data);
});
