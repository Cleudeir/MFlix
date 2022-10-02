export default function Url(x, type) {
  let url;
  if (type === 'movie') {
    if (x.url) {
      url = `/${type}/${x.imdb_id}/${x.url}`;
    } else {
      url = `/${type}/${x.imdb_id}`;
    }
    return url;
  }
  if (type === 'tv') {
    url = `/${type}/${x.seasons}/${x.imdb_id}`;
    return url;
  }
  return false;
}
