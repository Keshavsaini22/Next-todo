'use client'
import { Box, Button, IconButton, Menu, MenuItem, Stack } from '@mui/material'
import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MyDialog from '../Dialog/page';
import { rvalidateTodo } from '@/app/actions';

interface card {
    _id: string;
    todo: string;
    __v: number;
    _createdAt: string;
    _updatdAt: string;
}

interface props {
    item: card;
}


function Card(props: props) {


    const [openEdit, setOpenEdit] = useState<boolean>(false);
    const handleClickOpen = () => {
        setOpenEdit(true);
    };

    const handleCloseEdit = () => {
        setOpenEdit(false);
        // getUserDetails();
    };

    const handleEdit = async (event: React.FormEvent<HTMLFormElement>, data: string) => {
        event.preventDefault();
        handleClose()
        const response = await fetch(`http://localhost:3000/api/todo/${props.item._id}`, {
            method: "PUT",
            body: JSON.stringify(data)
        })
        console.log('response: ', response);
        handleCloseEdit()
        rvalidateTodo();
    }
    const handleDelete = async () => {

        try {
            const response = await fetch(`http://localhost:3000/api/todo/${props.item._id}`, {
                method: 'DELETE',
            })
            // console.log('response: ', response.data);
            const a = await response.json()
            console.log('a: ', a)
        } catch (e) {
            console.log(e);
        }
        handleClose()
        rvalidateTodo();

    }
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
            <Stack width={'200px'} p={1} gap={1} sx={{ backgroundColor: 'lightcyan', borderRadius: '10px' }}>
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                    <Box sx={{ fontWeight: '700' }}>Todo</Box>
                    <div>
                        <IconButton sx={{ float: 'right' }}
                            id="demo-positioned-button"
                            aria-controls={open ? 'demo-positioned-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                        >
                            <MenuItem onClick={handleClickOpen}>Edit</MenuItem>
                            <MenuItem onClick={handleDelete}>Delete</MenuItem>
                        </Menu>
                    </div>
                </Stack>
                <Box>
                    {props.item.todo}
                </Box>
            </Stack>
            <MyDialog title="Edit todo" task={props.item.todo} open={openEdit} handleClose={handleCloseEdit}
                handleFormSubmit={handleEdit} />
        </>
    )
}

export default Card