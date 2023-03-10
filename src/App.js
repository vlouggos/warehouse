import React from "react";
import { Amplify } from "aws-amplify";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { YinYang } from "react-bootstrap-icons";

import NavigationBar from "./components/NavigationBar";
import './App.css';
import awsExports from "./aws-exports";
import NewItemForm from "./components/NewItemForm";
import ItemsTable from "./components/ItemsTable";
Amplify.configure(awsExports);

export default function App() {
  return (
    <Authenticator>
      
          {({ signOut, user }) => (
            <main>
              <NavigationBar name={user.attributes.email}/>
              <YinYang />
              <NewItemForm />
              <ItemsTable />
              <h1>Hello {user.username}</h1>
              <button onClick={signOut}>Sign out</button>
            </main>
          )}
        
    </Authenticator>
  );
}
