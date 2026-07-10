import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <span>© {new Date().getFullYear()} Vivek G</span>
        <span>Designed &amp; built in Bengaluru</span>
      </div>
    </footer>
  );
}
