import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
} from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular 5';
  studentForm: any;
  constructor(private formBuilder: FormBuilder) {}
  ngOnInit() {
    this.studentForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      age: ['', [Validators.required, Validators.minLength(4)]],
      mobilenos: this.formBuilder.array([this.dovalidationofForm()]),
    });
  }
  dovalidationofForm() {
    return new FormControl('', Validators.required);
  }
  deletemobNo(index: number) {
    this.studentForm.get('mobilenos').removeAt(index);
  }
  addmobileno() {
    this.studentForm.get('mobilenos').push(new FormControl());
  }
  see() {
    console.log(this.studentForm);
  }
}
