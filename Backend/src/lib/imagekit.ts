import ImageKit from '@imagekit/nodejs';
import type { Request, Response } from 'express';

const client = new ImageKit({
  privateKey: process.env['IMAGEKIT_PRIVATE_KEY'], // This is the default and can be omitted
});

export const generateUploadAuth = (req: Request, res: Response) => {
    const { token, expire, signature} = client.helper.getAuthenticationParameters();
    console.log('Token : ',token, 'Expire : ',expire, 'Signature : ',signature);
    res.send({token, expire, signature, publicKey: process.env.IMAGEKIT_PUBLIC_KEY });
}

export const uploadVideo = (req: Request, res: Response) => {
    const { file } = req.body;
    console.log('File : ',file);
    res.send({message: 'Video uploaded successfully'});
}
