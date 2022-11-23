import React, { useState, Fragment, useRef } from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModel from '../UI/ErrorModel'
import './AddUsers.css'

const AddUser = (props) => {

    const userNameRef = useRef()
    const ageRef = useRef()

    //state anf ref are same bur ref in less code write
    // const [enteredUserName, setUserName] = useState('')
    // const [enteredAge, setAge] = useState('')
    const [error, setError] = useState('')

    // const usernameChangehandler = (event) => {
    //     setUserName(event.target.value)
    // }
    // const ageChangehandler = (event) => {
    //     setAge(event.target.value)
    // }

    const AddUserHandler = (event) => {
        event.preventDefault();

        const enteredUserName = userNameRef.current.value;
        const enteredAge = ageRef.current.value;

        if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message: "Please enter a valid name and age(Non-empty values)"
            })
            return;
        }
        if (enteredAge < 1) {
            setError({
                title: "Invalid Input",
                message: "Please enter a valid age(>0)"
            })
            return;
        }

        const userData = {
            id: Math.random().toString(),
            username: enteredUserName,
            age: enteredAge
        }
        props.dataHandler(userData);
        userNameRef.current.value = ''
        ageRef.current.value = ''
        // setUserName('')
        // setAge('')

    }

    const CancelHandler = (event) => {
        setError('')
    }

    return (
        <React.Fragment>
            {error && <ErrorModel title={error.title} message={error.message} onCancel={CancelHandler} />}
            <Card className="input">
                <form onSubmit={AddUserHandler} >
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        // value={enteredUserName}
                        // onChange={usernameChangehandler}
                        ref={userNameRef}>
                    </input>

                    <label htmlFor="age">Age(Year)</label>

                    <input
                        type="number"
                        id="age"
                        // value={enteredAge}
                        // onChange={ageChangehandler}
                        ref={ageRef}>
                    </input>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </React.Fragment>
    )
}
export default AddUser;