import { CUImage } from './../models/cu-image.class';
import { CUAlbum } from './../models/cu-album.class';
import { CUFile } from './../models/cu-file.class';

export class FakeData {

    public static get Images(): Array<any> {
        
        return [
            {
                id: "0",
                name: 'Impressionism at its best',
                description: 'Pretty colurs',
                user: null,
                createdAt: '2017-01-05 09:00:00',
                updatedAt: '2017-01-05 09:00:00',
                imageUrl: 'http://u.cubeupload.com/GabrielMSharp/521e267fa8c01b3281d8.jpg',
                filesize: 1000,
                albums: null
            },
            {
                id: "1",
                name: 'Play Poster',
                description: 'Big old elephant innit',
                user: null,
                createdAt: '2017-01-05 09:00:00',
                updatedAt: '2017-01-05 09:00:00',
                imageUrl: 'http://u.cubeupload.com/GabrielMSharp/justso.jpg',
                filesize: 1000,
                albums: null
            },
            {
                id: "2",
                name: 'DefineFor.Me',
                description: 'Simple Dictionary Website',
                user: null,
                createdAt: '2017-01-05 09:00:00',
                updatedAt: '2017-01-05 09:00:00',
                imageUrl: 'http://u.cubeupload.com/GabrielMSharp/define1.png',
                filesize: 1000,
                albums: null
            },
            {
                id: "3",
                name: 'Play Poster',
                description: 'Big old elephant innit',
                user: null,
                createdAt: '2017-01-05 09:00:00',
                updatedAt: '2017-01-05 09:00:00',
                imageUrl: 'http://u.cubeupload.com/GabrielMSharp/justso.jpg',
                filesize: 1000,
                albums: null
            },
            {
                id: "4",
                name: 'DefineFor.Me',
                description: 'Simple Dictionary Website',
                user: null,
                createdAt: '2017-01-05 09:00:00',
                updatedAt: '2017-01-05 09:00:00',
                imageUrl: 'http://u.cubeupload.com/GabrielMSharp/define1.png',
                filesize: 1000,
                albums: null
            },
            {
                id: "5",
                name: 'Impressionism at its best',
                description: 'Pretty colurs',
                user: null,
                createdAt: '2017-01-05 09:00:00',
                updatedAt: '2017-01-05 09:00:00',
                imageUrl: 'http://u.cubeupload.com/GabrielMSharp/521e267fa8c01b3281d8.jpg',
                filesize: 1000,
                albums: null
            },
            {
                id: "6",
                name: 'Play Poster',
                description: 'Big old elephant innit',
                user: null,
                createdAt: '2017-01-05 09:00:00',
                updatedAt: '2017-01-05 09:00:00',
                imageUrl: 'http://u.cubeupload.com/GabrielMSharp/justso.jpg',
                filesize: 1000,
                albums: null
            },
            {
                id: "7",
                name: 'DefineFor.Me',
                description: 'Simple Dictionary Website',
                user: null,
                createdAt: '2017-01-05 09:00:00',
                updatedAt: '2017-01-05 09:00:00',
                imageUrl: 'http://u.cubeupload.com/GabrielMSharp/define1.png',
                filesize: 1000,
                albums: null
            },
            {
                id: "8",
                name: 'Impressionism at its best',
                description: 'Pretty colurs',
                user: null,
                createdAt: '2017-01-05 09:00:00',
                updatedAt: '2017-01-05 09:00:00',
                imageUrl: 'http://u.cubeupload.com/GabrielMSharp/521e267fa8c01b3281d8.jpg',
                filesize: 1000,
                albums: null
            },
            {
                id: "9",
                name: 'Play Poster',
                description: 'Big old elephant innit',
                user: null,
                createdAt: '2017-01-05 09:00:00',
                updatedAt: '2017-01-05 09:00:00',
                imageUrl: 'http://u.cubeupload.com/GabrielMSharp/justso.jpg',
                filesize: 1000,
                albums: null
            },
            {
                id: "10",
                name: 'DefineFor.Me',
                description: 'Simple Dictionary Website',
                user: null,
                createdAt: '2017-01-05 09:00:00',
                updatedAt: '2017-01-05 09:00:00',
                imageUrl: 'http://u.cubeupload.com/GabrielMSharp/define1.png',
                filesize: 1000,
                albums: null
            },
            {
                id: "11",
                name: 'Impressionism at its best',
                description: 'Pretty colurs',
                user: null,
                createdAt: '2017-01-05 09:00:00',
                updatedAt: '2017-01-05 09:00:00',
                imageUrl: 'http://u.cubeupload.com/GabrielMSharp/521e267fa8c01b3281d8.jpg',
                filesize: 1000,
                albums: null
            },
            {
                id: "12",
                name: 'Play Poster',
                description: 'Big old elephant innit',
                user: null,
                createdAt: '2017-01-05 09:00:00',
                updatedAt: '2017-01-05 09:00:00',
                imageUrl: 'http://u.cubeupload.com/GabrielMSharp/justso.jpg',
                filesize: 1000,
                albums: null
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
                createdAt: '2017-01-05 09:00:00',
                updatedAt: '2017-01-05 09:00:00',
                images: [
                    this.Images
                ]
            },
            {
                id: "1",
                name: 'Nudes dont look plz',
                description: 'mybutt and other nice memories',
                user: null,
                createdAt: '2017-01-05 09:00:00',
                updatedAt: '2017-01-05 09:00:00',
                images: [
                    this.Images
                ]
            }
        ];
    }

}