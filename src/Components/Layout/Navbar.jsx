import logo from "../../..//src/netflix_logo.png";
import avatar from "../../..//src/avatar.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg net-bg-color">
      <a href="#">
        {" "}
        <img src={logo} alt="" height="40" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarScroll"
        aria-controls="navbarScroll"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon "></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarScroll">
        <ul
          className="navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll"
          style={{ maxHeight: "100px" }}
        >
          <li className="nav-item active">
            <a className="nav-link text-white" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white font-weight-bold" href="#">
              Tv Shows<span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link text-white" href="#" aria-expanded="false">
              Movies
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              Recently Added
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-white" href="#">
              My Last
            </a>
          </li>
        </ul>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-search text-white font-weight-bold mr-2 "
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
        <form className="d-flex">
          <input
            type="search"
            className="form-control mr-2 net-bg-color border-dark border-0 text-white bg active"
            placeholder="Kids"
            size="1"
            aria-label="Search"
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-search text-white font-weight-bold mt-2 ml-n3 "
            viewBox="0 0 16 16"
          >
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
          </svg>
          <div className="collapse navbar-collapse" id="navbar-list-4">
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img src={avatar} width="30" height="30" className="" />
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="#">
                    Dashboard
                  </a>
                  <a className="dropdown-item" href="#">
                    Edit Profile
                  </a>
                  <a className="dropdown-item" href="#">
                    Log Out
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
