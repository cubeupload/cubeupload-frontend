export class CUFile implements CUFile {
    filesize: number; 
    
    constructor(filesize: number) {
        this.filesize = filesize; 
    }

    filesizeFormatted(): string {
        return `${this.filesize} MB`; //TODO convert bytes to kb/mb etc
    }
}