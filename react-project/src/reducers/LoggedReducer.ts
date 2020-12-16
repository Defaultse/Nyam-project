import { Logged } from "./Logged";

const loggedReducer = (
    state: boolean = false,
    action: {type: Logged}) => {
        switch (action.type) {
            case Logged.SIGN_IN:
                return true;

            case Logged.SIGN_OUT:
                localStorage.setItem('email', "");
                return false;
            
            default:
                return state;
        }
    };

export default loggedReducer