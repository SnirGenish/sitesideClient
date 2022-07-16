import axios from "axios";
export const getUser = async () => {
  console.log(process.env.REACT_APP_API);
  try {
    const user = await axios.get(`${process.env.REACT_APP_API}/users/me`, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("userData")).token
        }`,
      },
    });
    return user.data;
  } catch (err) {
    console.log(err);
  }
};
export const logIn = async (email, password) => {
  try {
    const user = await axios.post(`${process.env.REACT_APP_API}/users/logIn`, {
      email,
      password,
    });
    if (user) {
      localStorage.setItem(
        "userData",
        JSON.stringify({
          token: user.data.token,
          id: user.data.user._id,
          userName: user.data.user.userName,
          profilePic: user.data.user.profilePic,
        })
      );
      console.log(user);
      return user.data;
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
};
export const logOut = async () => {
  try {
    const user = await axios.post(
      `${process.env.REACT_APP_API}/users/logOut`,
      {},
      {
        headers: {
          Authorization: `Bearer ${
            JSON.parse(localStorage.getItem("userData")).token
          }`,
        },
      }
    );
    if (user) {
      localStorage.removeItem("userData");
      return true;
    }

    return user.data;
  } catch (err) {
    console.log(err);
  }
};
export const addUser = async (userDetails) => {
  try {
    const user = await axios.post(
      `${process.env.REACT_APP_API}/users/`,
      userDetails
    );
    console.log(user);
    if (user) {
      localStorage.setItem(
        "userData",
        JSON.stringify({
          token: user.data.token,
          id: user.data.newUser._id,
          userName: user.data.newUser.userName,
          profilePic: user.data.newUser.profilePic,
        })
      );
      return user.data;
    }
  } catch (err) {
    console.log(err);
  }
};

export const getUserByName = async (userName) => {
  try {
    const user = await axios.get(
      `${process.env.REACT_APP_API}/users/name/${userName}`
    );

    return user.data;
  } catch (err) {
    console.log(err);
  }
};
export const getUserByEmail = async (userEmail) => {
  try {
    const user = await axios.get(
      `${process.env.REACT_APP_API}/users/email/${userEmail}`
    );

    return user.data;
  } catch (err) {
    console.log(err);
  }
};
