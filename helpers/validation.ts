
export const getFile = (file: Express.Multer.File | undefined) => {
    if (!file) throw Error("File not found");
    else return file;
};