import { Observable, Observer } from 'rxjs';

//const obs$ = Observable.create()
const observer: Observer<any> = {

    next: value => console.log('next: ', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')

};

const intervalo$ = new Observable<number>( subscriber => {
    // Crear contador
    let count = 0;

    setInterval( () => {
        count++;

        subscriber.next(count);

    }, 2500);

});
