import React from "react";

// type Props = {};

const Navbar = () => {
  const siteName = "early-bird.dev";

  return (
    <nav>
      <div className="fluid-container">
        <div className="d-flex justify-content-between py-4">
          <div className="text-secondary h1 rounded p-2 m-0">
            <a className="text-light-yellow" href="#">
              {siteName}
            </a>
          </div>

          <div>
            <button>Log in</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
