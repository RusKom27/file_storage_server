import {Document, Types} from "mongoose";

interface IFile extends Document {
    _id: Types.ObjectId
    name: string
    contentType: string
    createdAt: Date;
    updatedAt: Date;
}

export default IFile;
// {
//     "_id": {
//     "$oid": "639b47f0a672f7cffc82c313"
// },
//     "name": "user1_avatar.png",
//     "image": {
//     "$binary": {
//         "base64": "iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA7EAA
//             "subType": "00"
//     }
// },
//     "contentType": "image/png",
//     "createdAt": {
//     "$date": {
//         "$numberLong": "1671120880826"
//     }
// },
//     "updatedAt": {
//     "$date": {
//         "$numberLong": "1671120880826"
//     }
// },
//     "__v": 0
// }