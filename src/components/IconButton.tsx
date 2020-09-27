import React, {useCallback} from "react";
import cn from "classnames";
import bem from "bem-css-modules";
import styles from "./IconButton.module.scss";

const block = bem(styles);

type IconButtonProps = {
  className?: string;
  icon: React.ReactElement;
  onClick: () => void;
  disabled?: boolean;
}

export default function IconButton(props:IconButtonProps) {
  const { className, icon, onClick, disabled = false} = props;
  const classes = cn(block({disabled}), className);

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
      {icon}
    </div>
  );
}