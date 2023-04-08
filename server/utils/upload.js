

import {GridFsStorage} from 'multer-gridfs-storage';
import dotenv from 'dotenv'
import multer from 'multer'


dotenv.config();

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;


const storage = new GridFsStorage({
  url: `mongodb+srv://admin:admin@blog-app.52erq8f.mongodb.net/blog-app?retryWrites=true&w=majority`,
  options: { useNewUrlParser: true },
  file: (request, file) => {
    const match = ["image/png", "image/jpg"];

    if (match.indexOf(file.memeType) === -1) {
      return `${Date.now()}-blog-${file.originalname}`;
    }
    return {
      bucketName: "photos",
      fienam: `${Date.now()}-blog-${file.originalname}`,
    };
  },
});

export default multer({storage});