import React from 'react';
import FullLogo from './logo/FullLogo';
import useBindActionCreators from "../hooks/useBindActionCreators";
import useAppStateSelector from "../hooks/useAppStateSelector";
import {LogoutIcon} from "./icons/Icons";
import IconButton from "./IconButton";
import {logoutUser} from "../pages/login/store/loginActions";
import bem from "bem-css-modules";

import styles from "./AppHeader.module.scss";

const block = bem(styles);

const AppHeader = () => {
  const {user, isLoggedIn} = useAppStateSelector(x => x.login);
  const actions = useBindActionCreators({logoutUser});

  return (
    <div className={block()}>
      <div className={block('container')}>
        <a href="https://www.ottonova.de/" className={block("logo")}>
          <FullLogo/>
        </a>
        {isLoggedIn && (
          <div className={block("user")}>
            <span className={block("user-name")}>
              {user.name}
            </span>
            <div className={block("logout")}>
              <IconButton icon={<LogoutIcon/>} onClick={actions.logoutUser}/>
            </div>
          </div>
        )}
      </div>
    </div>
  )
};

export default AppHeader;
