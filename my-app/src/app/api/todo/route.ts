import axios from "axios";
import { revalidatePath, revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
export const revalidate = 5;



export async function GET() {
    const response = await fetch("http://localhost:8000/todo",
        //  { next: { tags: ['todo'] } }
    )
    const res = await response.json();
    return NextResponse.json(res)
}

export async function POST(req: NextRequest) {
    const data = await req.json();
    console.log('body: ', data);
    const response = await fetch("http://localhost:8000/todo", {
        method: "POST",
        body: data
        // body: JSON.stringify(data)
    })

    const res = await response.json();
    return NextResponse.json(res)
}

