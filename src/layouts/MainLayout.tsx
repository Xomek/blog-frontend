import { Header } from "components";
import { Blog } from "pages";

const MainLayout: React.FC = () => {
  return (
    <div className="h-screen flex flex-col">
      <Header />
      <Blog />
    </div>
  );
};

export default MainLayout;
