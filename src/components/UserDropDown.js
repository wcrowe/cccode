import React, { useState } from "react";
import { Dropdown } from 'semantic-ui-react'



const cityOptions = [
    {
      key: 'TPA',
      text: 'Tampa',
      value: 'Tampa'
    },
    {
      key: 'CLW',
      text: 'Clearwater',
      value: 'Clearwater'
    },
    {
      key: 'SPT',
      text: 'St. Pete',
      value: 'SPT'
    }
  ]
  
    const onChange = (e, data) => {
    console.log(data.value);
  }


  const UserDropDown = () => (
    <Dropdown
      placeholder='Select City'
      fluid
      selection
      options={cityOptions}

      onChange={onChange}
    />
  )
  
  export default UserDropDown;
  