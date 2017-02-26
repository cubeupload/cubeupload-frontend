export class Constants {

    public static get API_Base(): string {
        return `/api/${this.API_Version}`;
    }

    public static get API_Version(): number {
        return 1;
    }

    public static API_Images_Get(): string {
        return `${this.API_Base}/images`;
    }

    public static get API_Image_Get(): string {
        return `${this.API_Base}/image/`;
    }

    public static API_Image_Get_With_ID(id: number): string {
        return `${this.API_Image_Get}${id}`;
    }

    public static get Image_Thumb_URL_Prepend(): string {
        return `t/`
    }

    public static API_Albums_Get(): string {
        return `${this.API_Base}/albums`;
    }

    public static get API_Album_Get(): string {
        return `${this.API_Base}/album/`;
    }

    public static API_Album_Get_With_ID(id: number): string {
        return `${this.API_Album_Get}${id}`;
    }

    public static get Album_Thumb_URL_Prepend(): string {
        return `t/`
    }
    
}