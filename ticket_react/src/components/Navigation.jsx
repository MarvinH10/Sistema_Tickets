import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "bootstrap-icons/font/bootstrap-icons.css";
import LogoutButton from "./LogoutButton";

export function Navigation({ esBarraLateralAbierta }) {
  const links = [
    { to: "/", icon: "bi-speedometer2", label: "Dashboard" },
    { to: "/tickets", icon: "bi-ticket-perforated", label: "Tickets" },
  ];

  return (
    <div
      className={`${
        esBarraLateralAbierta ? "w-48" : "w-12"
      } bg-gris-oscuro-ticket h-full text-white transition-all duration-300 ease-in-out flex flex-col fixed top-0 left-0`}
    >
      <div className="flex flex-col h-12 bg-turquesa-ticket">
        <div className="flex items-center justify-between p-4">
          {/* ACA IRA ALGO COMO UN LOGO */}
        </div>
      </div>
      <nav className="flex-grow">
        <ul className="mt-5">
          {links.map(({ to, icon, label }) => (
            <Link
              key={to}
              to={to}
              className="relative flex items-center pt-2 pb-2 pl-4 hover:bg-gray-700 group"
            >
              <li className="flex items-center">
                <i className={`cursor-pointer bi ${icon}`}></i>
                <span
                  className={`${
                    esBarraLateralAbierta ? "ml-4 opacity-100" : "opacity-0"
                  } ml-4 text-sm font-semibold transition-opacity duration-600 ease-in-out delay-250`}
                >
                  {label}
                </span>
                {!esBarraLateralAbierta && (
                  <span className="absolute px-2 py-1 ml-1 text-xs text-white transition-opacity duration-300 bg-black rounded opacity-0 left-full whitespace-nowrap group-hover:opacity-100">
                    {label}
                  </span>
                )}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hover:bg-gray-700 group">
        <LogoutButton esBarraLateralAbierta={esBarraLateralAbierta} />
      </div>
    </div>
  );
}

Navigation.propTypes = {
  esBarraLateralAbierta: PropTypes.bool.isRequired,
};
