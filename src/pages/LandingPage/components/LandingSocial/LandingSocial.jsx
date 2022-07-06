import { SocialIcon } from "react-social-icons";

const NavLandingSocial = ({ socialData, colorsData }) => {
  const mappeddata = socialData.links.map((item) => {
    return (
      <li key={item}>
        <SocialIcon bgColor={colorsData[0]} url={item} />
      </li>
    );
  });
  return (
    <div id="NavLandingSocial">
      <ul className="row">{mappeddata}</ul>
    </div>
  );
};
export default NavLandingSocial;
