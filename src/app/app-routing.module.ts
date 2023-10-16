import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { CustomerServiceComponent } from './customer-service/customer-service.component';
import { CustomerComponent } from './customer/customer.component';
import { AppComponent } from './app.component';
import { IssuesComponent } from './customer/issues/issues.component';
import { PaymentComponent } from './customer/payment/payment.component';
import { CustomerDetailsComponent } from './admin/customer-details/customer-details.component';
import { PendingComponent } from './customer-service/pending/pending.component';
import { OtherIssuesComponent } from './customer/other-issues/other-issues.component';
import { InstallmentComponent } from './customer/installment/installment.component';


const routes: Routes = [

  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'admin',
    component:AdminComponent
  },
  {
    path:'servi',
    component:CustomerServiceComponent
  },
  {
    path:'customer',
    component:CustomerComponent
  },
  {
    path:'issues',
    component:IssuesComponent
  },
  {
    path:'pay',
    component:PaymentComponent
  },
  {
    path:'payinstall',
    component:InstallmentComponent
  },
  {
    path:'details',
    component:CustomerDetailsComponent
  },
  {
    path:'pending',
    component:PendingComponent
  },
  {
    path:'other',
    component:OtherIssuesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
