import Url, { Iurl } from "@/models/url";
import connectDB from "@/config/db";


class UrlRepository{
    private urlModel;

    constructor(){
        connectDB();
        console.log('DB connecting...');
        this.urlModel = Url;
    }

    async getUrlById(id : string) : Promise<Iurl | null>{
        return await this.urlModel.findById(id).lean();
    }

    async getUrlByShorten(shortUrl : string) : Promise<Iurl | null>{
        return await this.urlModel.findOne({shortUrl}).lean();
    }

    async getUrlByOriginal(originalUrl : string) : Promise<Iurl | null>{
        return await this.urlModel.findOne({originalUrl}).lean();
    }

    async getAllUrls() : Promise<Iurl[] | null>{
        return this.urlModel.find().lean();
    }

    async deleteUrl(id : string) : Promise<Iurl | null>{
        return await this.urlModel.findByIdAndDelete(id).lean();
    }

    async createUrl(originalUrl : string, shortUrl : string) : Promise<Iurl>{
        return await this.urlModel.create({shortUrl, originalUrl});
    }
}

export default UrlRepository;