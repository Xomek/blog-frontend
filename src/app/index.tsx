import { createRoot } from "react-dom/client";
import "app/styles/index.scss";

const app = <div>Hello World</div>;

const root = createRoot(document.getElementById("root")!);
root.render(app);
