import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="header">
      <div className="social-icons">
        <FaFacebook className="icon" />
        <FaInstagram className="icon" />
        <FaTwitter className="icon" />
      </div>
      <div className="logo">DevNews</div>
      <div className="search-box">
        <input type="text" placeholder="Search..." />
      </div>
    </header>
  );
}
