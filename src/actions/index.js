import axios from 'axios';
import {USER_IN_SESSION} from '../constants/actionTypes';
import {GET_LOGIN} from '../constants/actionTypes';

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
