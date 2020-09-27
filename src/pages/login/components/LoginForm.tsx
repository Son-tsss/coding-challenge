import React, {useCallback, useEffect, useState} from 'react';
import TextField from "../../../components/TextField";
import Button from "../../../components/Button";
import useAppStateSelector from "../../../hooks/useAppStateSelector";
import {loginUser} from "../store/loginActions"
import bem from "bem-css-modules";
import styles from "./LoginForm.module.scss";
import useBindActionCreators from "../../../hooks/useBindActionCreators";

const block = bem(styles);

const LoginForm = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const actions = useBindActionCreators({loginUser});

  const {error} = useAppStateSelector(({login}) => login);

  const handleLoginClick = () => {
    actions.loginUser({userName, password});
    setUserName("");
    setPassword("");
  };

  return (
    <>
      {error && (
        <div className={block('error')}>
          <span>{error}</span>
        </div>
      )
      }
      <TextField autoFocus className={block("text-field")} placeholder="Login" value={userName} onChange={setUserName}/>
      <TextField className={block("text-field")} placeholder="Password" value={password} isPassword
                 onChange={setPassword}/>
      <div className={block("login-button")}>
        <Button onClick={handleLoginClick} value="Login"/>
      </div>
    </>
  )
};
export default LoginForm;