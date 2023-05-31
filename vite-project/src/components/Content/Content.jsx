import React, {useEffect,useState} from "react";
import styles from "./content.module.css";
import CardProduct from "../CardProduct/CardProduct";
import phone1 from "./assets/Rectangle 158 (1).png";
import phone2 from "./assets/Rectangle 158 (2).png";
import phone3 from "./assets/Rectangle 158.png";
import phone4 from "./assets/Rectangle 160 (1).png";
import phone5 from "./assets/Rectangle 160 (2).png";
import phone6 from "./assets/Rectangle 160 (3).png";
import phone7 from "./assets/Rectangle 160 (4).png";
import phone8 from "./assets/Rectangle 160 (5).png";
import phone9 from "./assets/Rectangle 160.png";
import phone10 from "./assets/Rectangle 160 (6).png";
import phone11 from "./assets/Rectangle 160 (7).png";
import phone12 from "./assets/Rectangle 160 (8).png";
import article_pic from "./assets/image 6xiaomi.png";
import article_pic2 from "./assets/image 7.png";
import article_pic3 from "./assets/image 6.png";
import ProductArticle from "../ProductArticle/ProductArticle";
import MoreArticles from "../MoreArticles/MoreArticles";
import box from "./assets/box.png";
import medalStar from "./assets/medal-star.png";
import cardPos from "./assets/card-pos.png";
import FooterArticle from "../FooterArticle/FooterArticle";
import FooterSlider from "../FooterSlider/FooterSlider";

 const Content = () => {
  
  return (
    <div className={styles.fundament}>
      <div className={styles.content_container}>
        <div className={styles.content_two_section}>
          <div className={styles.more_products}>Ən çox satılan məhsullar</div>
          <div className={styles.watch_all_section}>
            Hamısına bax <span>{">"}</span>
          </div>
        </div>
        <div className={styles.cardProduct_container}>
          <CardProduct
            image={phone1}
            anotherstyle={styles.dis}
            discounts={"3012"}
            title={"Apple  iPhone 12, 64 GB, Purple"}
            price={"2089"}
          />
          <CardProduct
            image={phone2}
            title={"Nokia X10, 64 GB,Deep Green"}
            price={"1360"}
          />
          <CardProduct
            image={phone3}
            anotherstyle={styles.dis}
            discounts={"429.0"}
            title={"Xiaomi Poco M3 4/128Gb Yellow (Global)"}
            price={"389.0"}
          />
          <CardProduct
            image={phone4}
            anotherstyle={styles.dis}
            discounts={"699.0"}
            title={"Realme 8 Pro 6/128Gb Black"}
            price={"649.0"}
          />
        </div>
        <div className={styles.watch_all_section_mobile}>
          Hamısına bax <span>{">"}</span>
        </div>
        <div className={styles.content_two_section}>
          <div>Yeni gələn məhsullar</div>
          <div className={styles.watch_all_section}>
            Hamısına bax <span>{">"}</span>
          </div>
        </div>
        <div className={styles.cardProduct_container}>
          <CardProduct
            image={phone5}
            title={"iPhone 13 Pro Max 1 TB Sierra Blue"}
            price={"4669"}
          />
          <CardProduct
            image={phone9}
            title={"iPhone 13 256 GB Midnight"}
            price={"2629"}
          />
          <CardProduct
            image={phone10}
            title={"Honor 10 128 GB Midnight Black"}
            price={"799.9"}
          />
          <CardProduct
            image={phone11}
            title={"Samsung Galaxy Z Fold3 (SM-F926) Green"}
            price={"4199"}
          />
        </div>
        <div className={styles.watch_all_section_mobile}>
          Hamısına bax <span>{">"}</span>
        </div>
        <div className={styles.product_article_container}>
          <ProductArticle
            CustomClass={styles.product_article}
            TextClass={styles.product_article_text}
            image={phone4}
            price={"1519 AZN"}
            title={"iPhone 11.Rəngli.Güclü.Əsl sizə lazım olan."}
            percentages
            percentagesTitle={"Faizsiz taksitlə 127 AZN-dən"}
          />
          <ProductArticle
            AppleText
            CustomClass={styles.product_article_sec}
            TextClass={styles.product_article_sec_text}
            MobileClass={styles.mobile_version}
            image={phone3}
            price={"79 AZN-dən*"}
            title={`Əşyalarınızı tapmağın super asan yolu.`}
          />
        </div>

        <div className={styles.content_two_section}>
          <div>Yeni gələn aksessuarlar</div>
          <div className={styles.watch_all_section}>
            Hamısına bax <span>{">"}</span>
          </div>
        </div>
        <div className={styles.cardProduct_container}>
          <CardProduct
            image={phone12}
            title={"Apple Iphone MagSafe to USB-C Cable"}
            price={"89.99"}
          />
          <CardProduct
            image={phone6}
            title={"Apple Air Tag Leather Loop  Red"}
            price={"109.9"}
          />
          <CardProduct
            image={phone7}
            title={"Apple AirPods Max Green"}
            price={"1279"}
          />
          <CardProduct
            image={phone8}
            title={"Apple AirPods Pro with Wireless Charging Case"}
            price={"549.9"}
          />
        </div>
        <div className={styles.watch_all_section_mobile}>
          Hamısına bax <span>{">"}</span>
        </div>
        <div className={styles.more_articles_container}>
          <MoreArticles
            productsNumbers={322}
            imageClass={styles.aside_first_articles_image_mobile}
            image={article_pic}
            CustomClass={styles.first_articles_container}
            title={"Telefon"}
          />
          <div className={styles.aside_articles_container}>
            <MoreArticles
              productsNumbers={46}
              imageClass={styles.aside_first_articles_image}
              image={article_pic2}
              CustomClass={styles.aside_first_articles_container}
              title={"Smart Saat"}
            />
            <MoreArticles
              productsNumbers={891}
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
