import React, { useEffect, useState } from "react";
import styles from "./content.module.css";
import phone3 from "./assets/Rectangle 158.png";
import phone4 from "./assets/Rectangle 160 (1).png";
import article_pic from "./assets/image 6xiaomi.png";
import article_pic2 from "./assets/image 7.png";
import article_pic3 from "./assets/image 6.png";
import ProductArticle from "../HomeContentProducts/ProductArticle/ProductArticle";
import MoreArticles from "../HomeContentProducts/MoreArticles/MoreArticles";
import box from "./assets/box.png";
import medalStar from "./assets/medal-star.png";
import cardPos from "./assets/card-pos.png";
import FooterArticle from "../Footer/FooterArticle/FooterArticle";
import FooterSlider from "../Footer/FooterSlider/FooterSlider";
import { commerce } from "../../lib/commerce";
import ProductsMoreSold from "../HomeContentProducts/ProductsMoreSold/ProductMoreSold";
import NewProducts from "../HomeContentProducts/NewProducts/NewProducts";
import NewAccessoriesProducts from "../HomeContentProducts/NewAccessoriesProducts/NewAccessoriesProducts";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Content = () => {
  const { MobileDevices, AccessoriesProducts } = useFetch(commerce);
  const { products } = useFetch(commerce);
  const [cart, setCart] = useState({});

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  useEffect(() => {
    fetchCart();
  }, []);



  return (
    <div className={styles.fundament}>
      <div className={styles.content_container}>
        <div className={styles.content_two_section}>
          <div className={styles.more_products}>Ən çox satılan məhsullar</div>
          <Link className={styles.productMoreSold} to={"/MoreSoldCategories"}>
            <div className={styles.watch_all_section}>
              Hamısına bax <span>{">"}</span>
            </div>
          </Link>
        </div>
        <div className={styles.cardProduct_container}>
          <ProductsMoreSold />
        </div>
        <div className={styles.watch_all_section_mobile}>
          <Link className={styles.productMoreSold} to={"/MoreSoldCategories"}>
          Hamısına bax <span>{">"}</span>
          </Link>
        </div>
        <div className={styles.content_two_section}>
          <div>Yeni gələn məhsullar</div>
          <Link to={"/NewProductsCategories"} className={styles.New_Products}>
            {" "}
            <div className={styles.watch_all_section}>
              Hamısına bax <span>{">"}</span>
            </div>{" "}
          </Link>
        </div>
        <div className={styles.cardProduct_container}>
          <NewProducts/>
        </div>
        <div className={styles.watch_all_section_mobile}>
          <Link to={"/NewProductsCategories"} className={styles.New_Products}>
          Hamısına bax <span>{">"}</span></Link>
        </div>
        <div className={styles.product_article_container}>
          <ProductArticle AddToCart={handleAddToCart} />
        </div>
        <div className={styles.content_two_section}>
          <div>Yeni gələn aksessuarlar</div>
          <Link
            to={"/NewAccessoriesCategories"}
            className={styles.new_accessories}
          >
            <div className={styles.watch_all_section}>
              Hamısına bax <span>{">"}</span>
            </div>
          </Link>
        </div>
        <div className={styles.cardProduct_container}>
          <NewAccessoriesProducts />
        </div>
        <div className={styles.watch_all_section_mobile}>
          <Link className={styles.new_accessories} to={"/NewAccessoriesCategories"}>
          Hamısına bax <span>{">"}</span></Link>
        </div>
        <div className={styles.more_articles_container}>
          <MoreArticles
            productsNumbers={MobileDevices.length}
            imageClass={styles.aside_first_articles_image_mobile}
            image={article_pic}
            CustomClass={styles.first_articles_container}
            title={"Telefon"}
          />
          <div className={styles.aside_articles_container}>
            <MoreArticles
              productsNumbers={products.length}
              imageClass={styles.aside_first_articles_image}
              image={article_pic2}
              CustomClass={styles.aside_first_articles_container}
              title={"Məhsullar"}
            />
            <MoreArticles
              productsNumbers={AccessoriesProducts.length}
              imageClass={styles.aside_second_articles_image}
              image={article_pic3}
              CustomClass={styles.aside_first_articles_container}
              title={"Aksesuar"}
            />
          </div>
        </div>
        <div className={styles.footer_article_container}>
          <div className={styles.footer_article_section_container}>
            <FooterArticle
              image={box}
              title={"Çatdırılma"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit yuor uthumo "
              }
            />
            <FooterArticle
              image={cardPos}
              title={"Kredit"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit yuor uthumo "
              }
            />
            <FooterArticle
              image={medalStar}
              title={"Zəmanət"}
              text={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit yuor uthumo "
              }
            />
          </div>
        </div>
      </div>
      <FooterSlider />
    </div>
  );
};

export default Content;
