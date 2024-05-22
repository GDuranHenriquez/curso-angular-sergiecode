import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miCutomPipe'
})
export class MiCutomPipePipe implements PipeTransform {

  transform(value: string | undefined): unknown {
    return value?.toUpperCase() || '';
  }

}
