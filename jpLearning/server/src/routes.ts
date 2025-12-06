import express from 'express';
import { getWord, addWord } from './controller';

const router = express.Router();

router.get('/word/:word', getWord);
router.post('/word', addWord);

export default router;
