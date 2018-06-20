import axios from 'axios';
import {USER_IN_SESSION} from '../constants/actionTypes';

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
