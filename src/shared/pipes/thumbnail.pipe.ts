import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'thumbnail'
})

export class ThumbnailPipe implements PipeTransform {
    transform(file: any, ...args: any[]): Promise<string> {
        return new Promise<any>((resolve, reject) => {
            if (file) {
                var size = 400;
                var fileTracker = new FileReader;
                fileTracker.onload = function () {
                    var image = new Image();
                    image.onload = function () {
                        var canvas = document.createElement("canvas");
                        if(image.height > size) {
                            image.width *= size / image.height;
                            image.height = size;
                        }
                        // if (image.width > size) {
                        //     image.height *= size / image.width;
                        //     image.width = size;
                        // }
                        var ctx = canvas.getContext("2d");
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        canvas.width = image.width;
                        canvas.height = image.height;
                        ctx.drawImage(image, 0, 0, image.width, image.height);
                        resolve(canvas.toDataURL("image/png"));
                    };
                    image.src = this.result;
                }

                fileTracker.readAsDataURL(file);
                fileTracker.onabort = function () {
                    alert("The upload was aborted.");
                }
                fileTracker.onerror = function () {
                    alert("An error occured while reading the file.");
                }
            }
        });
    }
}