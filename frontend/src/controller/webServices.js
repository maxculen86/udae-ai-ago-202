const urlApi = process.env.REACT_APP_URL || "http://localhost:5000/";
console.log("url",urlApi);

const urlWebServices = {
    loginGrupo:urlApi +"api/users/login",
    registerGrupo:urlApi +"api/users/registration",
    usersWs:urlApi +"api/users",
}

export default urlWebServices;