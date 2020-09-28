import React from 'react';

import bem from "bem-css-modules";
import styles from "./RateWidget.module.scss";
import {StarIcon} from "../../../../components/icons/Icons";

const block = bem(styles);

function arrayFromRange(start, end) {
  return Array(end - start + 1)
    .fill(1)
    .map((_, i) => start + i);
}

type RateWidgetProps = {
  range: [number, number],
  onSelect: (message: string) => void
}

const RateWidget = ({range, onSelect}: RateWidgetProps) => {
  const rates = arrayFromRange(...range);

  return (
    <div className={block()}>
      {rates.map(rate => {
        const handleClick = () => {
          onSelect(rate)
        };

        return (
          <div key={rate} onClick={handleClick} className={block("rate")}>
            <StarIcon className={block("rate-star")}/>
            <div className={block("rate-number")}>{rate}</div>
          </div>
        )

      })}
    </div>
  )
};

export default RateWidget;
