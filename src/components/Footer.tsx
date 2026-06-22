import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <Logo height={36} />
          <p className="footer-tagline">
            Tucson&apos;s destination for cold-pressed juice, superfood
            smoothies, and daily wellness.
          </p>
        </div>

        <div className="footer-info">
          <span className="footer-info-label">Hours</span>
          <p className="footer-info-value">
            Open Daily
            <br />
            7:00 AM &ndash; 7:00 PM
          </p>
          <span className="footer-info-label" style={{ marginTop: '0.75rem' }}>
            Phone
          </span>
          <p className="footer-info-value">
            <a href="tel:+15205550142">(520) 555-0142</a>
          </p>
        </div>

        <div className="footer-info">
          <span className="footer-info-label">Location</span>
          <p className="footer-info-value">
            742 N 4th Ave
            <br />
            Tucson, AZ 85705
          </p>
          <span className="footer-info-label" style={{ marginTop: '0.75rem' }}>
            Follow Along
          </span>
          <p className="footer-info-value">
            <a
              href="https://instagram.com/thejuicestandard"
              target="_blank"
              rel="noopener noreferrer"
            >
              @thejuicestandard
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} The Juice Standard. All rights
        reserved.
      </div>
    </footer>
  );
}
