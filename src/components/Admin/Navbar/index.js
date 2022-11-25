import './navbar.scss';
const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse menu-top"
            id="navbarSupportedContent"
          >
            <input
              type="search"
              className="form-control search-input"
              placeholder="Search"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div className="user-dropdown">
              <div className="btn-group">
                <p
                  className="user-name"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Nguyen Quang Hieu <i className="fa-solid fa-user"></i>
                </p>

                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
}
export default Navbar;
