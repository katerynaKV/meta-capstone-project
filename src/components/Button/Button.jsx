import "./Button.css";

export function Button({ children, className = "", ...rest }) {
  return (
    <button className={`Button ${className}`} {...rest}>
      {children}
    </button>
  );
}
