import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'round'
})
export class RoundPipe implements PipeTransform{
    transform(value:number,precision:number=0):number{
        const factor=Math.pow(10,precision);
        return Math.round(value*factor)/factor;
    }
}