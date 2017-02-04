import { CUImage } from './models/cu-image.class';
import { CUFile } from './models/cu-file.class';

export class FakeData {

    public static get Images(): Array<any> {
        
        return [
            {
                name: 'my photo',
                description: 'lovely photo mate',
                user: null,
                imageUrl: 'https://i.cubeupload.com/LOFgFo.png',
                filesize: 1000,
                albums: null
            },
            {
                name: 'my photo',
                description: 'lovely photo mate',
                user: null,
                imageUrl: 'https://i.cubeupload.com/LOFgFo.png',
                filesize: 1000,
                albums: null
            },
            {
                name: 'my photo',
                description: 'lovely photo mate',
                user: null,
                imageUrl: 'https://i.cubeupload.com/LOFgFo.png',
                filesize: 1000,
                albums: null
            }
        ]
    }

}