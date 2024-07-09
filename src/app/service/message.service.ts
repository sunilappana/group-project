import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  url = 'http://localhost:8082/';

  send(data: any): Promise<any> {
    return fetch(this.url + 'message', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json',
      },
    }).then((res) => res.text());
  }

  getMessages(from: string, to: string): Promise<any> {
    console.log(to);
    return fetch(this.url + `messages/${from}/${to}`).then((res) => res.json());
  }}
