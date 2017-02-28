import { SharingOption } from './_sharing-options';

export class FullShare implements SharingOption {
    lol(url: string): string {
        return `http://cubeupload.com/image-page/${url}/?fullscreen=true`;
    }

    public getLink(url: string): string {
        return `<a href="${this.lol(url)}" target="_blank"><img src="${url}"</a>`;
    }
    
}