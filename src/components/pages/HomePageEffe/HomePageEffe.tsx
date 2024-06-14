import classNames from "classnames";
import styles from "./HomePageEffe.module.scss";
import CategoryCard from "@/components/common/CategoryCard/CategoryCard";
import hair from "../../../assets/homePage/hair.jpg";
import skin from "../../../assets/homePage/skin.jpg";
import LogoEffe from "../../../assets/svg/logoEffe.svg";
import FooterHome from "@/components/common/FooterHome/FooterHome";
import { useTranslation } from "react-i18next";
import {
  HairCarePageMetaData,
  SkinCarePageMetaData,
} from "@/utils/routesMetadata";

const HomePageEffe = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className={classNames(styles.homePage)}>
        <LogoEffe width={150} />
      </div>
      <CategoryCard
        image={hair.src}
        title={t("default:skin").toUpperCase()}                                                                                    
        href={SkinCarePageMetaData.path}
      />
      <CategoryCard
        image={skin.src}
        title={t("default:hair").toUpperCase()}
        href={HairCarePageMetaData.path}
      />
      <FooterHome />
    </>
  );
};

export default HomePageEffe;
