const Button = ({ children, ...otherProps }) => {
  return (
    <button type="button" {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
