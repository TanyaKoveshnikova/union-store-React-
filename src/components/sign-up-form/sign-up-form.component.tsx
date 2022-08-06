import { Fragment, useState, FormEvent, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AuthError, AuthErrorCodes } from "firebase/auth";

import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import "./sign-up-form.styles.scss";
import Button from "../button/button.component";
import { setCurrentUser } from "../../store/user/user.reducer";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const dispatch = useDispatch();

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("password do not match");
      return;
    }
    try {
      await createAuthUserWithEmailAndPassword(email, password);

      dispatch(setCurrentUser({ email, password, displayName }));
      // await createUserDocumentFromAuth(user, { displayName });

      resetFormFields();
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert("Ваш email уже используется");
      } else {
        console.error(error);
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  return (
    <div className="sign-up-container">
      <h2 className="statusAccount">Ещё нет аккаунта?</h2>
      <span>Зарегистрироваться c email и паролем</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Имя"
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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
        <FormInput
          label="Подтвердите пароль"
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        />
        <Button type="submit">Зарегистрироваться</Button>
        <Fragment>
          <Link className="nav-link" to="/sign-in">
            Уже есть аккаунт
          </Link>
        </Fragment>
      </form>
    </div>
  );
};

export default SignUpForm;
