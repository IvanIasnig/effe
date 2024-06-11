import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["default"])),
    },
  };
}

const Home = () => {
  const { t } = useTranslation();

  return <>{t("default:prova")}</>;
};

export default Home;
