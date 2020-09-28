import React from "react";
import {shallow} from 'enzyme';
import DateWidget from '../../src/pages/chat/components/widgets/DateWidget';
import Button from "../../src/components/Button";

class DateWidgetTestable {
  rendered;

  constructor(props) {
      this.rendered = shallow(<DateWidget {...props} />);
  }

  get Weekdays() {
    return this.rendered.find('[data-test-weekday]');
  }

  getWeekdayAtIndex (i) {
    return this.Weekdays.at(i);
  }

  assertWeekdaysCount() {
    expect(this.Weekdays.length).toBe(7);
  }

  assertWeekdayName(i, name) {
    expect(this.getWeekdayAtIndex(i).find(Button).props().value).toBe(name);
  }
}

export default DateWidgetTestable;

