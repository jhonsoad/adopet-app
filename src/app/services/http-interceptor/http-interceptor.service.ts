import { HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let headers = req.headers;

    headers = headers.append('ngrok-skip-browser-warning', 'true')

    const modifiedRequest = req.clone({
      headers: headers
    });

    return next.handle(modifiedRequest);
  }
}




