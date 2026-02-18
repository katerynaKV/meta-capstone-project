import "./Page.css";

export function Page({ children, className = "", ...rest }) {
  return (
    <main className={`Page ${className}`} {...rest}>
      {children}
    </main>
  );
}
