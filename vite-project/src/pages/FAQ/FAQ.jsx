import React, { useState } from "react";
import styles from "./faq.module.css";
import { HiPlus } from "react-icons/hi";

const FAQ = () => {
  const [firstopen, setFirstOpen] = useState(false);
  const [secondopen, setSecondOpen] = useState(false);
  const [thridopen, setThirdOpen] = useState(false);
  const [fourthopen, setFourthOpen] = useState(false);
  const [fifthopen, setFifthOpen] = useState(false);
  const [sixthopen, setSixthOpen] = useState(false);
  const [seventhopen, setSeventhOpen] = useState(false);
  return (
    <div className={styles.faq_section}>
      <div className={styles.faq_container}>
        <div className={styles.frequently_asked_questions}>
          Tez-tez soruşulan suallar
        </div>
        <div className={styles.questions_container}>
          <div className={styles.questions}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus ad
            unde aliquid quos, provident nemo suscipit, molestiae laudantium
            fugit tenetur
            <div
              className={`${styles.questions_full_section} ${
                firstopen ? styles.active : styles.inactive
              }`}
            >
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus ad
              unde aliquid quos, provident nemo suscipit, molestiae laudantium
              fugit tenetur, dolor sit amet consectetur adipisicing elit. Minus
              ad unde aliquid quos, provident nemo suscipit, molestiae
              laudantium fugit tenetur.
            </div>
          </div>
          <div className={styles.plus_container}>
            <HiPlus
              onClick={() => {
                setFirstOpen(!firstopen);
              }}
              className={styles.plus}
            />
          </div>
        </div>
        <div className={styles.questions_container}>
          <div className={styles.questions}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus ad
            unde aliquid quos, provident nemo suscipit, molestiae laudantium
            fugit tenetur
            <div
              className={`${styles.questions_full_section} ${
                secondopen ? styles.active : styles.inactive
              }`}
            >
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus ad
              unde aliquid quos, provident nemo suscipit, molestiae laudantium
              fugit tenetur, dolor sit amet consectetur adipisicing elit. Minus
              ad unde aliquid quos, provident nemo suscipit, molestiae
              laudantium fugit tenetur.
            </div>
          </div>
          <div className={styles.plus_container}>
            <HiPlus
              onClick={() => {
                setSecondOpen(!secondopen);
              }}
              className={styles.plus}
            />
          </div>
        </div>
        <div className={styles.questions_container}>
          <div className={styles.questions}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus ad
            unde aliquid quos, provident nemo suscipit, molestiae laudantium
            fugit tenetur
            <div
              className={`${styles.questions_full_section} ${
                thridopen ? styles.active : styles.inactive
              }`}
            >
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus ad
              unde aliquid quos, provident nemo suscipit, molestiae laudantium
              fugit tenetur, dolor sit amet consectetur adipisicing elit. Minus
              ad unde aliquid quos, provident nemo suscipit, molestiae
              laudantium fugit tenetur.
            </div>
          </div>
          <div className={styles.plus_container}>
            <HiPlus
              onClick={() => {
                setThirdOpen(!thridopen);
              }}
              className={styles.plus}
            />
          </div>
        </div>
        <div className={styles.questions_container}>
          <div className={styles.questions}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus ad
            unde aliquid quos, provident nemo suscipit, molestiae laudantium
            fugit tenetur
            <div
              className={`${styles.questions_full_section} ${
                fourthopen ? styles.active : styles.inactive
              }`}
            >
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus ad
              unde aliquid quos, provident nemo suscipit, molestiae laudantium
              fugit tenetur, dolor sit amet consectetur adipisicing elit. Minus
              ad unde aliquid quos, provident nemo suscipit, molestiae
              laudantium fugit tenetur.
            </div>
          </div>
          <div className={styles.plus_container}>
            <HiPlus
              onClick={() => {
                setFourthOpen(!fourthopen);
              }}
              className={styles.plus}
            />
          </div>
        </div>
        <div className={styles.questions_container}>
          <div className={styles.questions}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus ad
            unde aliquid quos, provident nemo suscipit, molestiae laudantium
            fugit tenetur
            <div
              className={`${styles.questions_full_section} ${
                fifthopen ? styles.active : styles.inactive
              }`}
            >
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus ad
              unde aliquid quos, provident nemo suscipit, molestiae laudantium
              fugit tenetur, dolor sit amet consectetur adipisicing elit. Minus
              ad unde aliquid quos, provident nemo suscipit, molestiae
              laudantium fugit tenetur.
            </div>
          </div>
          <div className={styles.plus_container}>
            <HiPlus
              onClick={() => {
                setFifthOpen(!fifthopen);
              }}
              className={styles.plus}
            />
          </div>
        </div>
        <div className={styles.questions_container}>
          <div className={styles.questions}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus ad
            unde aliquid quos, provident nemo suscipit, molestiae laudantium
            fugit tenetur
            <div
              className={`${styles.questions_full_section} ${
                sixthopen ? styles.active : styles.inactive
              }`}
            >
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus ad
              unde aliquid quos, provident nemo suscipit, molestiae laudantium
              fugit tenetur, dolor sit amet consectetur adipisicing elit. Minus
              ad unde aliquid quos, provident nemo suscipit, molestiae
              laudantium fugit tenetur.
            </div>
          </div>
          <div className={styles.plus_container}>
            <HiPlus
              onClick={() => {
                setSixthOpen(!sixthopen);
              }}
              className={styles.plus}
            />
          </div>
        </div>
        <div className={styles.questions_container}>
          <div className={styles.questions}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus ad
            unde aliquid quos, provident nemo suscipit, molestiae laudantium
            fugit tenetur
            <div
              className={`${styles.questions_full_section} ${
                seventhopen ? styles.active : styles.inactive
              }`}
            >
              {" "}
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus ad
              unde aliquid quos, provident nemo suscipit, molestiae laudantium
              fugit tenetur, dolor sit amet consectetur adipisicing elit. Minus
              ad unde aliquid quos, provident nemo suscipit, molestiae
              laudantium fugit tenetur.
            </div>
          </div>
          <div className={styles.plus_container}>
            <HiPlus
              onClick={() => {
                setSeventhOpen(!seventhopen);
              }}
              className={styles.plus}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
