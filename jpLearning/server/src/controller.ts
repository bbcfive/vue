import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getWord = async (req: Request, res: Response) => {
  const { word } = req.params;

  try {
    const wordData = await prisma.word.findUnique({
      where: { word },
    });

    if (wordData) {
      res.json(wordData);
    } else {
      res.status(404).json({ message: 'Word not found' });
    }
  } catch (error) {
    console.error('Error fetching word:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

export const addWord = async (req: Request, res: Response) => {
  const { word, meaning, example } = req.body;

  try {
    const newWord = await prisma.word.create({
      data: { word, meaning, example },
    });
    res.status(201).json(newWord);
  } catch (error) {
    console.error('Error adding word:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
