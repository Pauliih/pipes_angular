import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domseguro'
})

// Este pipe elimina el error por url insegura
export class DomseguroPipe implements PipeTransform {

  constructor( private domSanitizer: DomSanitizer){ }

  transform(value: String, url: string): any {
    return this.domSanitizer.bypassSecurityTrustResourceUrl(url + value);
  }

}
