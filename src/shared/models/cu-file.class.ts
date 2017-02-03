export interface CUFile {
    filesize: number,
    size: string
}

export class CUFile implements CUFile {
    constructor(filesize: number) {
        this.filesize = filesize;
        this.size = this.formattedFileSize(filesize);
    }

    formattedFileSize(filesize: number): string {
        return `${filesize} MB`; //TODO convert bytes to kb/mb etc
    }
}