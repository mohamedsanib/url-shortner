import { UrlShortnerService } from "@/services/UrlShortnerService";
import { NextResponse } from "next/server";

export async function POST(req : Request){
    const {originalUrl} = await req.json();
    const shortnerService = new UrlShortnerService();
    const shortUrl = await shortnerService.shortenUrl(originalUrl);

    console.log("shorten Url --- " , shortUrl);
    return NextResponse.json({msg : shortUrl});
}