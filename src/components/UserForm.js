import React, { useState } from "react";
import { Segment, Form, Input, Button, Dropdown,Select } from "semantic-ui-react";
import { useUsersContext } from "../context/UserContext";
import UserDropDown from './UserDropDown'
import CryptoChecker from './CryptoChecker';

export default function UserForm() {
  const name = useFormInput("");
  const city = useFormInput("");
  const datecreated = useFormInput("");

  // Consume the context store to access the `addUser` action
  const { addUser } = useUsersContext();

  const onSubmit = () => {
    addUser(name.value, city.value);
    // Reset Form
    name.onReset();
    city.onReset();
    datecreated.onReset();
  };

  const onCityChange = (e, data) => {
    console.log(data.value);
  }
//const

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
      value: 'St. Pete'
    }
  ]
//  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  return (

    <Segment basic>
      <Form onSubmit={onSubmit}>
        <Form.Group widths="3">
          <Form.Field width={6}>
            <Input placeholder="Enter Name" {...name} required />
          </Form.Field>
          <Form.Field width={6}>
          <Form.Select
            {...city}
            options={cityOptions}
            placeholder='Enter City'
          //  value={city}
            onChange={onCityChange}
          />
          </Form.Field>
          {/* <Form.Field>
           <CryptoChecker/>
          </Form.Field> */}
          <Form.Field width={4}>
            <Button fluid primary>
              New User
            </Button>
          </Form.Field>
        </Form.Group>
      </Form>
    </Segment>
  );
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleReset() {
    setValue("");
  }

  function handleCityChange(e) {
    console.log(e.target.value);
  }

  return {
    value,
    onChange: handleChange,
    onReset: handleReset
  
  };
}