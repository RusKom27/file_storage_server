
import fileRouter from "./file-router";

import express from "express";

const router = express.Router();

router.use('/api/file', fileRouter);

export default router;