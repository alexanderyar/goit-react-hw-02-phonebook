import { Widget } from "./Widget/Widget";

import React from "react";
import { Component } from "react";
import { Phonebook } from "./Phonebook/Phonebook";


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
