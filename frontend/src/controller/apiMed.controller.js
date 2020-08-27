import urlWebServices from './webServices.js';

export const loginGrupos= async function(login,signal)
{
    //url webservices
    let url = urlWebServices.loginGrupo;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('email', login.email);
    formData.append('password', login.password);
    console.log("url",url);
    console.log("datos",login);

    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
               // 'x-access-token': WebToken.webToken,
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
            signal: signal    
        });

        let responseStatus = response.status;
        let data = await response.json();
        console.log("DATA",data);
            switch(responseStatus)
            {
                case 201:
                {
                    //guaresponseStatus token
                    localStorage.setItem("x",data.logged.token);
                    //guaresponseStatus usuario logueado
                    let user = data.logged.user;
                    console.log("USER", user);
                    localStorage.setItem("userNombre",user.nombre);
                    localStorage.setItem("userApellido",user.apellido);
                    localStorage.setItem("userEmail",user.email);
                    localStorage.setItem("userProfile",user.profile);
                    return ({responseStatus:0,mensaje:"Ok"});//correcto
                }
                case 202:
                {
                    //error mail
                    return ({responseStatus:1,mensaje:"El mail ingresado no existe en nuestra base."});
                }
                case 203:
                {
                    //error password
                    return ({responseStatus:1,mensaje:"La contraseña no es correcta."});
                }
                default:
                {
                    //otro error
                    return ({responseStatus:1,mensaje:"Ha ocurrido un error"});                
                }
            }
    }
    catch(error)
    {
        console.log("error",error);
    };
}

export const registerGrupos= async function(register,signal)
{
    //url webservices
    let url = urlWebServices.registerGrupo;
    //armo json con datos
    const formData = new URLSearchParams();
    formData.append('name', register.name);
    formData.append('lname', register.lname);
    formData.append('email', register.email);
    formData.append('password', register.password);
    console.log("url",url);
    console.log("datos",register);

    try
    {
        let response = await fetch(url,{
            method: 'POST', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
               // 'x-access-token': WebToken.webToken,
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            body: formData,
            signal: signal    
        });

        let responseStatus = response.status;
        let data = await response.json();
        console.log("DATA",data);
            switch(responseStatus)
            {
                case 201:
                {
                    //guaresponseStatus token
                    localStorage.setItem("x",data.token);
                    //guaresponseStatus usuario logueado
                    //let user = data.logged.user;
                    //console.log("User", user);
                    //localStorage.setItem("userNombre",formData.name);
                    // localStorage.setItem("userApellido",formData.apellido);
                    // localStorage.setItem("userEmail",formData.email);
                    // localStorage.setItem("userProfile",user.profile);
                    return ({responseStatus:0,mensaje:"Ok"});//correcto
                }
                case 202:
                {
                    //error mail
                    return ({responseStatus:1,mensaje:"El mail ingresado no existe en nuestra base."});
                }
                case 203:
                {
                    //error password
                    return ({responseStatus:1,mensaje:"La contraseña no es correcta."});
                }
                default:
                {
                    //otro error
                    return ({responseStatus:1,mensaje:"Ha ocurrido un error"});                
                }
            }
    }
    catch(error)
    {
        console.log("error",error);
    };
}

export const fetchUsers= async function(signal)
{
    //url webservices
    let url = urlWebServices.usersWs;
    
    console.log("url",url);

    try
    {
        let response = await fetch(url,{
            method: 'GET', // or 'PUT'
            mode: "cors",
            headers:{
                'Accept':'application/x-www-form-urlencoded',
               'x-access-token': localStorage.getItem("x"),
                'Origin':'http://localhost:3000',
                'Content-Type': 'application/x-www-form-urlencoded'},
            signal: signal    
        });

        let responseStatus = response.status;
        let responseJson = await response.json();
            switch(responseStatus)
            {
                case 200:
                {
                    //guaresponseStatus token
                    //localStorage.setItem("x",data.logged.token);
                    //guaresponseStatus usuario logueado
                    let userList = responseJson.data.docs;
                    //let userGrid = localStorage.setItem("userNombre",user.nombre);
                    // localStorage.setItem("userEmail",user.email);
                    // localStorage.setItem("userProfile",user.profile);
                    return ({data:userList, responseStatus:0,mensaje:"Ok"});//correcto
                }
                case 202:
                {
                    //error mail
                    return ({responseStatus:1,mensaje:"El mail ingresado no existe en nuestra base."});
                }
                case 203:
                {
                    //error password
                    return ({responseStatus:1,mensaje:"La contraseña no es correcta."});
                }
                default:
                {
                    //otro error
                    return ({responseStatus:1,mensaje:"Ha ocurrido un error"});                
                }
            }
    }
    catch(error)
    {
        console.log("error",error);
    };
}