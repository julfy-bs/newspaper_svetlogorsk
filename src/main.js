import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/burger-menu";
import "./scripts/slider";
import "./scripts/search";

