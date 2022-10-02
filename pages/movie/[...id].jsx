import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Link from 'next/link';

import Styles from '../../src/styles/video.module.css';

export default function PlayMovie() {
  const router = useRouter();
  const { id, vid } = router.query;
  const [useIframe, setIframe] = useState(false);

  useEffect(() => {
    if (id) {
      const [imdbId, one, two] = id;

      if (one === undefined && vid === undefined && two === undefined) {
        setIframe(<iframe
          className={Styles.iframe}
          autoPlay
          preload="auto"
          sandbox="allow-scripts  allow-same-origin"
          title="Mflix"
          allowFullScreen
          scrolling="no"
          frameBorder="0"
          src={`https://player.uauflix.online/${imdbId}`}
        />);
      } else {
        setIframe(
          <iframe
            className={Styles.iframe}
            autoPlay
            preload="auto"
            title="Mflix"
            allowFullScreen
            scrolling="no"
            frameBorder="0"
            src={`https://sinalpublico.com/${one}/${two}?vid=${vid}`}
          />,
        );
      }
      localStorage.setItem('lastView_movie', imdbId);
    }
  }, [id]);

  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <Link href="/movie">
          <a href="replace" className="myButton">Voltar</a>
        </Link>
      </div>

      {useIframe && useIframe}
    </div>

  );
}
