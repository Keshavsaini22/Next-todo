'use client'
import { Box, Button, IconButton, Menu, MenuItem, Stack } from '@mui/material'
import React, { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
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
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
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
                        <MenuItem onClick={handleClose}>Edit</MenuItem>
                        <MenuItem onClick={handleClose}>Delete</MenuItem>
                    </Menu>
                </div>
            </Stack>
            <Box>
                {props.item.todo}            </Box>
        </Stack>
    )
}

export default Card