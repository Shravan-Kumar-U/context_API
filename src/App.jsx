import { useState, createContext, useContext } from 'react'
import './App.css'

//Context API dons'nt optimise the rerendering of the page . but librays like recoil, mobex,zoostand... etc these library will optimise the rerendering of the page

/*
# Context API

 The Context API is a powerful feature in React that enables you to manage state across your application more effectively, especially when dealing with deeply nested components.

The Context API provides a way to share values (state, functions, etc.) between components without having to pass props down manually at every level.
### Jargon

- **Context**: This is created using `React.createContext()`. It serves as a container for the data you want to share.
- **Provider**: This component wraps part of your application and provides the context value to all its descendants. Any component that is a child of this Provider can access the context.
- **Consumer**: This component subscribes to context changes. It allows you to access the context value (using `useContext`  hook)
 */

//const bulbContext = React.createContext()
const BulbContext = createContext();

function Bulbprovider({children}){
  const [bulbOn, setbulbOn] = useState(true);
  
  return (
    <>
    <BulbContext.Provider value = {{
      bulbOn: bulbOn,
      setbulbOn: setbulbOn
    }}>
    {children}
    </BulbContext.Provider>
      
    </> 
  )
}

function App() {
  // const [bulbOn, setbulbOn] = useState(true);

  return (
    // wrapping the components inside the provider
    // <>
    // <BulbContext.Provider value = {{
    //   bulbOn: bulbOn,
    //   setbulbOn: setbulbOn
    // }}>
    // <Light/>
    // </BulbContext.Provider>
      
    // </>
    //Another method is to hide the components which is used to hide the information. Defining the wrapper function 
    <>
    <Bulbprovider>
    <Light/>
    </Bulbprovider>
    </>
  )
}

function Light(){
  return (
    <>
    <LightBulb/>
    <LightBulbSwitch/>
    </>
  )
}

function LightBulb(){
  const {bulbOn} = useContext(BulbContext);
  return (
    <>
    {bulbOn ? "BulbOn" : "BulbOff"}
    <br />
    </>
  )
}

function LightBulbSwitch(){
  const {bulbOn, setbulbOn} = useContext(BulbContext);
  function toggle(){
    //setbulbOn(bulbOn => !bulbOn);
    setbulbOn(!bulbOn);
  }
  return (
    <>
    <button onClick={toggle}>Toggle the bulb</button>
    </>
  )
}
export default App
