import { TITLE_IMG_URL } from "../config";
const Title = () => (
    <a href="/">
      <img 
        className="logo" 
        src={TITLE_IMG_URL}
        alt="logo"
      />
    </a>
);

export const Header = () => {
  return (
      <div className="header">
          <Title />
          <div className="nav-items">
              <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                  <li>Cart</li>
              </ul>
          </div>
      </div>
  );
}

export default Header;