export default function Index() {
  const currentYear = new Date().getFullYear();

  return (
    <div>
      <section>
        <div className="container">
          <div className="center">
            <img className="logo" src="/images/under-two-tables-logo.svg" alt="Under Two Tables" />

            <h1 className="title title--1">Under Two Tables</h1>

            <p>Hello there!</p>
          </div>

          <hr />

          <iframe
            title="Under Two Tables - Playlist"
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/311904562&color=%23000000&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
          ></iframe>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="split">
            <div>
              <h3 className="title title--3">Biography</h3>

              <p>
                Under Two Tables (U2T) is a Colorado based band inspired by the likes of Dave Matthews, Led Zeppelin,
                and Frank Sinatra. Offering a blend of rock, alternative-pop, and jazz, the band's sound encompasses a
                wide variety of musical flavors.
              </p>

              <p>
                The fusion of a classic rock electric guitarist (Cody Sickler), a jazz-inspired saxophonist (Matthew
                Glazier), an instrumentally-diverse bassist (Ryan Langewisch), a rhythm-heavy acoustic guitarist
                (Kameron Kincade), and a modern rock drummer (Caleb Jacob) not only gives the band their unique sound,
                but also provides a unique perspective on the arrangement and composition of their music.
              </p>
            </div>

            <div>
              <h3 className="title title--3">Contact Us</h3>

              <p>
                The band regularly performs at local venues in the Denver area, and continues to write original music.
                For more information, or to book Under Two Tables, shoot us an email:
              </p>

              <a href="mailto:contact.under.two.tables@gmail.com" className="button" directive-contact-us>
                Send Email
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="split">
            <p>&copy;{currentYear} Under Two Tables. All rights reserved.</p>

            <ul id="social" className="icon-nav">
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
            </ul>

            <span id="contact-us-cta" className="button button--dark" directive-contact-us>
              Contact Us
            </span>
          </div>

          {/* <img
            className="logo logo--small"
            src="images/under-two-tables-logo.svg?31f4f7966eb5c23e"
            alt="Under Two Tables"
          /> */}
        </div>
      </footer>
    </div>
  );
}
