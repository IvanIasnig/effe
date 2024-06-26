import classNames from "classnames";
import styles from "./TypeSkinHair.module.scss";

const TypeSkinHair = ({ image, title, href }: ITypeSkinHair) => {
  const handleRedirect = () => {
    //router.push(href);
    console.log(title);
  };

  return (
    <>
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
    </>
  );
};

export default TypeSkinHair;
