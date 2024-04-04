import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
interface props {
    title: string;
    open: boolean; handleClose: () => void;
    task?: string;
    handleFormSubmit: (event: React.FormEvent<HTMLFormElement>, data: string) => Promise<void>
}

function MyDialog(props: props) {
    const [data, setData] = useState<string>(props.task || "")

    return (
        <Dialog
            open={props.open}
            onClose={props.handleClose}
            PaperProps={{
                component: 'form',
                onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                    props.handleFormSubmit(event, data)
                    setData('')
                },
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
                    value={data}
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