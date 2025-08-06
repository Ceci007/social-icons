import { FaBluesky, FaXTwitter, FaDribbble } from "react-icons/fa6";
import { FaYoutube, FaInstagram, FaBehance } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Social Icons Hover Effect</h1>
      <h2>Follow for front-end development tips &amp; tricks</h2>

      <ul class="social">
        <li data-tooltip="Bluesky" style={{"--bg": "#3a83f7"}}>
          <Link to="https://bsky.app/profile/optimisticweb.com" aria-label="Bluesky">
            <FaBluesky />
          </Link>
        </li>

        <li data-tooltip="Twitter" style={{"--bg": "#101419"}}>
          <Link to="https://twitter.com/optimisticweb" aria-label="Twitter">
            <FaXTwitter />
          </Link>
        </li>

        <li data-tooltip="YouTube" style={{"--bg": "#ff0000"}}>
          <Link to="https://www.youtube.com/@optimisticweb" aria-label="YouTube">
            <FaYoutube />
          </Link>
        </li>

        <li data-tooltip="Instagram" style={{"--bg": "linear-gradient(-45deg, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5)"}}>
          <Link to="https://www.instagram.com/optimisticweb" aria-label="Instagram">
            <FaInstagram />
          </Link>
        </li>

        <li data-tooltip="Behance" style={{"--bg": "#2356f6"}}>
          <Link to="/" aria-label="Behance">
            <FaBehance />
          </Link>
        </li>

        <li data-tooltip="Dribbble" style={{"--bg": "#ea4c89"}}>
          <Link to="/" aria-label="Dribbble">
            <FaDribbble />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;