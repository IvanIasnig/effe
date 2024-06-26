import TypeSkinHair from "@/components/common/TypeSkinHair/TypeSkinHair";
import { useTranslation } from "react-i18next";
import acneProne from "../../../assets/skin/acneProne.jpg";
import dry from "../../../assets/skin/dry.jpg";
import mixed from "../../../assets/skin/mixed.jpg";
import normal from "../../../assets/skin/normal.jpg";
import sensitive from "../../../assets/skin/sensitive.jpg";

const HairCare = () => {
  const { t } = useTranslation();

  const skinTypes = [
    {
      type: "default:hair",
      img: normal,
    },
    {
      type: "default:acneProne",
      img: acneProne,
    },
    {
      type: "default:mixed",
      img: mixed,
    },
    {
      type: "default:sensitive",
      img: sensitive,
    },
    {
      type: "default:dry",
      img: dry,
    },
  ];

  return (
    <div className="pw mt40">
      {skinTypes.map((skin, key) => (
        <TypeSkinHair
          key={key}
          image={skin.img.src}
          href={""}
          title={t(skin.type)}
        />
      ))}
    </div>
  );
};

export default HairCare;
