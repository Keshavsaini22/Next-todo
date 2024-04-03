import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
interface props {
    title: string;
    open: boolean; handleClose: () => void;
}

function MyDialog(props: props) {
    const [data, setData] = useState<string>('')
    const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await fetch("http://localhost:3000/api/todo", {
            method: "POST",
            body: JSON.stringify(data)
        })
        console.log('response: ', response);
        props.handleClose();
    }
    return (
        <Dialog
            open={props.open}
            onClose={props.handleClose}
            PaperProps={{
                component: 'form',
                onSubmit: handleFormSubmit,
            }}
        >
            <DialogTitle sx={{ width: '400px' }}>{props.title}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    This is the dialog content text
                </DialogContentText>
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="name"
                    name="email"
                    fullWidth
                    variant="standard"
                    onChange={(e) => {
                        setData(e.target.value)
                    }}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose}>Cancel</Button>
                <Button type="submit">Add</Button>
            </DialogActions>
        </Dialog>
    )
}

export default MyDialog