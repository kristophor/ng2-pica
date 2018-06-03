# ng2-pica

Rxjs 6 and angular update for [https://github.com/bergben/ng2-pica](https://github.com/bergben/ng2-pica)\

All development credit goes to: [bergben](https://www.npmjs.com/~bergben)

Angular wrapper for <a href="https://github.com/nodeca/pica">pica</a> to resize images. 

## Install Angular 6 & rxjs 6 temporarily fix

```bash
$ npm install ng6-pica --save
```

## Install Angular 5 please see orignal author
[https://www.npmjs.com/package/ng2-pica](https://www.npmjs.com/package/ng2-pica)
```bash
$ npm install ng2-pica --save
```

### Import the module
```TypeScript
// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng6PicaModule } from 'ng2-pica'; // <-- import the module
import { MyComponent } from './my.component';

@NgModule({
    imports: [BrowserModule,
              Ng6PicaModule // <-- include it in your app module
             ],
    declarations: [MyComponent],  
    bootstrap: [MyComponent]
})
export class MyAppModule {}
```
## Usage
```TypeScript
import { Ng6PicaService } from 'ng6-pica';

@Injectable()
export class ImgMaxPXSizeService {
    constructor(private ng2PicaService: Ng6PicaService) {
      this.ng2PicaService.resize([someFile], newWidth, newHeight).subscribe((result)=>{
            //all good, result is a file
            console.info(result);
      }, error =>{
            //something went wrong 
            console.error(error);
      });
    }
}
```

## Methods
 All Document refers back to original Author: 
 [https://www.npmjs.com/package/ng2-pica](https://www.npmjs.com/package/ng2-pica)
### `.resize(files: File[], width: number, height: number, keepAspectRatio: boolean = false): Observable<any>`
### `resizeCanvas(from: HTMLCanvasElement, to: HTMLCanvasElement, options: resizeCanvasOptions): Promise<HTMLCanvasElement>`
### `resizeBuffer(options: resizeBufferOptions): Promise<Uint8Array>`
