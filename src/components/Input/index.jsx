import Styles from "./Input.module.css";

const Input = ({ placeholder, type = "text", value, onChange, onKeyDown }) => {
  return (
    <input
      className={Styles.input}
      id="input"
      placeholder={placeholder}
      type={type}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
};

export default Input;
