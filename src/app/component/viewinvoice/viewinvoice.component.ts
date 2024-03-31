import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-viewinvoice',
  templateUrl: './viewinvoice.component.html',
  styleUrls: ['./viewinvoice.component.scss']
})
export class ViewinvoiceComponent {


constructor(private router:Router){

}
  back() {
    this.router.navigateByUrl('/component/invoice')
  }
}
