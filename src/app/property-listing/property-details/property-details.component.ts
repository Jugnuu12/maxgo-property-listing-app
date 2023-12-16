import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.scss']
})
export class PropertyDetailsComponent {
  constructor(private route: ActivatedRoute){}
  ngOnInit() {
    this.route.params.subscribe(params => {
      const propertyId = params['id'];
      debugger
    });
}
}
