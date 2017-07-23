import { Person } from './Models/Person';
import { Component, ViewEncapsulation, Input, OnChanges } from '@angular/core';


@Component({
    selector: 'app-person-fullName',
    templateUrl: './Views/person-details.component.html'
})

export class PersonDetailsComponent implements OnChanges {

  /**Get the fullName from person-app  */
  @Input() personDetail; 
  //@Input() perFullName;personName: string;
  perNameDetail: Person = new Person() ;
  
  constructor() { }

  ngOnChanges() {

    this.perNameDetail = {
      firstName: this.personDetail.firstName,
      lastName: this.personDetail.lastName,
      title: this.personDetail.title
    }
    
  }

}
