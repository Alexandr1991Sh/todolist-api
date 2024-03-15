import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {todolistAPI} from "../api/todolist-api";

export default {
    title: 'API - TODOLIST',
}


export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)

    useEffect(() => {
        todolistAPI.getTodolists().then(res => {
            setState(res.data)
        })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    const title = 'newTodolist'

    useEffect(() => {
        todolistAPI.createTodolist(title)
            .then(res => {
                setState(res.data)
            })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = '5e2785e1-b8c7-4707-8458-a2562db3a85d'

    useEffect(() => {
        todolistAPI.deleteTodolist(todolistId).then(res => {
            setState(res.data)
        })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    const todolistId = 'a8d2eeac-6206-4944-a193-ac91857a0453'
    const title = 'SOME NEW TITLE'

    useEffect(() => {
        todolistAPI.updateTodolist(todolistId, title).then(res => {
            setState(res.data)
        })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}