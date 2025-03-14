import { UrlShortnerService } from "@/services/UrlShortnerService";
import { NextResponse } from "next/server";

export async function GET() {
    const shortnerService = new UrlShortnerService();
    const response = await shortnerService.getAllUrls();
    return NextResponse.json({response}); 
} 