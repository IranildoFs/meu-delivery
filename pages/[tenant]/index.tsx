import { Banner } from "../../components/Banner";
import { ProductItem } from "../../components/ProductItem";
import { SearchInput } from "../../components/SearchInput";
import styles from "../../styles/Home.module.css";
const Home = () => {
  const handleSearch = (searchValue: string) => {
    console.log(`voce esta buscando por ${searchValue}`);
  };
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerTop}>
          <div className={styles.headerTopLeft}>
            <div className={styles.headerTitle}>Seja Bem Vindo (a) 👋</div>
            <div className={styles.headerSubtitle}>O que deseja pra Hoje?</div>
          </div>
          <div className={styles.headerTopRight}>
            <div className={styles.menuButtom}>
              <div className={styles.menuButtomLine}></div>
              <div className={styles.menuButtomLine}></div>
              <div className={styles.menuButtomLine}></div>
            </div>
          </div>
        </div>
        <div className={styles.headerBottom}>
          <SearchInput mainColor="#fb9400" onSearch={handleSearch} />
        </div>
      </header>
      <Banner />
      <div className={styles.grid}>
        <ProductItem
          data={{
            id: 1,
            image: "/tmp/burger1.png",
            categoryName: "Tradicional",
            name: "Burger",
            price: "R$ 25,90",
          }}
          mainColor="#fb9400"
          secundaryColor="#fb9400"
        />
        <ProductItem
          data={{
            id: 2,
            image: "/tmp/burger2.png",
            categoryName: "Tradicional",
            name: "Burger",
            price: "R$ 25,90",
          }}
          mainColor="#fb9400"
          secundaryColor="#fb9400"
        />
        <ProductItem
          data={{
            id: 3,
            image: "/tmp/burger3.png",
            categoryName: "Tradicional",
            name: "Burger",
            price: "R$ 25,90",
          }}
          mainColor="#fb9400"
          secundaryColor="#fb9400"
        />
        <ProductItem
          data={{
            id: 4,
            image: "/tmp/burger4.png",
            categoryName: "Tradicional",
            name: "Burger",
            price: "R$ 25,90",
          }}
          mainColor="#fb9400"
          secundaryColor="#fb9400"
        />

        <ProductItem
          data={{
            id: 5,
            image: "/tmp/burger1.png",
            categoryName: "Tradicional",
            name: "Burger",
            price: "R$ 25,90",
          }}
          mainColor="#fb9400"
          secundaryColor="#fb9400"
        />
        <ProductItem
          data={{
            id: 6,
            image: "/tmp/burger2.png",
            categoryName: "Tradicional",
            name: "Burger",
            price: "R$ 25,90",
          }}
          mainColor="#fb9400"
          secundaryColor="#fb9400"
        />
        <ProductItem
          data={{
            id: 7,
            image: "/tmp/burger3.png",
            categoryName: "Tradicional",
            name: "Burger",
            price: "R$ 25,90",
          }}
          mainColor="#fb9400"
          secundaryColor="#fb9400"
        />
        <ProductItem
          data={{
            id: 8,
            image: "/tmp/burger4.png",
            categoryName: "Tradicional",
            name: "Burger",
            price: "R$ 25,90",
          }}
          mainColor="#fb9400"
          secundaryColor="#fb9400"
        />
      </div>
    </div>
  );
};

export default Home;
