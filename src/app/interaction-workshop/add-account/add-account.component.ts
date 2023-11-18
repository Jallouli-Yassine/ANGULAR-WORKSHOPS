import {Component, EventEmitter, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.css']
})
export class AddAccountComponent {
  addAccountForm: FormGroup;
  @Output() form=new EventEmitter();

  constructor(private fb:FormBuilder) {
    let formControls = {
      title: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    }
    this.addAccountForm = this.fb.group(formControls);
  }

  save() {
    this.form.emit(this.addAccountForm);
  }
}
