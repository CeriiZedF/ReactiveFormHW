import { Component } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  form! : FormGroup;

  ngOnInit(){
    this.form = new FormGroup({
      user: new FormGroup({
        firstName: new FormControl('',[Validators.required]),
        lastName: new FormControl('',[Validators.required, Validators.minLength(3)]),
        address: new FormControl('',[Validators.required, Validators.minLength(3)]),
        email: new FormControl('',[Validators.email]),
        phone_number: new FormControl('',[Validators.pattern("^[0-9]*$"), Validators.minLength(8)])

      }),
      delivery: new FormGroup({
        address: new FormControl('', [Validators.required]),
        code: new FormControl('', [Validators.required])
      })
    });
  }
  flag = false;
  onSubmit(){
      this.flag = !this.flag;
    }
}
