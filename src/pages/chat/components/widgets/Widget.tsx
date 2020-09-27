import React from 'react'
import useAppStateSelector from "../../../../hooks/useAppStateSelector";
import useSocket from "../../hooks/useSocket";
import {WidgetTypes} from "../../store/chat.types";
import DateWidget from "./DateWidget";
import RateWidget from "./RateWidget";
import CompleteWidget from "./CompleteWidget";

const Widget = () => {
  const {currentWidget} = useAppStateSelector(({chat}) => chat);
  const actions = useSocket();

  if(!currentWidget) return null;

  const handleSelect = (message) => {
    actions.sendMessage(message);
  };

  return (
    <>
      {currentWidget.type === WidgetTypes.date && <DateWidget date={currentWidget.data} onSelect={handleSelect} />}
      {currentWidget.type === WidgetTypes.rate && <RateWidget range={currentWidget.data} onSelect={handleSelect} />}
      {currentWidget.type === WidgetTypes.complete && <CompleteWidget options={currentWidget.data} onSelect={handleSelect} />}
    </>
  )
};

export default Widget;