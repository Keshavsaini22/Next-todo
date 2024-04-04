'use server'
import { revalidateTag } from "next/cache";

export async function rvalidateTodo() {
    revalidateTag('newtag')
}