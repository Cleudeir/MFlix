import { useEffect } from 'react';
import Pages from '../../src/components/Pages';
import GetInfo from '../../src/modules/GetInfo';

export async function getStaticProps(context) {
  const type = 'movie';
  const dataGenres = await GetInfo({ type });
  return {
    props: {
      dataGenres,
      type,
    },
    revalidate: 1 * 24 * 60 * 60,
  };
}
const Movies = function Movies({ dataGenres, type }) {
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  let count = 0;
  async function moveSlide() {
    if (count === 0) {
      console.log('movislide');
      await sleep(3 * 1000);
      dataGenres.map((x, i) => {
        const item = document.getElementById(`slider${i}`);
        item.scrollLeft = localStorage.getItem(`slider${i}${type}`);
      });
      count += 1;
    }
  }
  moveSlide();

  return <Pages type={type} dataGenres={dataGenres} />;
};

export default Movies;
