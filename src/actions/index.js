import axios from 'axios';
import {USER_IN_SESSION} from '../constants/actionTypes';
import {GET_LOGIN} from '../constants/actionTypes';
import {REGISTER_NEW_USER} from '../constants/actionTypes';
import {GET_MY_COURSES} from '../constants/actionTypes';
import {LOGOUT_USER} from '../constants/actionTypes';
import {GET_MY_POPULATIONS} from '../constants/actionTypes';
import {GET_COURSES_BY_POPULATION} from '../constants/actionTypes';
import {GET_INFINITE_DATA} from '../constants/actionTypes';
import {GET_USER_AWARDS_DATA} from '../constants/actionTypes';
import {GET_HISTORY_DATA} from '../constants/actionTypes';
import {DELETE_VIDEO_HISTORY} from '../constants/actionTypes';

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
    const request = axios.get(protocol+'://'+subDomainString+'.mayahii.com/miMayahii/get_mis_series',{
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

export function getMyPopulations(){
    const request = axios.get(protocol+'://'+subDomainString+'.mayahii.com/population/populationsByUser',{
        params: {
            user: true,
        },
        withCredentials:true
    });
    return {
        type: "GET_MY_POPULATIONS",
        payload: request
    }
}
export function getCoursesByPopulation(uuid){
    const request = axios.post(`https://7rzcy6ga70.execute-api.us-east-1.amazonaws.com/prod/population/contents`,{
        courses: true,
        uuidPopulation: uuid,
    });
    return {
        type: "GET_COURSES_BY_POPULATION",
        payload: request
    }
}

export function getInfinite(academy, academyOrigin, user, idTransmitter){
    const request = axios.get(protocol+'://'+subDomainString+'.mayahii.com/panel/get_store_courses',{
        params: {
            academy: academy,
            academyOrigin: academyOrigin,
            user: user,
            idTransmitter: idTransmitter,
            page: 0,
            limit: 1000,
        },
        withCredentials:true
    });
    return {
        type: "GET_INFINITE_DATA",
        payload: request
    }
}

export function getUserAwards(user, limit, page){
    const request = axios.get(protocol+'://'+subDomainString+'.mayahii.com/track/user_awards',{
        params: {
            limit: 100,
            user: user,
            page: 0
        },
        withCredentials:true
    });
    return {
        type: "GET_USER_AWARDS_DATA",
        payload: request
    }
}

export function getHistory(page){
    const request = axios.get(protocol+'://'+subDomainString+'.mayahii.com/panel/show_history',{
        params: {
            paged: true,
            page: page
        },
        withCredentials:true
    });
    return {
        type: "GET_HISTORY_DATA",
        payload: request
    }
}

export function deleteVideoHistory(idVideo){
    const request = axios.get(protocol+'://'+subDomainString+'.mayahii.com/panel/remove_object_history',{
        params: {
            select: idVideo,
        },
        withCredentials:true
    });
    return {
        type: "DELETE_VIDEO_HISTORY",
        payload: request
    }
}
