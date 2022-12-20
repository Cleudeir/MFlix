/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import Image from 'next/image';
import Link from 'next/link';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Url from '../modules/Url';
import styles from '../styles/cards.module.css';

// eslint-disable-next-line react/prop-types, func-names
const Card = function ({ data, type, setBackGround }) {
  const slide = (i, j) => {
    const item = document.getElementById(`slider${i}`);
    const numero = item.children[0].children;
    item.scrollLeft = localStorage.getItem(`slider${i}`);
    const larguraCard = numero[0].offsetWidth;
    const larguraTotal = numero.length * larguraCard;
    console.log({
      i, j, larguraCard, larguraTotal, x: item.scrollLeft,
    });
    item.scrollLeft += (+larguraCard) * j * 3;
    localStorage.setItem(`slider${i}`, item.scrollLeft);
  };

  return (
    <div className={styles.container}>

      {data[0].length > 0
        && data.map((info, i) => (
          <div key={i}>
            <div className={styles.movieRow}>
              <div
                className={styles.movieRowLeft}
                onClick={() => slide(i, -1)}
              >
                <ArrowBackIosIcon style={{ fontSize: 60 }} className={styles.arrow} />
              </div>
              <div
                className={styles.movieRowRight}
                onClick={() => slide(i, 1)}
              >
                <ArrowForwardIosIcon style={{ fontSize: 60 }} className={styles.arrow} />
              </div>
            </div>

            <h1 style={{
              color: 'white', marginLeft: 60, whiteSpace: 'nowrap',
            }}
            >
              {info[0].genres}
            </h1>
            <div id={`slider${i}`} className={styles.containerList} key={i}>
              <div className={styles.list_cards}>
                {info.map((x, j) => (
                  <div
                    key={x.title + j}
                    className={styles.card}
                    onMouseOver={() => {
                      setBackGround(x);
                    }}
                    onFocus={() => {
                      setBackGround(x);
                    }}
                  >
                    <Link href={Url(x, type)}>
                      <a href="replace">
                        <Image
                          className={styles.image}
                          src={x.poster_path}
                          width={193}
                          height={300}
                          layout="intrinsic"
                          alt={x.title}
                        />
                      </a>
                    </Link>
                    <h6 className={styles.h6}>
                      { }
                      {x.url
                        ? `❤️ ${x.title.slice(0, 15)} `
                        : `${x.title.slice(0, 15)}`}
                    </h6>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Card;
