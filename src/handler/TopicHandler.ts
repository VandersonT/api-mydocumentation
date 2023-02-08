/*

    NOTE: This file is just for dealing with the topics database
    
*/

/*--------------------------Imports--------------------------*/
import { Topic } from '../models/Topic';
import * as helper from '../handler/HelperHandler';
import { Op } from 'sequelize';
/*-----------------------------------------------------------*/

export const getTopics = async () => {

    let topics = await Topic.findAll();

    return topics;
}

export const getTopic = async (id: number) => {

    let topic = await Topic.findByPk(id);

    return topic;
}

export const createTopic = async (title: string, content: Text, module_id: number, image: string, meta_tags: string, slug: string, description: Text, doc_id: number) => {

    let createdTopic = await Topic.create({
        title,
        content,
        module_id,
        image,
        meta_tags,
        doc_id,
        slug,
        description
    });

    return createdTopic;
}

export const updateTopic = async (id: number, title: string, content: Text, module_id: number, image: string, metaTags: string, description: Text, slug: string ) => {
    let topicFound = await Topic.findByPk(id);

    if(topicFound){
        if(title) topicFound.title = title;
        if(content) topicFound.content = content;
        if(module_id) topicFound.module_id = module_id;
        if(image) topicFound.image = image;
        if(metaTags) topicFound.meta_tags = metaTags;
        if(description) topicFound.description = description;
        if(slug) topicFound.slug = slug;
        await topicFound.save();

        return topicFound;
    }

    return false;
}

export const deleteTopic = async (id: number) => {

    let deletedTopic = await Topic.destroy({ where: {id}});

    return deletedTopic;
}

export const getTopicsByDoc = async (id: number) => {

    let topics = await Topic.findAll({
        where: {doc_id: id}
    });

    return topics;
}

export const getTopicBySlug = async (slug: string) => {

    let topic = await Topic.findOne({
        where: {
            slug
        }
    });

    return topic;
}

export const getTopicByName = async (search: string, doc_id: number) => {
     
    let topic = await Topic.findOne({
        where: {
            doc_id,
            title: {
                [Op.like]: `%${search}%`
            }
        }
    });

    return topic;
}