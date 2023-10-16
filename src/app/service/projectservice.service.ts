import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProjectserviceService {
 


  private baseUrl = 'http://localhost:9999';
  otp: string='';

 

  constructor(private http: HttpClient) { }

 

  login(credentials: any): Observable<any> {

    return this.http.post('${this.baseUrl}login', credentials);

  }

  servilogin(credentialss: any): Observable<any> {

    return this.http.post('${this.baseUrl}/servilogin', credentialss);

  }
  sendOtp(otpmodule: any): Observable<any> {

    return this.http.post(`${this.baseUrl}`+"/otp/send-otp", otpmodule);
  
  }
  
   
  
  validateOtp(otpValidationRequest: any): Observable<any> {
  
    return this.http.post(`${this.baseUrl}`+"/otp/validate-otp", otpValidationRequest);
  
  }

  viewcustomer()
  {
    return this.http.get(this.baseUrl+'/view');
  }

  viewpending()
  {
    return this.http.get(this.baseUrl+'/pending');
  }

  sendEmail(id:string):Observable<any>
  {
    return this.http.post(`${this.baseUrl}/email/${id}`, null);
  }

  phone(otpmodule: any): Observable<any> {

    return this.http.post(`${this.baseUrl}`+"/phone", otpmodule);

  }

  getpay()
  {
    return this.http.get(this.baseUrl+'/getpay');
  }

  
  paydet(customer: any): Observable<any> {

    return this.http.post('${this.baseUrl}login', customer);

  }

  paid(customer: any): Observable<any> {

    return this.http.post('${this.baseUrl}paid', customer);

  }

  admin(response: any): Observable<any> {

    return this.http.post('${this.baseUrl}admin', response);

  }

  update(response1: any): Observable<any> {

    return this.http.post('${this.baseUrl}update', response1);

  }

}
