import React from 'react';
import { GlobalHooksProvider, createGlobalHook, useGlobalHook } from '@devhammed/use-global-hook'
import {TextField} from 'material-ui/TextField';

// class AddUser extends React.Component {
//     inputRefName = React.createRef();
//     inputRefCity = React.createRef();
//     inputRefDateCreate = React.createRef();

//     handleClick = addTodo => {
//         if (this.inputRefName.current.value) {
//             addTodo({username :this.inputRefName.current.value, usercity:this.inputRefCity.current.value, userceated: this.inputRefDateCreate.current.value});
//             this.inputRefName.current.value = '';
//             this.inputRefCity.current.value = '';            
//             this.inputRefDateCreate.current.value = '';
//         }
//     };
//     render() {
//       return (
//         <div>
//           <input type="text" placeholder="User Name" ref={this.inputRefName} />
//           <input type="text" placeholder="Select City" ref={this.inputRefCity} />
//           <input type="text" placeholder="Pick CreateDate" ref={this.inputRefDateCreate} />
  
//           <Subscribe to={[UserContainer]}>
//             {userContainer => (
//               <button onClick={() => this.handleClick(userContainer.A)}>
//                 Add
//               </button>
//             )}
//           </Subscribe>
//         </div>
//       );
//     }
//   }

import userStateHook from './store';
function AddUser() {

  const { users, loading, addUser, delUser} = useGlobalHook('userStore');
  console.log(users)
  const handleSubmit =() =>{
    console.log(users)
    addUser('John Doe','Clearwater');

}
 
  

  //
 
  return (

            <div>

              {/* <form method="POST" >
                <input type="test" name="username"> </input>
                  <input type="test" name="usercity"></input>
                  
              </form> */}
              <button type="submit" onClick={handleSubmit}>Submit</button>
            </div>
            

  )
            }
export default AddUser;




