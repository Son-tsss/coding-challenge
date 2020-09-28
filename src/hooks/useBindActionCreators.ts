import {useMemo} from 'react';
import {useDispatch} from 'react-redux';
import {ActionCreatorsMapObject, bindActionCreators} from 'redux'

const useBindActionCreators = <A, M extends ActionCreatorsMapObject<A>>(actionCreators: M): M => {
  const dispatch = useDispatch();

  return useMemo(
    () => bindActionCreators(actionCreators, dispatch),
    [Object.keys(actionCreators)]
  );
};

export default useBindActionCreators;
