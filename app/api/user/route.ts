import { NextRequest, NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({
        email: 'dadashj@dsfds.dfdf',
        name: "hkirat"
    })
}

export async function POST(req: NextRequest) {
    const body = await req.json();
    console.log(req.headers.get("authorization"))
    console.log(req.nextUrl.searchParams.get('name'))
    return NextResponse.json({
        message: "ho gaya",
        body,
    })
}