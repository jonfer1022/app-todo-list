import "./MyProfile.scss";
import { Fragment } from "react";
import TextInfo from "../../components/TextInfo/TextInfo";
import logo from "../../Img/icon-person-symbol.jpg";
import { useSelector } from "react-redux";

const MyProfile = () => {
  let user = useSelector( ({ users }:any) => users);

  return (
  <Fragment>
    <div id="form-sign-up">
      <span className="sign-up-form-title">Mi perfil</span>
      <div id="my-profile-img">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div id="my-profile-info">
        <TextInfo 
          value={user?.name ? user.name : ""}
          label="Nombres"
        />
        <TextInfo 
          value={user?.lastName ? user.lastName : ""}
          label="Apellidos"
        />
        <TextInfo 
          value={user?.email ? user.email : ""}
          label="Email"
        />
        <TextInfo 
          value={user?.cellphone ? user.cellphone : ""}
          label="Número celular"
        />
      </div>
    </div>
  </Fragment>
  )
}

export default MyProfile;