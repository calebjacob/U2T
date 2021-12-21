import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix';
import type { MetaFunction } from 'remix';
import resetStyles from './styles/reset.css';
import mainStyles from './styles/main.css';

export const meta: MetaFunction = () => {
  return { title: 'Under Two Tables' };
};

export function links() {
  return [
    { rel: 'stylesheet', href: resetStyles },
    { rel: 'stylesheet', href: mainStyles }
  ];
}

export default function App() {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <meta property="og:site_name" content="Under Two Tables" />
        <meta property="og:title" content="Under Two Tables" />
        <meta property="og:image" content="https://undertwotables.com/images/under-two-tables-social.jpg" />
        <meta
          property="og:description"
          content="A Golden, Colorado born band inspired by the likes of the Dave Matthews Band, Led Zeppelin, and Frank Sinatra."
        />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/images/favicon.ico" sizes="any"></link>
        <link rel="icon" href="/images/favicon.svg" type="image/svg+xml"></link>

        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>

        <Meta />
        <Links />
      </head>

      <body>
        <div className="wrapper">
          <div className="wrapper__content">
            <header className="header">
              <img className="header__logo" src="/images/under-two-tables-logo-clean.svg" alt="Under Two Tables" />

              <ul className="icon-nav">
                <li>
                  <a href="https://www.facebook.com/UnderTwoTables" target="_blank" rel="noreferrer">
                    <img src="/images/icons/facebook.svg" alt="Find us on Facebook" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/UnderTwoTables" target="_blank" rel="noreferrer">
                    <img src="/images/icons/twitter.svg" alt="Find us on Twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com/undertwotables" target="_blank" rel="noreferrer">
                    <img src="/images/icons/instagram.svg" alt="Find us on Instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/user/UnderTwoTables" target="_blank" rel="noreferrer">
                    <img src="/images/icons/youtube.svg" alt="Find us on YouTube" />
                  </a>
                </li>
                <li>
                  <a href="https://open.spotify.com/artist/2PxOhe3k2gsBmXOk38u7R1" target="_blank" rel="noreferrer">
                    <img src="/images/icons/spotify.svg" alt="Find us on Spotify" />
                  </a>
                </li>
              </ul>
            </header>

            <Outlet />
            <ScrollRestoration />
            <Scripts />
            {process.env.NODE_ENV === 'development' && <LiveReload />}
          </div>

          <footer>
            <div className="container center">
              <p className="small">&copy;{currentYear} Under Two Tables. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
