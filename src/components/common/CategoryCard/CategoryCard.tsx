import classNames from "classnames";
import { ICategoryCard } from "./CategoryCard.models";
import styles from "./CategoryCard.module.scss";

const CategoryCard = ({ image, title, href }: ICategoryCard) => {
  return (
    <div className="pw">
      <a href={href} className={classNames(styles.categoryCard)}>
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
      </a>
    </div>
  );
};

export default CategoryCard;
