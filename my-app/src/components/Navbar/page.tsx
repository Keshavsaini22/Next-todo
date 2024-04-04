'use client'
import { Add } from '@mui/icons-material'
import { IconButton, Stack } from '@mui/material'
import React, { useState } from 'react'
import MyDialog from '../Dialog/page';
import { rvalidateTodo } from '@/app/actions';

function Navbar() {
    const [open, setOpen] = useState<boolean>(false);

    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>, data: string) => {
        event.preventDefault();
        const response = await fetch("http://localhost:3000/api/todo", {
            method: "POST",
            body: JSON.stringify(data)
        })
        console.log('response: ', response);
        handleClose()
        rvalidateTodo()
    }

    const handleClose = () => {
        setOpen(false);
        // getUserDetails();
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    return (
        <>
            <Stack alignItems={'flex-end'} justifyContent={'center'} width={'100%'} height={'50px'} sx={{ backgroundColor: 'lightcoral', paddingX: '16px' }}>
                <IconButton sx={{}} onClick={handleClickOpen}>
                    <Add />
                </IconButton>
            </Stack>
            <MyDialog handleFormSubmit={handleFormSubmit} title="Add new todo" open={open} handleClose={handleClose} />
        </>
    )
}

export default Navbar