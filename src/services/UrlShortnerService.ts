import UrlRepository from "@/repository/UrlRepository";
import shortId from "shortid";

export class UrlShortnerService{
    private urlRepository;

    constructor(){
        this.urlRepository = new UrlRepository();
    }

    async shortenUrl(originalUrl : string) : Promise<string> {
        let url = await this.urlRepository.getUrlByOriginal(originalUrl);
        if(url) return url.shortUrl;

        let shortUrl = shortId();
        url = await this.urlRepository.getUrlByShorten(shortUrl);
        while(url){
            shortUrl = shortId();
            url = await this.urlRepository.getUrlByShorten(shortUrl);
        }

        await this.urlRepository.createUrl(originalUrl, shortUrl);
        return shortUrl;
    }

    async getAllUrls(){
        return await this.urlRepository.getAllUrls();
    }

    async getUrlByShortUrl(shortUrl : string){
        return await this.urlRepository.getUrlByShorten(shortUrl);
    }
}