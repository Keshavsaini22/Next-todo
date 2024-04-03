'use client'
import Card from '@/components/Card/page'
import MyDialog from '@/components/Dialog/page'
import { Add } from '@mui/icons-material'
import { Box, IconButton, Stack } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
interface card {
    _id: string;
    todo: string;
    __v: number;
    _createdAt: string;
    _updatdAt: string;
}
function Page() {
    const [todo, setTodo] = useState([])

    async function getUserDetails() {
        try {
            const response = await fetch("http://localhost:3000/api/todo")
            const a = await response.json()
            setTodo(a)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getUserDetails()
    }, [])
    const [open, setOpen] = useState<boolean>(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        // getUserDetails();
    };
    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>, data: string) => {
        event.preventDefault();
        const response = await fetch("http://localhost:3000/api/todo", {
            method: "POST",
            body: JSON.stringify(data)
        })
        console.log('response: ', response);
        handleClose()
    }
    return (
        <>
            <Stack gap={2}>
                <Stack alignItems={'flex-end'} justifyContent={'center'} width={'100%'} height={'50px'} sx={{ backgroundColor: 'lightcoral', paddingX: '16px' }}>
                    <IconButton sx={{}} onClick={handleClickOpen}>
                        <Add />
                    </IconButton>
                </Stack>
                <MyDialog handleFormSubmit={handleFormSubmit} title="Add new todo" open={open} handleClose={handleClose} />
                <Box m={2} display={'flex'} gap={2} flexWrap={'wrap'}>
                    {todo.map((item: card) => (< Box key={item._id}><Card item={item} /></Box>))}
                </Box>
            </Stack>
        </>)
}

export default Page