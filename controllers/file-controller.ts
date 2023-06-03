import mongoose from "mongoose";
import {GridFSBucket} from "mongodb";
import {NextFunction, Request, Response} from "express";
import {getFile} from "../helpers/validation";
import {FileService} from "../service";
import ApiError from "../exeptions/api-error";

const conn = mongoose.connection;
let gfs: GridFSBucket;

mongoose.connection.once('open', () => {
    gfs = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: "uploads",
    });
});

class FileController {
    async upload(req: Request, res: Response, next: NextFunction) {
        try {
            const file = getFile(req.file) as any;

            const image = await FileService.createFile(
                file.originalname,
                file.mimetype,
                file.id,
            );
            return res.status(200).send(image);

        } catch (err: any) {
            next(err);
        }
    }

    async getAll(req: Request, res: Response, next: NextFunction) {
        try {
            const images = await FileService.getFiles();
            return res.status(200).send({
                images,
            });
        } catch (err: any) {
            next(err);
        }
    }

    async getByFileName(req: Request, res: Response, next: NextFunction) {
        try {
            const files = await gfs.find({filename: req.params.filename}).toArray();
            if (files.length <= 0) throw ApiError.BadRequest("File not found!");
            return gfs
                .openDownloadStreamByName(req.params.filename)
                .pipe(res);
        } catch (err: any) {
            next(err);
        }
    }
}

export default new FileController();