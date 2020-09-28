import DateWidgetTestable from './DateWidget.testable';

describe ('DateWidget', () => {
  const onSelect = jest.fn(() => {});

  it("should render all weekdays starting from monday if monday date is passed", () => {
    const props = {
      date: "2020-10-05T13:21:10.050Z",
      onSelect
    };

    const testable = new DateWidgetTestable(props);
    testable.assertWeekdaysCount();

    const expectedWeekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

    expectedWeekdays.forEach((weekday, i) => testable.assertWeekdayName(i, weekday));
  });

  it("should render all weekdays starting from tuesday if tuesday date is passed", () => {
    const props = {
      date: "2020-10-06T13:21:10.050Z",
      onSelect
    };

    const testable = new DateWidgetTestable(props);
    testable.assertWeekdaysCount();

    const expectedWeekdays = ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday"];

    expectedWeekdays.forEach((weekday, i) => testable.assertWeekdayName(i, weekday));
  });

  it("should render all weekdays starting from friday if friday date is passed", () => {
    const props = {
      date: "2020-10-09T13:21:10.050Z",
      onSelect
    };

    const testable = new DateWidgetTestable(props);
    testable.assertWeekdaysCount();

    const expectedWeekdays = ["Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"];

    expectedWeekdays.forEach((weekday, i) => testable.assertWeekdayName(i, weekday));
  });

  it("should render all weekdays starting from sunday if sunday date is passed", () => {
    const props = {
      date: "2020-10-11T13:21:10.050Z",
      onSelect
    };

    const testable = new DateWidgetTestable(props);
    testable.assertWeekdaysCount();

    const expectedWeekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    expectedWeekdays.forEach((weekday, i) => testable.assertWeekdayName(i, weekday));
  });
});
