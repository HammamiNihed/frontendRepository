import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './../../service/apiservice';
import { FormGroup, FormBuilder, FormsModule } from "@angular/forms";


@Component({
selector: 'app-add-provider',
templateUrl: './add-provider.component.html',
styleUrls: ['./add-provider.component.css']
})

export class AddProviderComponent implements OnInit {

  type: string="";
  contact_type: string="";
  providerForm: FormGroup;
  days : any = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY ', 'SUNDAY']
  street_address: string="";
            subdivision: string="";
            postal_code: string="";
            locality: string="";
            country: string="";
            email: string="";
        mobile_phone_number: string="";
        office_phone_number: string="";
        fax_number: string="";
        day: string="";
        hour_periods: string="";
        services: string="";
        is_auto_assignable:boolean = false;
        ranking: number=0;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService
  ) { 
    this.providerForm = this.formBuilder.group({
      provider_id:[''],
      contacts:[''],
      opening_days_hours:[''],
      services:[''],
      is_auto_assignable:[''],
      rating:['']
    })
  }
  ngOnInit() { }

  onSubmit(): any {
 
    let provider : any = {}
    let contacts : any = {}
    let opening_days_hours : any = {}
    let adress : any = {}
    let rating : any = {}
    provider.type=this.type
    provider.is_auto_assignable=this.is_auto_assignable
    adress.street_address = this.street_address
    adress.subdivision = this.subdivision
    adress.postal_code = this.postal_code
    adress.locality = this.locality
    adress.country = this.country
    contacts.adress = adress
    contacts.type = this.contact_type
    contacts.email = this.email
    contacts.mobile_phone_number = this.mobile_phone_number
    contacts.office_phone_number = this.office_phone_number
    contacts.fax_number = this.fax_number
    opening_days_hours.day_of_week={}
    opening_days_hours.day_of_week.day= this.day
    opening_days_hours.day_of_week.hour_periods= this.hour_periods
    provider.opening_days_hours=opening_days_hours
    rating.ranking = this.ranking
    provider.rating=rating
    provider.contacts=contacts
    provider.services=this.services

    this.apiService.AddProvider(provider)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/provider-details'))
      }, (err) => {
        console.log(err);
    });
  }

}