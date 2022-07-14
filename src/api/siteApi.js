import axios from "axios";
export const addSite = async (siteDetails) => {
  try {
    const site = await axios.post(
      "http://192.168.1.152:8000/sites/",
      siteDetails,
      {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("userData")).token
          }`,
        },
      }
    );
    if (site) {
      return site;
    }
  } catch (err) {
    return err;
  }
};
export const getSite = async (siteName, siteUser) => {
  try {
    const site = await axios.get(
      "http://192.168.1.152:8000/sites/" + siteUser + "/" + siteName
    );
    if (site) {
      return site;
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};
