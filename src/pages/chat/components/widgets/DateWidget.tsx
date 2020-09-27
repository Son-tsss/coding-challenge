import React from 'react';
import moment from 'moment';

import bem from "bem-css-modules";
import styles from "./DateWidget.module.scss";
import Button from "../../../../components/Button";

const block = bem(styles);

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

type DateWidgetProps = {
  date: string;
  onSelect: (message: string) => void
}

const DateWidget = ({date, onSelect}: DateWidgetProps) => {
  const momentDate = moment(date);
  const weekdayIndex = momentDate.day() - 1;

  const orderedWeekdays = [...weekdays.slice(weekdayIndex), ...weekdays.slice(0, weekdayIndex)];

  return (
    <div className={block()}>
      <ul>
        {orderedWeekdays.map(weekday => {
          const handleClick = () => {
            onSelect(weekday);
          };

          return (
            <li key={weekday} className={block("weekday")}>
              <Button className={block("button")} onClick={handleClick} value={weekday} />
            </li>
          )
        })}
      </ul>
    </div>
  )
};

export default DateWidget;