import Styles from "./Button.module.css";

const Button = ({
  label,
  variant = "primary",
  iconOnly = false,
  icon: Icon,
  onClick
}) => {
  const btnClass = [
    iconOnly ? Styles.iconButton : Styles.button,
    Styles[variant],
  ].join(" ");

  return (
    <button className={btnClass} onClick={onClick}>
      {Icon && <Icon size={"var(--icon-size-lg)"} />}
      {!iconOnly && label}
    </button>
  );
};

export default Button;
