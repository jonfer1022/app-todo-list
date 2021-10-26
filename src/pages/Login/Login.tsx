import { Fragment } from "react";
import { Formik } from "formik";
import { useDispatch } from "react-redux";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import UsersActions from "../../redux/reducer/users.reducer";

const Login = () => {
  const dispatch = useDispatch();
  return (
  <Fragment>
    <div id="form-sign-up">
      <span className="sign-up-form-title">Inicia Sesión</span>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values, { setSubmitting }) => {
          const { email, password } = values;
          dispatch(UsersActions.login({ email, password }));
          setSubmitting(false);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <Input
              className="sign-up-email"
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="Correo electrónico"
            />
            {errors.email && touched.email}
            <Input
              className="sign-up-password"
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder="Contraseña"
            />
            {errors.password && touched.password}
            <Button
              id='sign-up-btn-confirm'
              className='confirm'
              value='Iniciar sesión'
            />
          </form>
        )}
      </Formik>
    </div>
  </Fragment>)
}

export default Login;