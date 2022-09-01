import { Outlet } from "react-router-dom";
import Directory from "../../components/directory/Directory";
import Banner from "../../components/banner/Banner";

function Home() {

  return (
    <div>
      <Banner />
      <Directory />
      <Outlet />
    </div>
  );
}

export default Home;
