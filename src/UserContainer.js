// @flow
import { Container } from 'unstated';

class UserContainer extends Container {
    state = {
        users: []
    };

    id = 0;

    addUser = user => {
        const newuser = { id: this.id++, username: this.username, usercity: this.usercity, userceated: this.userceeated };
        this.setState({
            users: [...this.state.users, newuser]
        });
    };

    removeUser = id => {
        this.setState({
            users: this.state.users.filter(user => user.id !== id)
        });
    };

    updateUser = id => {
        this.setState({
            users: this.state.users.map(user => {
                if (user.id !== id) {
                    return user;
                } else {
                    return { ...user, musername: user.username, usercity: user.usercity, userceated: user.userceeated };
                }
            })
        });
    };
}

export default UserContainer;