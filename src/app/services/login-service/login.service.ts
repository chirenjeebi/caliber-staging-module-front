import { environment } from 'src/environments/environment.prod';
import { ClientMessage } from './../../models/client-message-model/client-message-model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public managerId:number = 0;
  constructor(private client:HttpClient) { }

  //This method will retrieve the manger ID associated with the email address provided.
storeManagerIdFromServer(email:string)
{
  console.log("In MangerID retriever! " + "Email is: " +email)
  this.client.post<ClientMessage>(`${environment.BASE_URL}getmanager`,new ClientMessage(email)).subscribe(
    data => {
      this.managerId = parseInt(data.message)
      sessionStorage.setItem('managerId', JSON.stringify(this.managerId));
      console.log(sessionStorage.getItem('managerId'));
      console.log("Manager ID: " + this.managerId)
    }


  )
}


}
