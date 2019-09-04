import {Store} from 'overstated';

class UserStore extends Store<{username: string, usercity: string, usercreated: Date}> {
    state = {
        user: {},
        users:[{}]
    }
    addUser = () => {
        return this.setState ( state => {
            return ({...state.users, state.value});
        } );
    }

}