import classNames from "classnames";
import { ICategoryCard } from "./CategoryCard.models";
import styles from "./CategoryCard.module.scss";
import { useRouter } from "next/router";

const CategoryCard = ({ image, title, href }: ICategoryCard) => {
  const router = useRouter();

  const handleRedirect = () => {
    router.push(href);
  };
  return (
    <div className="pw">
      <button
        className={classNames(styles.categoryCard)}
        onClick={handleRedirect}
      >
        <div className={styles.categoryCard_imageWrapper}>
          <div
            className={styles.categoryCard_imageWrapper_image}
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className={styles.categoryCard_imageWrapper_image_overlay} />
            <div className={styles.categoryCard_imageWrapper_image_title}>
              {title}
            </div>
          </div>
        </div>
      </button>
    </div>
  );
};

export default CategoryCard;
