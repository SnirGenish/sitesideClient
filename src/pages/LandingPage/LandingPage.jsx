import { Helmet } from "react-helmet";
import { Route } from "react-router-dom";
import LandingAboutPage from "./pages/LandingAboutPage/LandingAboutPage";
import LandingHomePage from "./pages/LandingHomePage/LandingHomePage";
import { testData } from "../../test-data/test-data";
import { useEffect, useState } from "react";
import { getSite } from "../../api/siteApi";
import { useLocation } from "react-router-dom";

const LandingPage = () => {
  const location = useLocation();
  const userName = location.pathname.split("/")[0];
  const siteName = location.pathname.split("/")[1];
  const [data, setData] = useState(testData);
  useEffect(() => {
    const gettingData = async () => {
      const site = await getSite(userName, siteName);
      setData(site);
    };
    gettingData();
    console.log(data);
  }, []);
  return (
    <div style={{ fontFamily: data.font }} className="LandingPage sprade">
      <Helmet>
        <title>{data.siteInfo.title}</title>
      </Helmet>

      <Route
        path="/:user/:site/home"
        element={<LandingHomePage data={data} />}
      />
      <Route
        path="/:user/:site/about"
        element={<LandingAboutPage data={data} />}
      />
    </div>
  );
};

export default LandingPage;
