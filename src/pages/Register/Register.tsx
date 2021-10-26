import "./Register.scss";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { Formik } from "formik";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import UsersActions from "../../redux/reducer/users.reducer";

const Register = () => {
  const dispatch = useDispatch();
  return (
  <Fragment>
    <div id="form-sign-up">
      <span className="sign-up-form-title">Registrase</span>
      <Formik
        initialValues={{ name: '', lastName: '', cellphone: '', email: '', password: '' }}
        onSubmit={(values, { setSubmitting }) => {
          const { name, lastName, cellphone, email, password } = values;
          dispatch(UsersActions.enrollmentUser({ name, lastName, cellphone, email, password }));
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
              className="sign-up-name"
              type="name"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              placeholder="Nombres"
            />
            {errors.name && touched.name}
            <Input
              className="sign-up-lastName"
              type="lastName"
              name="lastName"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastName}
              placeholder="Apellidos"
            />
            {errors.lastName && touched.lastName}
            <Input
              className="sign-up-cellphone"
              type="text"
              name="cellphone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.cellphone}
              placeholder="Número celular"
            />
            {errors.cellphone && touched.cellphone}
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
              value='Confirmar registro'
            />
          </form>
        )}
      </Formik>
    </div>
  </Fragment>
  )
}

export default Register;