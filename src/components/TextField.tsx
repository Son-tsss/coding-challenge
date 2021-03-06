import React, {useCallback} from "react";
import cn from 'classnames';
import bem from "bem-css-modules";
import styles from "./TextField.module.scss";

const block = bem(styles);

export enum TextFieldTypes {
  text="text",
  password="password"
}

type TextFieldProps = {
  className?: string;
  type?: TextFieldTypes;
  value: string;
  placeholder: string;
  onChange?: (value: string) => void;
  onFocus?: () => {};
  onFocusOut?: () => {};
  autoFocus?: boolean;
  onEnterPress?: () => void;
}

export default function TextField(props: TextFieldProps) {
  const {
    className,
    type = TextFieldTypes.text,
    value = "",
    placeholder = "",
    onChange,
    onFocus,
    onFocusOut,
    autoFocus = false,
    onEnterPress
  } = props;

  const handleValueChange = useCallback(event => {
    onChange(event.target.value);
  }, [onChange]);

  const handleEnterKeyPress = useCallback(({keyCode}) => {
    if (keyCode === 13 && onEnterPress)
      onEnterPress()
  }, [onEnterPress]);

  return (
    <div className={cn(block(), className)}>
      <input
        className={block("input")}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleValueChange}
        onFocus={onFocus}
        onBlur={onFocusOut}
        autoFocus={autoFocus}
        onKeyDown={handleEnterKeyPress}
      />
    </div>
  );
}
