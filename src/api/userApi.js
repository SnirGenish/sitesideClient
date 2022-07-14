import axios from "axios";
export const getUser = async () => {
  try {
    const user = await axios.get("http://192.168.1.152:8000/users/me", {
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
    const user = await axios.post("http://192.168.1.152:8000/users/logIn", {
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
      "http://192.168.1.152:8000/users/logOut",
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
      "http://192.168.1.152:8000/users/",
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
