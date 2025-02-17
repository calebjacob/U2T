export default function Index() {
  return (
    <div>
      <section>
        <div className="container">
          <div className="center">
            <img className="logo" src="/images/under-two-tables-logo.svg" alt="Under Two Tables" />

            <h1 className="band-title">
              <span>Under Two</span> Tables
            </h1>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="blocks">
            <div className="iframe-wrapper">
              <div className="loading" />
              <iframe
                title="Under Two Tables - Playlist"
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/album/7k9HtTPrQ29LSeD4IpMDfr?utm_source=generator&theme=0"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>

            <div className="iframe-wrapper instagram">
              <blockquote
                className="instagram-media"
                data-instgrm-permalink="https://www.instagram.com/undertwotables/?utm_source=ig_embed&amp;utm_campaign=loading"
                data-instgrm-version="14"
              >
                <div className="loading" />
              </blockquote>
              <script async src="//www.instagram.com/embed.js"></script>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="split">
            <div>
              <h3 className="title title--2">Biography</h3>

              <p>
                Under Two Tables (U2T) is a Colorado based band inspired by the likes of Dave Matthews and Led Zeppelin.
                Offering a blend of rock, alternative-pop, and jazz, the band's sound encompasses a wide variety of
                musical flavors.
              </p>

              <p>
                The fusion of a classic rock electric guitarist (Cody Sickler), a jazz-inspired saxophonist (Matthew
                Glazier), an instrumentally-diverse bassist (Ryan Langewisch), a rhythm-heavy acoustic guitarist
                (Kameron Kincade), and a modern rock drummer (Caleb Jacob) not only gives the band their unique sound,
                but also provides a unique perspective on the arrangement and composition of their music.
              </p>

              <hr />

              <h3 className="title title--2">Contact Us</h3>

              <p>
                The band regularly performs at local venues in the Denver area, and continues to write original music.
                For more information, or to book Under Two Tables, shoot us an email:
              </p>

              <p>
                <a href="mailto:contact.under.two.tables@gmail.com" className="link">
                  contact.under.two.tables@gmail.com
                </a>
              </p>
            </div>

            <div>
              <img src="/images/band.jpg" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
