import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../../navigations/AppNavigator';

const router = AppNavigator.router;
const mainNavAction = router.getActionForPathAndParams('AuthStack');
const initialNavState = router.getStateForAction(mainNavAction);

const navReducer = (state = initialNavState, action) => {
    let nextState;
    switch (action.type) {
      default:
      {
        nextState = AppNavigator.router.getStateForAction(action, state);
        break;
      }
    }
    return nextState || state;
  }

export default navReducer;