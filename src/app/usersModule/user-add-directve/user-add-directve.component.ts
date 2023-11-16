import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-add-directve',
  templateUrl: './user-add-directve.component.html',
  styleUrls: ['./user-add-directve.component.css']
})
export class UserAddDirectveComponent implements OnInit {

  addUserForm: FormGroup;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {

    let formControls = {
      firstName: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-zA-Z]*"),
        Validators.minLength(3)
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-zA-Z]*"),
        Validators.minLength(3)
      ]),
      birthDate: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9._-]+@gmail.com"),
        Validators.email,
      ]),
      accountCategory: new FormControl('Customer', [
        Validators.required,
        Validators.minLength(5)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-zA-Z0-9]{8,}?"),
        Validators.minLength(8)
      ]),
      profession: new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z]+"),
        Validators.minLength(3)
      ]),
      /*
      competences: new FormArray([new FormControl('')]),
      autre: new FormGroup({
        email: new FormControl('', Validators.required,),
        fb: new FormControl('', Validators.required,),
      })
       */
    }

    this.addUserForm = this.fb.group(formControls);
    console.log(this.addUserForm);
  }

    get firstname() { return this.addUserForm.get('firstName'); }
    get lastname() { return this.addUserForm.get('lastName'); }
    get birthDate() { return this.addUserForm.get('birthDate'); }
    get email() { return this.addUserForm.get('email'); }
    get accountCategory() { return this.addUserForm.get('accountCategory'); }
    get profession() { return this.addUserForm.get('profession'); }
    get password() { return this.addUserForm.get('password'); }




  save() {
    this.userService.addUser(this.addUserForm.value).subscribe(
      response => {
        console.log(response);
        this.router.navigate(['/user']);
      },
      error => {
        console.log(error);
      }
    );
  }
/*
  get competences() {
    return this.addUserForm.get('competences') as FormArray;
  }

  addCompetence() {
    this.competences.push(new FormControl(''));
  }
*/
  ngOnInit(): void {

  }

}
