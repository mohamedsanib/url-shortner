import mongoose, {Document, Model, Schema} from "mongoose";

const urlSchema = new mongoose.Schema(
    {
        originalUrl : {
            type : String,
            required : true,
            unique : true
        },
        shortUrl : {
            type : String,
            required : true,
            unique : true
        }
    },
    {
        timestamps : true
    }
);

export interface Iurl extends Document{
    originalUrl : string,
    shortUrl : string
}

const Url : Model<Iurl> = mongoose.models.Url || mongoose.model<Iurl>('Url', urlSchema);

export default Url;