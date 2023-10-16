import { Component } from '@angular/core';

@Component({
  selector: 'app-other-issues',
  templateUrl: './other-issues.component.html',
  styleUrls: ['./other-issues.component.css']
})
export class OtherIssuesComponent {

  successMessage:string='';
  onButtonClick():any{

    this.successMessage='Your Issues will be Resolved soon.';

  }
}
