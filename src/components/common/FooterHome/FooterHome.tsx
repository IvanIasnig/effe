import Bilancia from "../../../assets/svg/bilancia.svg";
import Cuore from "../../../assets/svg/favourite.svg";
import User from "../../../assets/svg/profilePic.svg";
import Search from "../../../assets/svg/search.svg";
import ProductFocus from "../../../assets/svg/productFocus.svg";
import styles from "./FooterHome.module.scss";

const FooterHome = () => {
  return (
    <div className={styles.footerHome}>
      <ProductFocus />
      <Bilancia />
      <Cuore />
      <User />
      <Search />
    </div>
  );
};

export default FooterHome;
