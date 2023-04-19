import Footer from "../../components/footer";
import Header from "../../components/header";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
