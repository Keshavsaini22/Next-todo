import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {

    const { id } = params
    console.log('id: ', id)
    const response = await fetch(`http://localhost:8000/todo/${id}`, {
        method: "DELETE",
    })
    const res = await response.json();
    return NextResponse.json(res)
}

export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    const data = await req.json();
    const { id } = params
    console.log('id: ', id)
    const response = await fetch(`http://localhost:8000/todo/${id}`, {
        method: "PUT",
        body: data
    })
    const res = await response.json();
    return NextResponse.json(res)
}