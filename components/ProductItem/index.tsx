import Link from "next/link";
import { Product } from "../../types/Products";
import styles from "./styles.module.css";
type Props = {
  data: Product;
  mainColor: string;
  secundaryColor: string;
};
export const ProductItem = ({ data, mainColor, secundaryColor }: Props) => {
  return (
    <Link href={`b7`}>
      <a className={styles.container}>
        <div
          className={styles.head}
          style={{ backgroundColor: secundaryColor }}
        ></div>
        <div className={styles.info}>
          <div className={styles.img}>
            <img src={data.image} />
          </div>
          <div className={styles.catName}>{data.categoryName}</div>
          <div className={styles.name}>{data.name}</div>
          <div className={styles.price} style={{ color: mainColor }}>
            {data.price}
          </div>
        </div>
      </a>
    </Link>
  );
};
