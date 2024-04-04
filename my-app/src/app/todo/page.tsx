// 'use client'
import Navbar from '@/components/Navbar/page'
import Todos from '@/components/Todos/page'
import { Stack } from '@mui/material'
import React from 'react'
import { rvalidateTodo } from '../actions'

async function Page() {
    async function getTodoDetails() {
        try {
            const response = await fetch("http://localhost:3000/api/todo", {
                next: { tags: ['newtag'] }
            })
            const a = await response.json()
            return a
        } catch (e) {
            console.log(e);
        }
    }


    var data = await getTodoDetails()


    return (
        <>
            <Stack gap={2}>
                <Navbar />
                <Todos todo={data} />
            </Stack>
        </>)
}

export default Page