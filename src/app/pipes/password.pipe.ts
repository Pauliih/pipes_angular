import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value, activar: Boolean): any {

    if(activar){
      let encrypt: String = "";
      for (let i in value) {
        // encrypt += value[i].replace(value[i],"*");
        encrypt += "*";
      }
    return encrypt;
    }
    else{
      return value;
    }
  }

}
