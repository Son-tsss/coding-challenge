import React from 'react';

import bem from "bem-css-modules";
import styles from "./CompleteWidget.module.scss";
import Button from "../../../../components/Button";

const block = bem(styles);

type CompleteWidgetProps = {
  options: [string, string];
  onSelect: (message: string) => void
}

const CompleteWidget = ({options, onSelect}: CompleteWidgetProps) => {
  return (
    <div className={block()}>
      {options.map(option => {
        const handleClick = () => {
          onSelect(option);
        };
        return (
          <Button key={option} className={block("button")} onClick={handleClick} value={option}/>
        )
      })}
    </div>
  )
};

export default CompleteWidget;
