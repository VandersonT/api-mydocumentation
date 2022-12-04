/*--------------------------Imports--------------------------*/
import { Request, Response } from 'express';
import * as topic from '../handler/TopicHandler';
/*----------------------------------------------------------*/

export const getTopics = async (req: Request, res: Response) => {

    let topics = await topic.getTopics();

    res.json({error: "", topics});
}

export const getTopic = async (req: Request, res: Response) => {

    const { id } = req.params;

    let topicFound = await topic.getTopic(parseInt(id));

    if(!topicFound){
        res.json({error: "We couldn't find that topic."});
        return;
    }

    res.json({error: "", topicFound});
}

export const createANewTopic = async (req: Request, res: Response) => {

    const { title, content, module_id, image, metaTags } = req.body;

    if(!title || !content || !module_id || !image || !metaTags){ 
        res.json({error: "Don't send empty fields."});
        return;
    }

    let createdTopic = await topic.createTopic(title, content, module_id, image, metaTags);

    res.json({error: "", createdTopic});
}

export const updateTopic = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { title, content, module_id, image, metaTags } = req.body;

    if(!id){
        res.json({error: "You must send an id."});
        return;
    }

    let updatedTopic = await topic.updateTopic(parseInt(id), title, content, parseInt(module_id), image, metaTags);

    if(!updatedTopic){
        res.json({error: "We couldn't find that topic."});
        return;
    }

    res.json({error: ""});
}

export const deleteTopic = async (req: Request, res: Response) => {

    const { id } = req.params;

    if(!id){
        res.json({error: "You must send an id."});
        return;
    }

    let deletedTopic = await topic.deleteTopic(parseInt(id));

    if(!deletedTopic){
        res.json({error: "We couldn't find that topic."});
        return;
    }

    res.json({error: ""});
}