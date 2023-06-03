import mongoose, {Schema, Types} from "mongoose";
import {IFile} from "../interfaces";

const FileSchema: Schema = new Schema({
    name: {
        type: String,
        require: true,
    },
    fileId: {
        type: Types.ObjectId,
        required: true,
    },
    contentType: {
        type: String,
    },
}, {timestamps: true});

export default mongoose.model<IFile>('File', FileSchema, 'files');