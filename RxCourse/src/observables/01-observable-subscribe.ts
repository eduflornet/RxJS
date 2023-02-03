import { Observable, Observer } from 'rxjs';

//const obs$ = Observable.create()
const observer: Observer<any> = {

    next: value => console.log('siguiente [next]: ', value),
    error: error => console.warn('error [obs]:', error),
    complete: () => console.info('completador [obs]')
} 

const obs$ = new Observable<string>( subscriber => {

    subscriber.next('Hola');
    subscriber.next('Edu');

    subscriber.next('Hola');
    subscriber.next('Astro');

    // forzar error
    //const a = undefined;
    //a.nombre = 'Edu';

    subscriber.complete();

    subscriber.next('Hola');
    subscriber.next('Astrito');
    

});

obs$.subscribe( 
    valor => console.log('next', valor), 
    error => console.warn('error: ', error),
    () => console.info('Completado')
    );

    // resp proceso el next del subscriber

    obs$.subscribe(observer)
