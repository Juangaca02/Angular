import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'unixDate'
})
export class UnixDatePipe implements PipeTransform {
    transform(value: number): string {
        // Convertir el valor UNIX a milisegundos multiplicando por 1000
        //const date = new Date(value * 1000);
        //La base de datos ya me devuelve la hora milisegundos
        const date = new Date(value);
        // Formatear la fecha con horas y segundos (por ejemplo: "dd/mm/aaaa hh:mm:ss")
        return date.toLocaleString();
    }
}
