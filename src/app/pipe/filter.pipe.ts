import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {



  transform(products:any[],filterString:string,propName:string) {
    const result:any=[];
    if(!products || filterString==''||propName==''){
      return products
    }
    products.forEach((chocolate:any)=>{
     if  (chocolate[propName].trim().toLowerCase().includes(filterString)){
      result.push(chocolate)

      }
    })


    return result;
  }
}
