import axios from 'axios';
import {USER_IN_SESSION} from '../constants/actionTypes';
import {GET_LOGIN} from '../constants/actionTypes';
import {REGISTER_NEW_USER} from '../constants/actionTypes';

const protocol = "https";
const subDomainString = "www";

export function getUserInSession(){
    const request = axios.get(protocol+'://'+subDomainString+'.mayahii.com/panel/home_load.action?idOrg=0',{
        withCredentials: true,
    });
    return {
        type: "USER_IN_SESSION",
        payload: request
    }
}

export function getLogin(userLogin, passwordLogin, ownerName, idOrg){
    const request = axios.get(protocol+'://'+subDomainString+'.mayahii.com/accounts/loginAction',{
        params: {
            userLogin: userLogin,
            passwordLogin: passwordLogin,
            ownerName: ownerName,
            idOrg: idOrg
        },
        withCredentials:true
    });
    return {
        type: "GET_LOGIN",
        payload: request
    }
}

export function getRegisterNewUser(firstName, lastName, emailUser, passUser, termsLogin){
    let terms = null;
    if(termsLogin == true) {
        terms = 'on'
    }
    const request = axios.get(protocol+'://'+subDomainString+'.mayahii.com/accounts/createAccountAction',{
        params: {
            firstName: firstName,
            lastName: lastName,
            emailUser: emailUser,
            passUser: passUser,
            termsLogin: terms
        },
        withCredentials:true
    });
    return {
        type: "REGISTER_NEW_USER",
        payload: request
    }
}
