import React, { useState } from 'react'
import AddUser from './Components/Users/AddUsers'
import UserList from './Components/Users/UserList'




function App() {
  const user = []
  const [data, setData] = useState(user)
  const AddUserDataHandler = (props) => {
    setData(prevData => {
      return [props, ...prevData]
    })
  }

  return (
    <div>
      <AddUser dataHandler={AddUserDataHandler} />
      <UserList userData={data} />
    </div>
  )
}

export default App;
