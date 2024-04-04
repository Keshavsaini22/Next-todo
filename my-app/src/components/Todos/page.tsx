import { Box, } from '@mui/material'
import Card from '@/components/Card/page'

import React from 'react'
interface card {
    _id: string;
    todo: string;
    __v: number;
    _createdAt: string;
    _updatdAt: string;
}
function Todos(prop: any) {
    return (
        <Box m={2} display={'flex'} gap={2} flexWrap={'wrap'}>
            {prop.todo.map((item: card) => (< Box key={item._id}><Card item={item} /></Box>))}
        </Box>
    )
}

export default Todos