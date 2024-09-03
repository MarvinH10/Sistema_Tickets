import PropTypes from "prop-types";

const AuthLayout = ({ children }) => {
  return <div className="bg-white p-9">{children}</div>;
};

AuthLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AuthLayout;
