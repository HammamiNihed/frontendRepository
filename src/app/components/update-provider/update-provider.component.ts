import { ApiService } from '../../service/apiservice';
import { FormGroup, FormBuilder } from "@angular/forms";
import { Component, OnInit, NgZone } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-provider',
  templateUrl: './update-provider.component.html',
  styleUrls: ['./update-provider.component.css']
})
export class UpdateProviderComponent implements OnInit {

  getId: any;
  updateForm: FormGroup;
  
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private apiservice: ApiService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.apiservice.GetProvider(this.getId).subscribe(res => {
      this.updateForm.setValue({
        provider_type: res['provider_type'],
        contact_type: res['contact_type'],
        street_address: res['street_address'],
        subdivision: res['subdivision'],
        postal_code: res['postal_code'],
        locality: res['locality'],
        country: res['country'],
        email: res['email'],
        mobile_phone_number: res['mobile_phone_number'],
        office_phone_number: res['office_phone_number'],
        fax_number: res['fax_number'],
        day_of_week: res['day_of_week'],
        hour_periods: res['hour_periods'],
        is_auto_assignable: res['is_auto_assignable'],
        services: res['services'],
        ranking: res['ranking']       

      });
    });

    this.updateForm = this.formBuilder.group({
      provider_type: [''],
        contact_type: [''],
        street_address: [''],
        subdivision: [''],
        postal_code: [''],
        locality: [''],
        country: [''],
        email: [''],
        mobile_phone_number: [''],
        office_phone_number: [''],
        fax_number: [''],
        day_of_week: [''],
        hour_periods: [''],
        is_auto_assignable: [''],
        services: [''],
        ranking: [''] 
    })
  }

  ngOnInit() { }

  onUpdate(): any {
    this.apiservice.updateProvider(this.getId, this.updateForm.value)
    .subscribe(() => {
        console.log('Data updated successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/provider-details'))
      }, (err) => {
        console.log(err);
    });
  }

}
