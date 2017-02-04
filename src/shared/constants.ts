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

    public static API_Image_Get(id: number): string {
        return `${this.API_Base}}/images/${id}`;
    }

    public static get Image_Thumb_URL_Prepend(): string {
        return `/t/`
    }
    
}