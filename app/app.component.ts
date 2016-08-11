import { Component, OnInit } from '@angular/core'; 
import{ ProductListComponent } from './products/product-list.component'; 
 
@Component({
	// moduleId: module.id,
	selector: 'pm-app',
	templateUrl: './app/app.component.html',
	directives:[ProductListComponent]
})
export class AppComponent implements OnInit {
	pageTitle: string = "ACME Product Management";
	constructor() { }

	ngOnInit() { }

}
