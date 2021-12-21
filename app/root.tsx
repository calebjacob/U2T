import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from 'remix';
import type { MetaFunction } from 'remix';
import SocialNav from './components/social-nav';
import resetStyles from './styles/reset.css';
import mainStyles from './styles/main.css';

export const meta: MetaFunction = () => {
  const title = 'Under Two Tables';
  const description =
    'A Golden, Colorado born band inspired by the likes of the Dave Matthews Band, Led Zeppelin, and Frank Sinatra.';

  return {
    title,
    description,
    'og:site_name': title,
    'og:title': title,
    'og:image': 'https://undertwotables.com/images/under-two-tables-social.jpg',
    'og:description': description,
    'og:type': 'website'
  };
};

export function links() {
  return [
    { rel: 'stylesheet', href: resetStyles },
    { rel: 'stylesheet', href: mainStyles },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap' }
  ];
}

export default function App() {
  const currentYear = new Date().getFullYear();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />

        <link rel="icon" href="/favicon.ico" sizes="any"></link>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>

        <Meta />
        <Links />
      </head>

      <body>
        <div className="wrapper">
          <div className="wrapper__content">
            <header className="header">
              <img className="header__logo" src="/images/under-two-tables-logo-clean.svg" alt="Under Two Tables" />

              <SocialNav />
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
