import { mappingColors } from "../util/util";
export const testData = [
  {
    siteInfo: {
      title: "mysite",
      userName: "someUser",
    },
    logo: {
      isText: false,
      text: "Logo",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/ZDF_logo%21_Logo_2021.svg/800px-ZDF_logo%21_Logo_2021.svg.png",
    },
    homeContent: {
      title: "asdf",
      subTitle: "something about the text",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quisquam omnis repudiandae nesciunt hic dicta cupiditate recusandae! Omnis pariatur nisi, velit est aliquam praesentium illo nobis rem blanditiis quasi delectus!",
      buttonLabel: "About",
      imgUrl:
        "https://www.cyp-engineering.com/wp-content/uploads/2016/06/bg.jpg",
    },
    aboutContent: {
      title: "About",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, quisquam omnis repudiandae nesciunt hic dicta cupiditate recusandae! Omnis pariatur nisi, velit est aliquam praesentium illo nobis rem blanditiis quasi delectus!",
    },
    Social: {
      links: [
        "https://www.facebook.com/",
        "https://www.instagram.com/",
        "https://www.linkedin.com/",
        "https://www.discord.com/",
      ],
    },
    color: mappingColors("#eb5834"),
    font: "Roboto",
  },
  {
    siteInfo: {
      title: "mysite2",
      userName: "someUser",
    },
    logo: {
      isText: true,
      text: "Logo2",
      url: "",
    },
    homeContent: {
      title: "other Text",
      subTitle: "asd about the text",
      text: " dolor sit amet consectetur adipisicing elit. Amet, quisquam omnis repudiandae nesciunt hic dicta cupiditate recusandae! Omnis pariatur nisi, velit est aliquam praesentium illo nobis rem blanditiis quasi delectus!",
      buttonLabel: "contactUs",
      imgUrl:
        "https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/11/hfpqyV7B-IMG-Dubai-UAE.jpg",
    },
    aboutContent: {
      title: "asdf2",
      text: "asdf2 ipsum dolor sit amet consectetur adipisicing elit. Amet, quisquam omnis repudiandae nesciunt hic dicta cupiditate recusandae! Omnis pariatur nisi, velit est aliquam praesentium illo nobis rem blanditiis quasi delectus!",
    },
    Social: {
      links: [
        "https://www.facebook.com/",
        "https://www.instagram.com/",
        "https://www.discord.com/",
        "https://www.linkedin.com/",
      ],
    },
    color: mappingColors("#464646"),
    font: "arial",
  },
];
