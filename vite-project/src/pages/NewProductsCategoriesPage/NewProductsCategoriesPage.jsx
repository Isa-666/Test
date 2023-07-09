import React,{useState} from 'react';
import styles from './newproducts.module.css';
import { HiPlus } from "react-icons/hi";
import { AiOutlineMinus } from "react-icons/ai";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";
import NewProducts from '../../components/HomeContentProducts/NewProducts/NewProducts';
import useFetch from '../../hooks/useFetch';
import { commerce } from '../../lib/commerce';


const NewProductsCategoriesPage = () => {

  const [firstopen, setFirstOpen] = useState(false);
  const [secondopen, setSecondOpen] = useState(false);
  const [thridopen, setThirdOpen] = useState(false);
  const [fourthopen, setFourthOpen] = useState(false);
  const [value, setValue] = useState([200, 4000]);
  const {newProducts}=useFetch(commerce)
  function valueLabelFormat(value) {
    const units = "₼";
    let unitIndex = 0;
    let scaledValue = value;

    return `${scaledValue} ${units[unitIndex]}`;
  }
    const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.filter_and_category_container}>
    <div className={styles.filter_fundament}>
      <ul className={styles.filter_section_container}>
        <li className={styles.filter_section}>
          <div
            onClick={() => {
              setFirstOpen(!firstopen);
            }}
            className={styles.filter_brand_text}
          >
            Brand
            {firstopen ? (
              <AiOutlineMinus className={styles.plusIcon} />
            ) : (
              <HiPlus className={styles.plusIcon} />
            )}
          </div>
          <div className={`${firstopen ? styles.active : styles.inactive}`}>
            <div className={styles.brand_container}>
              <div>
                <input type="checkbox" />
                <label>Apple</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>Nokia</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>Honor</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>Samsung</label>
              </div>
            </div>
          </div>
        </li>

        <li className={styles.filter_section}>
          <div
            onClick={() => {
              setSecondOpen(!secondopen);
            }}
            className={styles.filter_brand_text}
          >
            Price
            {secondopen ? (
              <AiOutlineMinus className={styles.plusIcon} />
            ) : (
              <HiPlus className={styles.plusIcon} />
            )}
          </div>
          <div className={`${secondopen ? styles.active : styles.inactive}`}>
            <div className={styles.filter_price}></div>
            <h2 className={styles.price_text}>Price section :</h2>

            <Box paddingTop={9} marginLeft={5} sx={{ width: 200 }}>
              <Slider
                value={value}
                min={200}
                max={4000}
                onChange={handleChange}
                valueLabelDisplay="auto"
                valueLabelFormat={valueLabelFormat}
                getAriaValueText={valueLabelFormat}
                aria-labelledby="non-linear-slider"
              />
            </Box>
          </div>
        </li>
        <li className={styles.filter_section}>
          <div
            onClick={() => {
              setThirdOpen(!thridopen);
            }}
            className={styles.filter_brand_text}
          >
            Color
            {thridopen ? (
              <AiOutlineMinus className={styles.plusIcon} />
            ) : (
              <HiPlus className={styles.plusIcon} />
            )}
          </div>
          <div className={`${thridopen ? styles.active : styles.inactive}`}>
            <div className={styles.color_container}>
              <div>
                <input type="checkbox" />
                <label>White</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>Black</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>Blue</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>Yellow</label>
              </div>
            </div>
          </div>
        </li>
        <li className={styles.filter_section}>
          <div
            onClick={() => {
              setFourthOpen(!fourthopen);
            }}
            className={styles.filter_brand_text}
          >
            Category
            {fourthopen ? (
              <AiOutlineMinus className={styles.plusIcon} />
            ) : (
              <HiPlus className={styles.plusIcon} />
            )}
          </div>
          <div className={`${fourthopen ? styles.active : styles.inactive}`}>

          <div className={styles.cateories_container}>
              <div>
                <input type="checkbox" />
                <label>Airpods</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>Laptop</label>
              </div>
              <div>
                <input type="checkbox" />
                <label>Notebook</label>
              </div>
            </div>

          </div>
        </li>
      </ul>
    </div>
    <div className={styles.category_fundament}>
      <div className={styles.products_counts}>
        {newProducts.length} məhsul tapıldı
        <span>
          <select className={styles.new_products}>
            <option value="New">Ən yenilər</option>
            <option value="Old">Ən kohnələr</option>
          </select>
        </span>
      </div>
      <div className={styles.category_container}>
<NewProducts/>
      </div>
    </div>
  </div>
  )
}

export default NewProductsCategoriesPage      