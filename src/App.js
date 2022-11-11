import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebookSquare,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

export default function App() {
  return (
    <div className="App">
      <header className="header">
        <img className="logo" src="/images/logo.svg" alt="" />
        <h1>A history of everything you copy</h1>
        <p>
          Clipboard allows you to track and organize everything you copy.
          Instantly access your clipboard on all your devices.
        </p>
        <button className="button button-primary">Download for Mac</button>
        <button className="button button-secondary">Download for iOS</button>
      </header>

      <main>
        <section>
          <article>
            <h2>Keep track of your snippets</h2>
            <p>
              Clipboard instantly stores any item you copy in the cloud, meaning
              you can access your snippets immediately on all your devices. Our
              Mac and iOS apps will help you organize everything.
            </p>
          </article>

          <div className="has-image">
            <img src="/images/image-computer.png" alt="" />
            <article>
              <h2>Quick Search</h2>
              <p>
                Easily search your snippets by content, category, web address,
                application, and more.
              </p>
            </article>

            <article>
              <h2>iCloud Sync</h2>
              <p>Instantly saves and syncs snippets across all your devices.</p>
            </article>

            <article>
              <h2>Complete History</h2>
              <p>
                Retrieve any snippets from the first moment you started using
                the app.
              </p>
            </article>
          </div>

          <article>
            <h2>Access Clipboard Anywhere</h2>
            <p>
              Whether you’re on the go, or at your computer, you can access all
              your Clipboard snippets in a few simple clicks.
            </p>
          </article>

          <img src="/images/image-devices.png" alt="" />

          <article>
            <h2>Supercharge your workflow</h2>
            <p>We’ve got the tools to boost your productivity.</p>
          </article>

          <div className="features">
            <article>
              <img src="/images/icon-blacklist.svg" alt="" />
              <h2>Create Blacklists</h2>
              <p>
                Ensure sensitive information never makes its way to your
                clipboard by excluding certain sources.
              </p>
            </article>

            <article>
              <img src="/images/icon-text.svg" alt="" />
              <h2>Plain text snippets</h2>
              <p>
                Remove unwanted formatting from copied text for a consistent
                look.
              </p>
            </article>

            <article>
              <img src="/images/icon-preview.svg" alt="" />
              <h2>Sneak preview</h2>
              <p>
                Quick preview of all snippets on your Clipboard for easy access.
              </p>
            </article>
          </div>
        </section>

        <section className="sponsors">
          <img src="/images/logo-google.png" alt="Google" />
          <img src="/images/logo-ibm.png" alt="IBM" />
          <img src="/images/logo-microsoft.png" alt="Microsoft" />
          <img src="/images/logo-hp.png" alt="Hewlett Packard" />
          <img src="/images/logo-vector-graphics.png" alt="Vector Graphics" />
        </section>

        <section>
          <h2>Clipboard for iOS and Mac OS</h2>
          <p>
            Available for free on the App Store. Download for Mac or iOS, sync
            with iCloud and you’re ready to start adding to your clipboard.
          </p>
          <button className="button button-primary">Download for iOS</button>
          <button className="button button-secondary">Download for Mac</button>
        </section>
      </main>

      <footer className="footer">
        <img className="logo" src="images/logo.svg" alt="" />
        <a href="/">FAQs</a>
        <a href="/">Contact Us </a>
        <a href="/">Privacy Policy </a>
        <a href="/">Press Kit </a>
        <a href="/">Install Guide</a>

        <div className="socials">
          <FontAwesomeIcon
            icon={faFacebookSquare}
            style={{ color: "#555", fontSize: "26px" }}
          />
          <FontAwesomeIcon
            icon={faTwitter}
            style={{ color: "#555", fontSize: "26px" }}
          />
          <FontAwesomeIcon
            icon={faInstagram}
            style={{ color: "#555", fontSize: "26px" }}
          />
        </div>
      </footer>
    </div>
  );
}
