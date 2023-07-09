import React, { useState, useEffect } from "react";
import { commerce } from "../../lib/commerce";
import styles from "./productviewdetails.module.css";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { BsFillStarFill } from "react-icons/bs";
import plusQuantity from "./assets/pluslogo.png";
import minusQuantity from "./assets/minuslogo.png";
import { CgShoppingCart } from "react-icons/cg";
import Comment from "../../components/comment/Comment";
import { render } from "react-dom";
const ProductViewDetails = () => {
  const [productDetail, setProductDetail] = useState({});
  const [slideIndex, setSlideIndex] = useState(1);
  const [rate, setRate] = useState([]);
  const [hover, setHover] = useState(null);
  const [characteristics, setCharacteristics] = useState(false);
  const [comments, setComments] = useState(false);
  const FetchProductsById = async (id) => {
    const response = await commerce.products.retrieve(id);
    const { price, name, assets, variant_groups, description, image } =
      response;
    setProductDetail({
      id,
      name,
      price,
      description,
      src: image.url,
      assets,
      variant_groups,
      index: 0,
    });
  };

  useEffect(() => {
    const id = window.location.pathname.split("/");
    FetchProductsById(id);
  });
  function plusSlides(n) {
    setSlideIndex((prev) => prev + n);
    slideShow(slideIndex + n);
  }
  function slideShow(n) {
    if (n > productDetail.assets?.length) {
      setSlideIndex(1);
    }
    if (n < 1) {
      setSlideIndex(productDetail.assets?.length);
    }
  }

  return (
    <div className={styles.product_details_and_characteristics}>
      <div className={styles.product_details_container}>
        <div className={styles.image_section}>
          <div className={styles.product_img_container}>
            <RiArrowLeftSLine
              onClick={() => {
                plusSlides(-1);
              }}
              className={styles.arrow_style}
            />
            {productDetail.assets?.map((pro, index) => (
              <div
                className={styles.images}
                key={pro.id}
                style={{ display: index + 1 === slideIndex ? "block" : "none" }}
              >
                <img className={styles.mainImage} src={pro.url} alt="" />
              </div>
            ))}
            <RiArrowRightSLine
              onClick={() => {
                plusSlides(1);
              }}
              className={styles.arrow_style}
            />
          </div>
          <div className={styles.images_variants}>
            {productDetail.assets?.map((pro, index) => (
              <div
                onClick={() => setSlideIndex(index + 1)}
                className={styles.images}
                key={pro.id}
              >
                <img
                  className={`${styles.image_item} ${
                    index + 1 === slideIndex && styles.styleActive
                  }`}
                  src={pro.url}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
        <div className={styles.product_info}>
          <div className={styles.info}>
            <div className={styles.product_name}>{productDetail.name}</div>
            <div className={styles.rating_container}>
              <div className={styles.star_wrapper}>
                {[...Array(5)].map((star, id) => {
                  const currentRating = id + 1;
                  return (
                    <label key={id}>
                      <input
                        type="radio"
                        name="rating"
                        value={currentRating}
                        onClick={() => setRate(currentRating)}
                      />
                      <BsFillStarFill
                        color={
                          currentRating <= (hover || rate)
                            ? "#ffc107"
                            : "#d6e0e0"
                        }
                        className={`${styles.star_logo}`}
                        onMouseEnter={() => setHover(currentRating)}
                        onMouseLeave={() => setHover(null)}
                      />
                    </label>
                  );
                })}
                <div className={styles.rating_users}>(226)</div>
              </div>

              <div className={styles.comment}>57 rəy</div>
            </div>
            <div className={styles.price_container}>
              {productDetail.price?.raw} ₼
            </div>
          </div>
          <div className={styles.second_section_detail_views}>
            <div className={styles.color_container}>
              <div className={styles.color_section}>
                Reng:
                <div>
                  {productDetail.variant_groups?.map((pro) => (
                    <div className={styles.colors} key={pro.id}>
                      {pro.options.map((pro) => (
                        <div
                          className={styles.color}
                          style={{ backgroundColor: pro.name }}
                          key={pro.id}
                        >
                          <p className={styles.asd}>{pro.name}</p>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.memory_container}>
              Yaddaş:
              <div>
                <ul className={styles.memory_section}>
                  <li>256 GB</li>
                  <li>128 GB</li>
                  <li>64 GB</li>
                  <li>32 GB</li>
                </ul>
              </div>
            </div>
          </div>
          <div className={styles.quantity_contianer}>
            <img src={plusQuantity} />
            <span className={styles.quantity_count}>
              <h3>0</h3>
            </span>
            <img src={minusQuantity} />
          </div>
          <div className={styles.mobile_product_info}>
            <h4>Məhsul haqqında</h4>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Perferendis ullam iusto quasi facere maiores fugiat beatae modi quo
            soluta tenetur possimus corporis vero optio quod sed quisquam,
            dignissimos tempora architecto.
          </div>
          <button className={styles.add_To_Basket}>
            <CgShoppingCart className={styles.shopping_logo} /> Səbətə at
          </button>
        </div>
      </div>
      <div className={styles.characteristics_and_comments_container}>
        <ul className={styles.characteristics_and_comments}>
          <li
            onClick={() => {
              setCharacteristics(!characteristics);
            }}
            className={styles.characteristics}
          >
            Texniki Xüsusiyyətləri
          </li>
          <li
            onClick={() => {
              setComments(!comments);
            }}
            className={styles.comments_text}
          >
            Rəylər
          </li>
        </ul>
      </div>
      <div
        className={`${styles.characteristics_and_comments_section} ${
          characteristics ? styles.activeCharacter : styles.inactiveCharacter
        }`}
      >
        <div className={styles.characteristics_section}>
          <div className={styles.indicators_container}>
            <h3 className={styles.indicators}>Əsas göstəricilər</h3>{" "}
            <ul className={styles.about_indicators_container}>
              <li className={styles.about_indicators}>
                İstehsalçı <span>Apple</span>
              </li>
              <li className={styles.about_indicators}>
                İstehsalçı <span>Apple</span>
              </li>
              <li className={styles.about_indicators}>
                İstehsalçı <span>Apple</span>
              </li>
              <li className={styles.about_indicators}>
                İstehsalçı <span>Apple</span>
              </li>
            </ul>
          </div>

          <div className={styles.indicators_container}>
            <h3 className={styles.indicators}>Əlavə göstəricilər</h3>{" "}
            <ul className={styles.about_indicators_container}>
              <li className={styles.about_indicators}>
                İstehsalçı <span>Apple</span>
              </li>
              <li className={styles.about_indicators}>
                İstehsalçı <span>Apple</span>
              </li>
              <li className={styles.about_indicators}>
                İstehsalçı <span>Apple</span>
              </li>
              <li className={styles.about_indicators}>
                İstehsalçı <span>Apple</span>
              </li>
            </ul>
          </div>

          <div className={styles.indicators_container}>
            <h3 className={styles.indicators}>Üstünlüklər</h3>{" "}
            <ul className={styles.about_indicators_container}>
              <li className={styles.about_indicators}>
                İstehsalçı <span>Apple</span>
              </li>
              <li className={styles.about_indicators}>
                İstehsalçı <span>Apple</span>
              </li>
              <li className={styles.about_indicators}>
                İstehsalçı <span>Apple</span>
              </li>
              <li className={styles.about_indicators}>
                İstehsalçı <span>Apple</span>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.description_info_container}>
          <h3 className={styles.about_description}>Məhsul haqqında</h3>
          <div
            dangerouslySetInnerHTML={{ __html: productDetail.description }}
            className={styles.description_text}
          ></div>
        </div>
      </div>
      <div
        className={`${styles.comment_container} ${
          comments ? styles.activeCom : styles.inactiveCom
        }`}
      >
        <Comment />
        <Comment />
        <Comment />
        <div className={styles.form_section}>
          <div className={styles.opinion_text}>Rəy Bildir</div>
          <div className={styles.name_and_surname_section}>
            <div>
              <label className={styles.user_name_label}>Ad</label>
              <input
                className={styles.user_name}
                placeholder="Adınızı daxil edin"
                type="text"
              />{" "}
            </div>
            <div>
              <label className={styles.user_name_label}>Soyad</label>
              <input
                className={styles.user_name}
                placeholder="Soyadınızı daxil edin"
                type="text"
              />
            </div>
          </div>
          <div>
            <label className={styles.user_select_label}>
              Rəy bildirdiyiniz məhsulu seçin
            </label>
            <select className={styles.select_section}>
              <option value="Iphone">Iphone</option>
              <option value="Samsung">Samsung</option>
              <option value="Honor">Honor</option>
              <option value="Nokia">Nokia</option>
            </select>
          </div>
          <div className={styles.textarea_container}>
            <label className={styles.user_name_label}>Rəyinizi yazın</label>
            <textarea
              className={styles.textarea_section}
              type="text"
              placeholder="Rətinizi buraya yazın"
            ></textarea>
          </div>
        </div>
        <div className={styles.button_container}>
          <button className={styles.submit_button}>Rəyini bildir</button>
        </div>
      </div>
    </div>
  );
};

export default ProductViewDetails;
