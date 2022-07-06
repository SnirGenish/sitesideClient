import "./LandingButton.css";
const LandingButton = ({ type, colorData }) => {
  return (
    <button
      style={{ color: colorData[2], borderColor: colorData[2] }}
      id="LandingButton"
    >
      {type}
    </button>
  );
};
export default LandingButton;
