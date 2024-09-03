import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const LogoutButton = ({ esBarraLateralAbierta }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    navigate("/login");
  };

  const links = [
    {
      onClick: handleLogout,
      icon: "bi bi-box-arrow-right",
      label: "Salir",
    },
  ];

  return (
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <button
            onClick={link.onClick}
            className="relative flex items-center justify-start h-10 pl-4 text-sm font-semibold"
          >
            <i className={link.icon}></i>
            <span
              className={`${
                esBarraLateralAbierta ? "ml-4 opacity-100" : "opacity-0"
              } ml-4 text-sm font-semibold transition-opacity duration-600 ease-in-out delay-250`}
            >
              {link.label}
            </span>
            {!esBarraLateralAbierta && (
              <span className="absolute px-2 py-1 text-xs text-white transition-opacity duration-300 bg-black rounded opacity-0 ml-9 whitespace-nowrap group-hover:opacity-100">
                {link.label}
              </span>
            )}
          </button>
        </li>
      ))}
    </ul>
  );
};

LogoutButton.propTypes = {
  esBarraLateralAbierta: PropTypes.bool.isRequired,
};

export default LogoutButton;
