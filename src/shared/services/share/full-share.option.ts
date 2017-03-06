import { SharingOption } from './_sharing-options';

export class FullShare implements SharingOption {

    uniqueId: number = 1002;
    
    public getLink(url: string): string {
        return `<a href="http://cubeupload.com/image-page/${url}/?fullscreen=true" target="_blank"><img src="${url}"</a>`;
    }
    
}