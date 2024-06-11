import HomePageEffe from "@/components/pages/HomePageEffe/HomePageEffe";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["default"])),
    },
  };
}

const HomePage = () => {
  return (
    <>
      <HomePageEffe />
    </>
  );
};

export default HomePage;
