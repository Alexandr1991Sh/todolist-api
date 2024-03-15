import React, {useEffect, useState} from 'react'
import {taskAPI} from "../api/task-api";

export default {title: 'API - TASK'}

export const GetTask = () => {
    const [state, setState] = useState(null)
    const todolistId = '28352e17-96ee-46f8-9cfb-656688d9e471'
    useEffect(() => {
        taskAPI.getTask(todolistId).then(res => {
            setState(res.data)
        })
    }, []);
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTask = () => {
    const [state, setState] = useState(null)
    const todolistId = '28352e17-96ee-46f8-9cfb-656688d9e471'
    const title = 'New Task'
    useEffect(() => {
        taskAPI.createTask(todolistId, title).then(res => {
            setState(res.data)
        })
    }, []);
    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTask = () => {
    const [state, setState] = useState(null)
    const todolistId = '28352e17-96ee-46f8-9cfb-656688d9e471'
    const taskId = '65689472-2c8c-4381-9f43-7e81bed49fdc'
    useEffect(() => {
        taskAPI.deleteTask(todolistId, taskId).then(res => {
            setState(res.data)
        })
    }, []);
    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTask = () => {
    const [state, setState] = useState(null)
    const todolistId = '28352e17-96ee-46f8-9cfb-656688d9e471'
    const taskId = '65689472-2c8c-4381-9f43-7e81bed49fdc'
    const title = 'Update Task'
    useEffect(() => {
        taskAPI.updateTask(todolistId, taskId, title).then(res => {
            setState(res.data)
        })
    }, []);
    return <div>{JSON.stringify(state)}</div>
}


