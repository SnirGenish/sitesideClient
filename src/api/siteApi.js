import axios from "axios";

export const addSite = async (siteDetails) => {
  try {
    const site = await axios.post(
      `${process.env.REACT_APP_API}/sites/`,
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
      `${process.env.REACT_APP_API}/sites/` + siteUser + "/" + siteName
    );
    if (site) {
      return site;
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};
export const updateSite = async (siteDetails) => {
  try {
    const site = await axios.patch(
      `${process.env.REACT_APP_API}/sites/` + siteDetails._id,
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
