const url = "http://localhost:8080"; /*process.env.REACT_APP_DOMAIN_BACKEND*/ 

const routes = {
  endpoints: {
    defaultPath:{
      method: "get",
      url: `${url}/`
    },
    enrollmentUser:{
      method: "post",
      url: `${url}/user`
    },
    login:{
      method: "get",
      url: `${url}/user/login`
    },
    addFavorites:{
      method: "post",
      url: `${url}/repositories/addFavorites`
    },
    getMyFavorites:{
      method: "get",
      url: `${url}/repositories/getMyFavorites`
    },
  }
}

export default routes