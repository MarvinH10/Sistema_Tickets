import PropTypes from "prop-types";
import { Navigation } from "../components/Navigation";

const MainLayout = ({
  children,
  esBarraLateralAbierta,
  alternarBarraLateral,
  margenIzquierdo,
}) => {
  return (
    <div className="flex h-screen">
      <div
        className="fixed top-0 left-0 z-10 flex items-center justify-between w-full h-12 transition-all duration-300 ease-in-out bg-turquesa-ticket"
        style={{ marginLeft: margenIzquierdo }}
      >
        <button
          onClick={alternarBarraLateral}
          className="ml-4 text-white focus:outline-none"
        >
          {esBarraLateralAbierta ? "✕" : "☰"}
        </button>
      </div>
      <Navigation
        esBarraLateralAbierta={esBarraLateralAbierta}
        alternarBarraLateral={alternarBarraLateral}
      />
      <div
        className="flex-grow p-4 mt-12 transition-all duration-300 ease-in-out"
        style={{ marginLeft: margenIzquierdo }}
      >
        {children}
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  esBarraLateralAbierta: PropTypes.bool.isRequired,
  alternarBarraLateral: PropTypes.func.isRequired,
  margenIzquierdo: PropTypes.string.isRequired,
};

export default MainLayout;
