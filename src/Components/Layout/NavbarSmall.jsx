const NavbarSmall = () => {
  return (
    <div className="d-flex bd-highlight mb-3">
      <div className="ml-4 bd-highlight text-white">TV SHOWS</div>
      <div className="ml-4 bd-highlight text-white">
        <div className="btn-group">
          <button
            type="button"
            className="btn net-bg-color text-white btn-sm border-light border-5 dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Genres
          </button>
          <div className="dropdown-menu">
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="#">
              Separated link
            </a>
          </div>
        </div>
      </div>
      <div className="ml-auto p-2 mr-3 mt-n2 bd-highlight text-white">
        <div className="ba">
          <i className="fas fa-align-left"></i>
          <i className="fas fa-border-all"></i>
        </div>
      </div>
    </div>
  );
};

export default NavbarSmall;
