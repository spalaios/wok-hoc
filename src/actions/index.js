import { CHANGE_AUTH } from './constants';

function authenticateUser(isLoggedIn) {
    return {
        type: CHANGE_AUTH,
        payload: isLoggedIn
    }
}


export default authenticateUser;
