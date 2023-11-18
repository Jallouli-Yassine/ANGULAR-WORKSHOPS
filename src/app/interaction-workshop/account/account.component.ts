import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {


  private titre!:String;
  private image!:String;
  private description!:String;

  @Input() get getTitre(){return this.titre}
  @Input() set ajouterTitre(t:String){this.titre=t}

  @Input() get getImage(){return this.image}
  @Input() set ajouterImage(i:String){this.image=i}

  @Input() get getDescription(){return this.description}
  @Input() set ajouterDescription(d:String){this.description=d}

  @Output() deleteEmitter = new EventEmitter();
  @Output() filterEmitter = new EventEmitter();

  deleteAccount(){
    this.deleteEmitter.emit();
  }

  filterUsers(category: String) {
    this.filterEmitter.emit(category);
  }
}
