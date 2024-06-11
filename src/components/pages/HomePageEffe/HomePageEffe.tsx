import classNames from "classnames";
import styles from "./HomePageEffe.module.scss";
import CategoryCard from "@/components/common/CategoryCard/CategoryCard";
import hair from "../../../assets/homePage/hair.jpg";
import skin from "../../../assets/homePage/skin.jpg";

const HomePageEffe = () => {
  return (
    <div className={classNames("")}>
      <div className={classNames(styles.homePage)}>logo</div>
      <CategoryCard image={hair.src} title="hair" />
      <CategoryCard image={skin.src} title="sking" />
    </div>
  );
};

export default HomePageEffe;
