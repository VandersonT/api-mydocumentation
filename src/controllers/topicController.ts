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

    const { title, content, module_id, image, metaTags,doc_id, slug, description } = req.body;

    if(!title || !content || !module_id || !image || !metaTags || !description || !slug || !doc_id){ 
        res.json({error: "Don't send empty fields."});
        return;
    }

    let createdTopic = await topic.createTopic(title, content, module_id, image, metaTags, slug, description, doc_id);

    res.json({error: "", createdTopic});
}

export const updateTopic = async (req: Request, res: Response) => {

    const { id } = req.params;
    const { title, content, module_id, image, metaTags, description, slug } = req.body;

    if(!id){
        res.json({error: "You must send an id."});
        return;
    }

    let updatedTopic = await topic.updateTopic(parseInt(id), title, content, parseInt(module_id), image, metaTags, description, slug );

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

export const getTopicByDoc = async (req: Request, res: Response) => {

    const { id } = req.params;

    let topics = await topic.getTopicsByDoc(parseInt(id));

    res.json({error: "", topics});
}

export const getTopicBySlug = async (req: Request, res: Response) => {

    let { slug } = req.params;

    let topicFound = await topic.getTopicBySlug(slug);

    if(!topicFound){
        res.json({ error: "We couldn't find this topic." });
        return;
    }

    res.json({ error: '', topicFound });
}

export const getTopicByName = async (req: Request, res: Response) => {

    let { search, docId } = req.params;

    if(!search || !docId){
        res.json({ error: 'You must submit a search AND a docId.' });
        return;
    }

    let topicFound = await topic.getTopicByName(search, parseInt(docId));

    if(!topicFound){
        res.json({ error: "We couldn't find nothing with that search." });
        return;
    }

    res.json({ error: '', topicFound });
}