import "../style/Logo.css";
import LogoPictures from "../Pictures/Logo.png";
import NamePictures from "../Pictures/Nazwa.png";

const Logo = () => {
  return (
    <div>
      <img src={LogoPictures} alt="Cactus with mustache as a logo" />
      <img src={NamePictures} alt="Page name logo: mrKaktus" />
    </div>
  );
};

export default Logo;
