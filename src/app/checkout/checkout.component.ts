import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {


  checkoutForm: FormGroup ;

  constructor() {
    this.checkoutForm = new FormGroup({
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("",[Validators.required]),
      email: new FormControl("", [Validators.required,Validators.email]),
      address: new FormControl("", [Validators.required]),
      country: new FormControl("philippines", [Validators.required]),
      state: new FormControl("", [Validators.required]),
      zip: new FormControl("", [Validators.required]),
      paymentMethod: new FormControl("creditCard", [Validators.required]),
      cardName: new FormControl("", [Validators.required]),
      creditcardNumber: new FormControl("", [Validators.required]),
      expiration: new FormControl("", [Validators.required]),
      cvv: new FormControl("", [Validators.required])

    });
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(this.checkoutForm.valid){
      console.log(this.checkoutForm.value);
    }
    else {
      console.log("invalid form fields", this.checkoutForm.errors);
      Swal.fire("checkout failed", "invalid form fields", "error")
    }

  }


}
