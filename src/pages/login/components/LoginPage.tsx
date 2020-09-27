import React, {useState} from 'react';
import BigLogo from "../../../components/logo/BigLogo";
import LoginForm from "./LoginForm";
import bem from "bem-css-modules";
import styles from "./LoginPage.module.scss";

const block = bem(styles);

const LoginPage = () => {
  const [login, setLogin] = useState<string>("");
  return (
    <div className={block()}>
     <BigLogo />
     <span className={block('title')}>
       Please enter your login and password
     </span>
      <LoginForm />
    </div>
  )
};

export default LoginPage;