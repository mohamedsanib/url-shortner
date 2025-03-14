import { UrlShortnerService } from "@/services/UrlShortnerService";

export const shortenUrl = async (formData : FormData) => {
    'use server'

    const originalUrl : string = formData.get('originalUrl') as string;
    const shortenerService = new UrlShortnerService();
    const shortUrl = await shortenerService.shortenUrl(originalUrl);

}
