import {File} from "../models";
import {Types} from "mongoose";
import ApiError from "../exeptions/api-error";

class FileService {
    async getFile(file_name: string) {
        const file = await File.findOne({name: file_name}).lean().exec();
        if (!file) throw ApiError.BadRequest("Image not found");
        else {
            return {
                ...file,
            };
        }
    }

    async getFiles() {
        const files = await File.find().lean().exec();

        return files.map(file => ({
            ...file,
        }));
    }

    async createFile(name: string, contentType: string, fileId: Types.ObjectId) {
        const new_file = {
            name,
            fileId,
            contentType,
        };
        const created_file = await File.create(new_file);
        return {
            ...created_file,
        };
    }
}

export default new FileService();