import { HttpErrorResponse, HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { catchError, retry, shareReplay, throwError } from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {

  const myHeaders = new HttpHeaders()
    .set('Content-Type', "application/xml")
    // .set('name', "Richard")

  // se quisermos adicionar headers na nossa requisição precisamos cloná-la e então adicioná-los
  const newReq = req.clone({ headers: myHeaders })

  // Dess forma, todas as nossas requisições vão ter um pipe, já que next(req) é um OBSERVABLE
  return next(newReq).pipe(
    shareReplay(),
    retry({count: 3, delay: 1000}),
    catchError((error: HttpErrorResponse)=>{


      console.log('toda requisição vai passar por um interceptor');

      if(error.status === 0){
        alert('Você está sem conexão com a internet!')
      }

      return throwError(()=> error.error);
    })
  );
};
