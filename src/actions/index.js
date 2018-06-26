import axios from 'axios';
import {USER_IN_SESSION} from '../constants/actionTypes';
import {GET_LOGIN} from '../constants/actionTypes';
import {REGISTER_NEW_USER} from '../constants/actionTypes';
import {GET_MY_COURSES} from '../constants/actionTypes';
import {LOGOUT_USER} from '../constants/actionTypes';

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

export function getMyCourses(){
    const request = axios.get(protocol+'://'+subDomainString+'.mayahii.com/miMayahii/get_mis_series.action',{
        params: {

        },
        withCredentials:true
    });
    return {
        type: "GET_MY_COURSES",
        payload: request
    }
}

export function getLogOut(){
    const request = axios.get(protocol+'://'+subDomainString+'.mayahii.com/accounts/logOutAction',{

        withCredentials:true
    });
    return {
        type: "LOGOUT_USER",
        payload: request
    }
}
