import React from "react";
import { Segment, Header } from "semantic-ui-react";
import ContactForm from "../components/UserForm";
import ContactTable from "../components/UserTable";
import { useUsersContext } from "../context/UserContext";

export default function Users() {
  return (
    // Wrap the components that you want to share your custom hook state
    <useUsersContext.Provider>
      <Segment basic>
        <Header as="h3">users</Header>
        <ContactForm />
        <ContactTable />
      </Segment>
    </useUsersContext.Provider>
  );
}