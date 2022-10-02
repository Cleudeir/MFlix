import Link from 'next/link';
import styles from '../styles/Header.module.css';

const HeaderButtons = function HeaderButtons({ type, search }) {
  function ButtonColorMovie() {
    if (type === 'movie') {
      return { width: '75px', backgroundColor: 'rgb(87, 87, 146)' };
    } if (type === 'tv') {
      return { width: '75px', opacity: 0.7 };
    }
  }
  function ButtonColorTv() {
    if (type === 'movie') {
      return { width: '75px', opacity: 0.7 };
    } if (type === 'tv') {
      return { width: '75px', backgroundColor: 'rgb(87, 87, 146)' };
    }
  }
  return (
    <div className={styles.container}>
      <div
        style={{
          display: 'flex',
        }}
      >

        <Link href="/movie">
          <a href="replace" style={ButtonColorMovie()} className="myButton">
            Movies
          </a>
        </Link>

        <Link href="/tv">
          <a href="replace" style={ButtonColorTv()} className="myButton">
            Series
          </a>
        </Link>

      </div>
      <div
        style={{
          display: 'flex',
        }}
      >
        <input
          style={{ width: '140px', marginLeft: '5px', marginRight: '2px' }}
          className="myButton"
          type="text"
          placeholder="Search"
          onChange={(e) => {
            search(e.target.value);
          }}
        />
      </div>
    </div>
  );
};
export default HeaderButtons;
