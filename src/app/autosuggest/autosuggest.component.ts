import { Component, OnInit } from '@angular/core';
/// <reference  types="@types/googlemaps"  />

@Component({
  selector: 'app-autosuggest',
  templateUrl: './autosuggest.component.html',
  styleUrls: ['./autosuggest.component.scss'],
})
export class AutosuggestComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  title = 'rou';
  //Local Variable defined
  formattedaddress = ' ';
  options = {
    componentRestrictions: {
      country: ['AU'],
    },
  };
  public AddressChange(address: any) {
    //setting address from API to local variable
    this.formattedaddress = address.formatted_address;
  }
}
