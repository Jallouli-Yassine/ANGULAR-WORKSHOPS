import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';
import {User} from "../../models/user";

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  //RECEPTION FROM PARENT TO CHILD
  private varFromParent="";

  @Input() set modifierNom(p: string) {
    console.log(p)
    this.varFromParent = p.toUpperCase();
  }

  get nomUpdated(): string { return this.varFromParent; }
/*
  ngOnChanges(changes: SimpleChanges) {

        console.log (changes);
        this.varFromParent="dehe";
        console.log (changes);

  }

 */

  //EMISSION FROM CHILD TO PARENT
  @Output() info = new EventEmitter();



  usersListChild:User[]= [
    {
      "id": 1,
      "firstName": "xD",
      "lastName": " Kunis",
      "birthDate": "1999-06-30",
      "accountCategory": "Admin",
      "email": "mila@kunis.com",
      "password": "test",
      "picture": "https://bootdey.com/img/Content/avatar/avatar3.png",
      "profession": "Software Engineer"
    },
    {
      "id": 2,
      "firstName": "George",
      "lastName": "Clooney",
      "birthDate": "1999-06-30",
      "accountCategory": "Customer",
      "email": "marlon@brando.com",
      "password": "test",
      "picture": "https://bootdey.com/img/Content/avatar/avatar1.png",
      "profession": "Software Engineer"
    },
    ]

  oneUser:User= {
      "id": 1,
      "firstName": "dehe",
      "lastName": " xD",
      "birthDate": "1999-06-30",
      "accountCategory": "Admin",
      "email": "mila@kunis.com",
      "password": "test",
      "picture": "https://bootdey.com/img/Content/avatar/avatar3.png",
      "profession": "Software Engineer"
    }


  public sendInfo(){
    this.info.emit(this.usersListChild);
  }
  /*
  public sendInfo(){
    this.info.emit({
      "users":this.usersListChild,
      "simpleUser":this.oneUser
    });
  }
*/

}
