function Button(props) {
  return (
      <button
          onClick={() => {
              props.onclick && props.onclick();
          }}
          className={`btn ${props.className}`}
      >
          {props.children}
      </button>
  );
}

export default Button;