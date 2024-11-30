import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const client = new PrismaClient()

export function GET() {
    return NextResponse.json({
        email: 'dadashj@dsfds.dfdf',
        name: "hkirat"
    })
}

export async function POST(req: NextRequest) {
    // postgres + prisma
    try {
        const body = await req.json()
        await client.user.create({
            data: {
                username: body.username,
                password: body.password
            }
        })
        return NextResponse.json({
            message: "ho gaya",
            body,
        })
    }
    catch (err) {
        return NextResponse.json({
            message: "error while signing up",
            err,
        })
    }
}
