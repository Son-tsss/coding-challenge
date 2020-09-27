import {useSelector} from 'react-redux';
import {AppState} from '../store/store.types';

const useAppStateSelector = <TSelected = unknown>(selector: (state: AppState) => TSelected): TSelected => {
  return useSelector<AppState, TSelected>(selector);
};

export default useAppStateSelector;