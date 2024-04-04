// 'use client'
import Navbar from '@/components/Navbar/page'
import Todos from '@/components/Todos/page'
import { Stack } from '@mui/material'
import React, { useEffect, useState } from 'react'
interface card {
    _id: string;
    todo: string;
    __v: number;
    _createdAt: string;
    _updatdAt: string;
}
async function Page() {
    // const [todo, setTodo] = useState([])
    async function getTodoDetails() {
        try {
            const response = await fetch("http://localhost:3000/api/todo")
            const a = await response.json()
            // setTodo(a)
            return a
        } catch (e) {
            console.log(e);
        }
    }

    // useEffect(() => {
    var data = await getTodoDetails()
    // }, [])

    return (
        <>
            <Stack gap={2}>
                <Navbar />
                <Todos todo={data} />
            </Stack>
        </>)
}

export default Page