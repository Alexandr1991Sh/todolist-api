import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {todolistAPI} from "../api/todolist-api";

export default {title: 'API - TASK'}

const config = {withCredentials: true}

export const GetTask = () => {
    const [state, setState] = useState(null)
    const todolistId = '28352e17-96ee-46f8-9cfb-656688d9e471'
    useEffect(() => {
        axios.get(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}/tasks`, config)
            .then(res => {
                setState(res.data)
            })
    }, []);
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTask = () => {
    const [state, setState] = useState(null)
    const todolistId = '28352e17-96ee-46f8-9cfb-656688d9e471'
    useEffect(() => {
        axios.post(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}/tasks`,
            {title: 'New Task'},
            config
        ).then(res => {
            setState(res.data)
        })
    }, []);
    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTask = () => {
    const [state, setState] = useState(null)
    const todolistId = '28352e17-96ee-46f8-9cfb-656688d9e471'
    const taskId = 'c6594139-639c-4072-b141-76276891ce47'
    useEffect(() => {
        axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}/tasks/${taskId}`, config)
            .then(res => {
                setState(res.data)
            })
    }, []);
    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTask = () => {
    const [state, setState] = useState(null)
    const todolistId = '28352e17-96ee-46f8-9cfb-656688d9e471'
    const taskId = 'f1fd4b62-4a4d-4dfc-b969-d9c4fc7e11fa'
    useEffect(() => {
        axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}/tasks/${taskId}`,
            {title: 'Update Task'},
            config
        ).then(res => {
            setState(res.data)
        })
    }, []);
    return <div>{JSON.stringify(state)}</div>
}


