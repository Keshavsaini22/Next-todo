'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()
  const handleClick = () => {
    router.push('todo')
  }
  return (
    <Box gap={3} flexDirection={'column'} width={'100vw'} height={'100vh'} display={'flex'} alignItems={'center'} justifyContent={'center'}>
      <Typography fontSize={'30px'} fontWeight={'600'}>Welcome ji welcome</Typography>
      <Button variant="contained" onClick={handleClick} >Move to todo page</Button>
    </Box>
  );
}
