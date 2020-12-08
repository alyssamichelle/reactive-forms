import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'coffee-form',
  templateUrl: './coffee-form.component.html',
  styleUrls: ['./coffee-form.component.scss']
})
export class CoffeeFormComponent {
  coffeeOrderForm: FormGroup;
  specialRequestsControls: FormArray;

  constructor(private formBuilder: FormBuilder ) { 
    this.buildForm();
  }

  buildForm(){
    this.coffeeOrderForm = this.formBuilder.group({
      customerName: this.formBuilder.control(null),
      specialRequests: this.formBuilder.array([
        this.formBuilder.control(null)
      ]),
      milks: this.formBuilder.group({
        milkBreve: this.formBuilder.control(null),
        milkWhole: this.formBuilder.control(null),
        milkTwoPercent: this.formBuilder.control(null),
        milkSkim: this.formBuilder.control(null),
        milkAlmondVanilla: this.formBuilder.control(null),
        milkAlmondPlain: this.formBuilder.control(null),
        milkOat: this.formBuilder.control(null),
        milkCoconut: this.formBuilder.control(null)
      })
    });

    this.specialRequestsControls = this.coffeeOrderForm.get('specialRequests') as FormArray;
  }

  onAddSpecialRequest() {
    this.specialRequestsControls.push(this.formBuilder.control(null));
  }

  onRemoveSpecialRequest(index) {
    this.specialRequestsControls.removeAt(index);
  }

  onResetForm() {
    this.coffeeOrderForm.reset();
  }

  onSubmitForm() {
    // submit form to service

    console.log(this.coffeeOrderForm.value);
  }
}
