import { Fragment, useState } from "react";
import FormInput from "../form-input/form-input.component";
import "../sign-up-form/sign-up-form.styles.scss";
import { NavigationSignIn } from "./sign-in-form.styles";
import Button, { BUTTON_TYPES_CLASSES } from "../button/button.component";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { Link } from "react-router-dom";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/user-not-found":
          alert("Пользователя с таким email не существует");
          break;
        case "auth/wrong-password":
          alert("Введите правильный пароль");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  return (
    <div className="sign-up-container">
      <h1 className="statusAccount">Войти</h1>
      <span>Войти с email и паролем</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Пароль"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <NavigationSignIn>
          <Button type="submit">Войти</Button>
          <Button
            type="button"
            onClick={signInWithGoogle}
            buttonType={BUTTON_TYPES_CLASSES.google}
          >
            Вход с Google
          </Button>
        </NavigationSignIn>
        <Fragment>
          <Link className="nav-link" to="/sign-up">
            Зарегистрироваться
          </Link>
        </Fragment>
      </form>
    </div>
  );
};

export default SignInForm;
