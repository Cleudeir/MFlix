import Pages from '../../src/components/Pages';
import GetInfo from '../../src/modules/GetInfo';

export async function getStaticProps(context) {
  const type = 'tv';
  const dataGenres = await GetInfo({ type });
  return {
    props: {
      dataGenres,
      type,
    },
    revalidate: 1 * 24 * 60 * 60,
  };
}
const Tv = function Tv({ dataGenres, type }) {
  console.log(dataGenres);
  return (
    <Pages type={type} dataGenres={dataGenres} />
  );
};
export default Tv;
