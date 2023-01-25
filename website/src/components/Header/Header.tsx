import React from "react";

export const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-testid="header-page"
    >
      <div className="container">
        <a className="navbar-brand" href="/">
          Nestor Gutierrez
        </a>
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Aptitudes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Experiencia
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Estudios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Intereses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Contacto
              </a>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
            />
            <label className="form-check-label">Español</label>
          </div>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
  // return <div>Header</div>;
};
