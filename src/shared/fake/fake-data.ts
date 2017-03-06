import { Observable } from 'rxjs';
import { CUImage, CUAlbum, CUUser, CUFile } from './../models/_cu-models.provider';
import { SharingOption } from './../models/sharing/_sharing-options';
import { CUUserPreferences } from './../../shared/models/cu-user-preferences.class';
import { QuickShare } from '../../shared/models/sharing/quick-share.option';
import { FullShare } from '../../shared/models/sharing/full-share.option';

export class FakeData {

    public static get Images(): Array<any> {

        return [
            {
                id: "0",
                name: 'Impressionism at its best',
                description: 'Pretty colurs',
                user: null,
                imageUrl: 'http://u.cubeupload.com/GabrielMSharp/521e267fa8c01b3281d8.jpg',
                filesize: 1000,
                albums: null,
                createdAt: '2017-01-05 09:00:00',
                updatedAt: '2017-01-05 09:00:00',
            },
            {
                id: "1",
                name: 'Play Poster',
                description: 'Big old elephant innit',
                user: null,
                imageUrl: 'http://u.cubeupload.com/GabrielMSharp/justso.jpg',
                filesize: 1000,
                albums: null,
                createdAt: '2017-01-05 09:00:00',
                updatedAt: '2017-01-05 09:00:00',
            },
            {
                id: "2",
                name: 'DefineFor.Me',
                description: 'Simple Dictionary Website',
                user: null,
                imageUrl: 'http://u.cubeupload.com/GabrielMSharp/define1.png',
                filesize: 1000,
                albums: null,
                createdAt: '2017-01-05 09:00:00',
                updatedAt: '2017-01-05 09:00:00',
            },
            {
                id: "3",
                name: 'Play Poster',
                description: 'Big old elephant innit',
                user: null,
                imageUrl: 'http://u.cubeupload.com/GabrielMSharp/justso.jpg',
                filesize: 1000,
                albums: null,
                createdAt: '2017-01-05 09:00:00',
                updatedAt: '2017-01-05 09:00:00',
            },
            {
                id: "4",
                name: 'DefineFor.Me',
                description: 'Simple Dictionary Website',
                user: null,
                imageUrl: 'http://u.cubeupload.com/GabrielMSharp/define1.png',
                filesize: 1000,
                albums: null,
                createdAt: '2017-01-05 09:00:00',
                updatedAt: '2017-01-05 09:00:00',
            },
            {
                id: "5",
                name: 'Impressionism at its best',
                description: 'Pretty colurs',
                user: null,
                imageUrl: 'http://u.cubeupload.com/GabrielMSharp/521e267fa8c01b3281d8.jpg',
                filesize: 1000,
                albums: null,
                createdAt: '2017-01-05 09:00:00',
                updatedAt: '2017-01-05 09:00:00',
            },
            {
                id: "6",
                name: 'Play Poster',
                description: 'Big old elephant innit',
                user: null,
                imageUrl: 'http://u.cubeupload.com/GabrielMSharp/justso.jpg',
                filesize: 1000,
                albums: null,
                createdAt: '2017-01-05 09:00:00',
                updatedAt: '2017-01-05 09:00:00',
            },
            {
                id: "7",
                name: 'DefineFor.Me',
                description: 'Simple Dictionary Website',
                user: null,
                imageUrl: 'http://u.cubeupload.com/GabrielMSharp/define1.png',
                filesize: 1000,
                albums: null,
                createdAt: '2017-01-05 09:00:00',
                updatedAt: '2017-01-05 09:00:00',
            },
            {
                id: "8",
                name: 'Impressionism at its best',
                description: 'Pretty colurs',
                user: null,
                imageUrl: 'http://u.cubeupload.com/GabrielMSharp/521e267fa8c01b3281d8.jpg',
                filesize: 1000,
                albums: null,
                createdAt: '2017-01-05 09:00:00',
                updatedAt: '2017-01-05 09:00:00',
            },
            {
                id: "9",
                name: 'Play Poster',
                description: 'Big old elephant innit',
                user: null,
                imageUrl: 'http://u.cubeupload.com/GabrielMSharp/justso.jpg',
                filesize: 1000,
                albums: null,
                createdAt: '2017-01-05 09:00:00',
                updatedAt: '2017-01-05 09:00:00',
            },
            {
                id: "10",
                name: 'DefineFor.Me',
                description: 'Simple Dictionary Website',
                user: null,
                imageUrl: 'http://u.cubeupload.com/GabrielMSharp/define1.png',
                filesize: 1000,
                albums: null,
                createdAt: '2017-01-05 09:00:00',
                updatedAt: '2017-01-05 09:00:00',
            },
            {
                id: "11",
                name: 'Impressionism at its best',
                description: 'Pretty colurs',
                user: null,
                imageUrl: 'http://u.cubeupload.com/GabrielMSharp/521e267fa8c01b3281d8.jpg',
                filesize: 1000,
                albums: null,
                createdAt: '2017-01-05 09:00:00',
                updatedAt: '2017-01-05 09:00:00',
            },
            {
                id: "12",
                name: 'Play Poster',
                description: 'Big old elephant innit',
                user: null,
                imageUrl: 'http://u.cubeupload.com/GabrielMSharp/justso.jpg',
                filesize: 1000,
                albums: null,
                createdAt: '2017-01-05 09:00:00',
                updatedAt: '2017-01-05 09:00:00',
            }
        ]
    }

    public static get Albums(): Array<any> {
        return [
            {
                id: "0",
                name: 'My Holiday Snaps lol',
                description: 'Paris 2016',
                user: null,
                images: this.Images,
                albumUrl: 'http://cubeupload.com/albums/0',
                thumbUrl: 'https://u.cubeupload.com/masterotaku/t/XANADU002.jpg',
                createdAt: '2017-01-05 09:00:00',
                updatedAt: '2017-01-05 09:00:00',
            },
            {
                id: "1",
                name: 'Nudes dont look plz',
                description: 'mybutt and other nice memories',
                user: null,
                images: this.Images,
                albumUrl: 'http://cubeupload.com/albums/1',
                thumbUrl: 'https://u.cubeupload.com/masterotaku/t/XANADU002.jpg',
                createdAt: '2017-01-05 09:00:00',
                updatedAt: '2017-01-05 09:00:00',
            },
            {
                id: "2",
                name: 'Gaming Screenshots',
                description: 'first accurate fake album yet',
                user: null,
                images: this.Images,
                albumUrl: 'http://cubeupload.com/albums/2',
                thumbUrl: 'https://u.cubeupload.com/masterotaku/t/XANADU002.jpg',
                createdAt: '2017-01-05 09:00:00',
                updatedAt: '2017-01-05 09:00:00',
            }
        ];
    }

    public static get Preferences(): {} {
        let prefs = {
            sharingOptions: [
                {
                    name: 'Share',
                    description: 'Image on a webpage',
                    enabled: true,
                    order: 0,
                    strategyId: '1002',
                },
                {
                    name: 'Direct',
                    description: 'Direct link to the image.',
                    enabled: true,
                    order: 1,
                    strategyId: '1001',
                }
            ]
        }
        return prefs;
    }
}