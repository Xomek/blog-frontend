import { createRoot } from "react-dom/client";
import { MainLayout } from "layouts";
import "app/styles/index.scss";

const app = <MainLayout />;

const root = createRoot(document.getElementById("root")!);
root.render(app);
