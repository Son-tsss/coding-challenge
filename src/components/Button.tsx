import React, {useCallback} from "react";
import cn from "classnames";
import bem from "bem-css-modules";
import styles from "./Button.module.scss";

const block = bem(styles);

export enum ButtonTypes {
  primary = "primary",
  secondary = "secondary",
}

type ButtonProps = {
  className?: string;
  type?: ButtonTypes;
  value?: string;
  icon?: React.ReactElement;
  onClick: () => void;
  disabled?: boolean;
}

export default function Button(props:ButtonProps) {
  const { className, type = ButtonTypes.primary, value="", icon, onClick, disabled = false} = props;
  const classes = cn(block({ [type]: true, disabled }), className);

  const handleClick = useCallback(() => {
    if(!disabled) {
      onClick()
    }
  }, [onClick, disabled]);

  return (
    <div
      className={classes}
      onClick={handleClick}
    >
      {icon && <div className={block("icon")}>{icon}</div>}
      <span>{value}</span>
    </div>
  );
}