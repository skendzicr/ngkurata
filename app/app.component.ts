import { Component, OnInit } from '@angular/core'; 

@Component({
	// moduleId: module.id,
	selector: 'pm-app',
	templateUrl: './app/app.component.html'
})
export class AppComponent implements OnInit {
	pageTitle: string = "ACME Product Management";
	constructor() { }

	ngOnInit() { }

}
