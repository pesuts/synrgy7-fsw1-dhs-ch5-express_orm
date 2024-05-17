import express, { Request, Response } from "express"

import {
  getAllArticles,
  getArticleById,
  updateArticleById,
  deleteArticleById,
  addArticleById
} from "../services/articleServices"

const router = express.Router()

router.get('/', getAllArticles);
router.post('/', addArticleById);
router.get('/:id', getArticleById);
router.put('/:id', updateArticleById);
router.delete('/:id', deleteArticleById);




export = router