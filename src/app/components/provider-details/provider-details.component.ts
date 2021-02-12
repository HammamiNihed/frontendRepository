import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/apiservice';

@Component({
  selector: 'app-provider-details',
  templateUrl: './provider-details.component.html',
  styleUrls: ['./provider-details.component.css']
})
export class ProviderDetailsComponent implements OnInit {

  Provider:any = [];
 

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.GetProviders().subscribe(res => {
      console.log(res)
      this.Provider =res;
    });    
  }

  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.apiService.deleteProvider(id).subscribe((res) => {
        this.Provider.splice(i, 1);
      })
    }
  }
  
}
