import React from 'react';
import { Provider, Subscribe, Container } from 'unstated';
import UserContainer from './UserContainer';


class AddUser extends React.Component {
    inputRefName = React.createRef();
    inputRefCity = React.createRef();
    inputRefDateCreate = React.createRef();

    handleClick = addTodo => {
        if (this.inputRefName.current.value) {
            addTodo({username :this.inputRefName.current.value, usercity:this.inputRefCity.current.value, userceated: this.inputRefDateCreate.current.value});
            this.inputRefName.current.value = '';
            this.inputRefCity.current.value = '';            
            this.inputRefDateCreate.current.value = '';
        }
    };
    render() {
      return (
        <div>
          <input type="text" placeholder="User Name" ref={this.inputRefName} />
          <input type="text" placeholder="Select City" ref={this.inputRefCity} />
          <input type="text" placeholder="Pick CreateDate" ref={this.inputRefDateCreate} />
  
          <Subscribe to={[UserContainer]}>
            {userContainer => (
              <button onClick={() => this.handleClick(userContainer.A)}>
                Add
              </button>
            )}
          </Subscribe>
        </div>
      );
    }
  }


// function Userform() {
//   return (

//       <Subscribe to={[UserContainer]}>

//             <div>
//                 {user => (
//               <form method="POST" onSubmit={user.addUser}>
//                 <input type="test" name="username" value={user.state.user.username} onChange={user.handleInputChange}></input>
//                   <input type="test" name="usercity" value={user.state.user.usercity} onChange={user.handleInputChange}></input>
//                   <button type="submit">Submit</button>
//               </form>
//                 )}


//             </div>

//       </Subscribe>
//   )
// }
export default AddUser;




