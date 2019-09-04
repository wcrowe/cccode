import React, { useState } from "react";
import { Segment, Table, Button, Icon } from "semantic-ui-react";
import { useUsersContext } from "../context/UserContext";

export default function UserTable() {
  // Subscribe to `user` state and access `delUser` action
  const { users, delUser } = useUsersContext();
  // Declare a local state to be used internally by this component
  const [selectedId, setSelectedId] = useState();

  const onRemoveUser = () => {
    delUser(selectedId);
    setSelectedId(null); // Clear selection
  };

  const rows = users.map(user => (
    <Table.Row
      key={user.id}
      onClick={() => setSelectedId(user.id)}
      active={user.id === selectedId}
    >
      <Table.Cell>{user.id}</Table.Cell>
      <Table.Cell>{user.name}</Table.Cell>
      <Table.Cell>{user.city}</Table.Cell>

      <Table.Cell>{user.datecreated}</Table.Cell>

    </Table.Row>
  ));

  return (
    <Segment>
      <Table celled striped selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Date Created</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{rows}</Table.Body>
        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell colSpan="4">
              <Button
                floated="right"
                icon
                labelPosition="left"
                color="red"
                size="small"
                disabled={!selectedId}
                onClick={onRemoveUser}
              >
                <Icon name="trash" /> Remove User
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Segment>
  );
}