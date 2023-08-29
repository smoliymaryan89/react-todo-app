import PropTypes from "prop-types";

const Button = ({ children, ...otherProps }) => {
  return (
    <button type="button" {...otherProps}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  otherProps: PropTypes.shape({
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.bool.isRequired,
  }),
};

export default Button;
