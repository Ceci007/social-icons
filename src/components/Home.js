import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube, FaInstagram, FaFacebook, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div class="icons-container">
      <Link to="/" className="social-icon" aria-label="Facebook">
        <FaFacebook className="icon" />
      </Link>
      <Link href="/" className="social-icon" aria-label="LinkedIn">
        <FaLinkedinIn className="icon" />
      </Link>
      <Link href="/" className="social-icon" aria-label="Youtube">
        <FaYoutube className="icon" />
      </Link>
      <Link href="/" className="social-icon" aria-label="Twitter">
        <FaXTwitter className="icon" />
      </Link>
      <Link href="/" className="social-icon" aria-label="GitHub">
        <FaGithub className="icon" />
      </Link>
      <Link href="/" className="social-icon" aria-label="Instagram">
        <FaInstagram className="icon" />
      </Link>
    </div>
  );
}

export default Home;