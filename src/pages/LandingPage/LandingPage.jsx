import { Helmet } from "react-helmet";
import { Route } from "react-router-dom";
import LandingAboutPage from "./pages/LandingAboutPage/LandingAboutPage";
import LandingHomePage from "./pages/LandingHomePage/LandingHomePage";
import { testData } from "../../test-data/test-data";
const LandingPage = () => {
  const data = testData[0];
  console.log(data.color);
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
