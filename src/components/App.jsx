

import React from "react";
import { Phonebook } from "./Phonebook/Phonebook";
import { Widget } from "./Widget/Widget";


export const App = () => {
  // export class App extends React.Component {
    return(
    <div
      // style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      // }}
      >
     
        <Widget />
        <Phonebook />
    </div>
  );
    
};
