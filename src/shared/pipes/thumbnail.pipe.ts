import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'thumbnail'
})

export class ThumbnailPipe implements PipeTransform {
    transform(file: any, ...args: any[]): Promise<string> {
        return new Promise<any>((resolve, reject) => {
            if (file) {
                var reader = new FileReader();

                reader.onload = (event) => {
                    resolve(event.target['result']);
                }

                reader.readAsDataURL(file);
            }
        });
    }
}