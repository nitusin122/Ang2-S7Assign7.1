import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { Person } from './Models/Person';

@Component({
    selector: 'person-root',
    templateUrl: './Views/person-app.component.html',
    styleUrls: ['./person-app.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})

export class PersonComponent implements OnInit{
    //Public Variables */
    personObj: Person = new Person();
    submitted:boolean = false;
    fullName: string;

    ngOnInit() {  }

    /**Get Person Name */
   getName(title,first,last)
   {
        this.submitted = true;
        this.personObj = {
            firstName: first,
            lastName: last,
            title: title
        }
    }
}