import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		const reqClone = request.clone({
			setHeaders: {
				'Content-type': 'application/json',
			},
			setParams: {
				ts: '1',
				apikey: 'fec724da5a8ac11f692746467ad20d86',
				hash: '8f7d4c3161aa079300daf876c3f7bcdb',
			},
		});

		return next.handle(reqClone);
	}
}
