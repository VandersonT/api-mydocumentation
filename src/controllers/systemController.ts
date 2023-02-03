/*--------------------------Imports--------------------------*/
import { Request, Response } from 'express';
import * as system from '../handler/SystemHandler';
import sharp from 'sharp';
import { unlink } from 'fs/promises';
/*----------------------------------------------------------*/

export const getSystemStatus = async (req: Request, res: Response) => {

    let systemStatus = await system.getSystemStatus();

    if(systemStatus.length < 1){
        res.json({error: "|SevereError| Couldn't find any system information"});
        return;
    }

    res.json({error: "", systemStatus});
}

export const updateSystemStatus = async (req: Request, res: Response) => {
    
    let { status, id } = req.body;

    if(!status || !id){
        res.json({error: "You must submit a status and an id."});
        return;
    }
    
    let editedStatus = await system.updateSystemStatus(status, id);

    if(!editedStatus){
        res.json({error: "Couldn't find this id."});
        return;
    }

    res.json({error: ''});
}

export const getView = async(req: Request, res: Response) => {

    let views = await system.getView();

    res.json({error: "", views});
}

export const addView = async (req: Request, res: Response) => {

    let { ip } = req.body;
    
    if(!ip){
        res.json({error: "You must send us an ip."});
        return;
    }

    let addedView = await system.addView(ip);

    res.json({error: ""});
}

export const uploadFile = async (req: Request, res: Response) => {

    let { title, altText, author } = req.body;

    if(!title || !altText || !author){
        res.json({ error: 'You must submit the image information.' });
        return;
    }

    if(req.file){

        await sharp(req.file.path).toFile(`public/media/${req.file.filename}`);

        await unlink(req.file.path);

        /*At this point the image is already saved.
        So now we just need to save it in the database and return the result*/
        
        await system.saveMedia(title, req.file.filename, altText, author);

        res.json({ image: req.file.filename });

    }else{
        res.status(400);
        res.json({ error: 'Arquivo invalido.' });    
    }
}

export const deleteMedia = async (req: Request, res: Response) => {

    let { id } = req.params;

    if(!id){
        res.json({ error: 'You must submit an id to be deleted.' });
        return;
    }

    let deletedMedia = await system.deleteMedia(parseInt(id));

    if(!deletedMedia){
        res.json({ erro: "We couldn't find any media with that id." });
        return;
    }

    res.json({ error: '' })
}

export const getAllMedia = async (req: Request, res: Response) => {

    let medias = await system.getMedias();

    res.json({ error: '', medias });
}

export const getMedia = async (req: Request, res: Response) => {

    let { id } = req.params;

    if(!id){
        res.json({ error: 'You must submit an id to be searched.' });
        return;
    }

    let mediaFound = await system.getMedia(parseInt(id));

    if(!mediaFound){
        res.json({ error: "We couldn't find this id." });
        return;
    }

    res.json({ error: '', mediaFound });
}

export const updateMediaInfo = async (req: Request, res: Response) => {

    let { id } = req.params;
    let { title, altText } = req.body;

    if(!id){
        res.json({ error: 'You must submit an id to be searched.' });
        return;
    }

    let updatedMedia = await system.updateMedia(parseInt(id), title, altText);

    if(!updatedMedia){
        res.json({ error: "Couldn't find this id." });
        return;
    }

    res.json({ error: '', updatedMedia })

}

export const getGlobalData = async (req: Request, res: Response) => {

    let globalData = await system.getDatas();

    res.json({ error: '', globalData })
}