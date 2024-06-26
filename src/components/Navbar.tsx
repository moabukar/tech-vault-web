import ToggleThemeButton from "./ToggleThemeButton";

function Navbar() {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-md"
          >
            <a
              href="https://github.com/moabukar/tech-vault"
              target="_blank"
              className="cursor-pointer hover:bg-gray-700 transition-all 300ms rounded-md text-start text-primary font-medium px-2"
            >
              About
            </a>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a href="#" className="btn btn-ghost text-lg sm:text-xl">
          Tech Vault Web
        </a>
      </div>
      <div className="navbar-end">
        <ToggleThemeButton />
      </div>
    </div>
  );
}

export default Navbar;
