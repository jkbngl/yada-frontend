import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class DownloaderService {

    constructor(private http: HttpClient) { }


    downloadFormat(format: string, url: string) {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');

        const httpOptions = {
            responseType: 'blob' as 'json',
        };

        return this.http.get<any>(`http://192.168.178.38:8000/download/`, httpOptions)
            .toPromise()
            .then(res => <any>res)
            .then(data => {

                console.log("DOWNLOADED VIDEO")

                return data.text;
            });
    }
}
