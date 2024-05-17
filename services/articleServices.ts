import { Articles, ArticlesModel } from '../model/article.model';
import express, { Request, Response } from "express"


export const getAllArticles = async (_: any, res: Response) => {

  // const articles = await ArticlesModel.query();
  const articles = await ArticlesModel.query()
    .withGraphFetched('comments');

  res.status(200).json({ status: "Success", data: articles });
};

export const getArticleById = async (req: Request, res: Response) => {
  const id = req.params.id;
  
  const article = await ArticlesModel.query().where("id", id).withGraphFetched('comments');
  // const comments = await ArticlesModel.query().where("id", id);

  res.status(200).json({ status: "Success", data: article });
};

export const addArticleById = async (req: Request, res: Response) => {
  const { title, body, isApproved } = req.body;

  const article = await ArticlesModel.query().insert({ body, isApproved, title});
  
  res.status(201).json({ status: "Success", message: "Data sucesfully added", data: article });
};

export const updateArticleById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const { title, body } = req.body;

  await ArticlesModel.query().where("id", id).update({ title, body });

  const article = await ArticlesModel.query().where("id", id);

  res.status(200).json({status: "Success", message: "Data sucesfully updated", data: article})
};

export const deleteArticleById = async (req: Request, res: Response) => {
  const id = req.params.id;

  await ArticlesModel.query().deleteById(id);

  res.status(200).json({ status: "Success", message: "Data sucesfully deleted" });
};
