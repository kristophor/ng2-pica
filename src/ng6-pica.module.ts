import { NgModule } from '@angular/core';
import { ImgExifService } from './img-exif.service';
import { Ng6PicaService } from "./ng6-pica.service";

@NgModule({
    providers: [
        {provide: Ng6PicaService, useClass: Ng6PicaService},
        {provide: ImgExifService, useClass: ImgExifService}
    ]
})
export class Ng6PicaModule {}