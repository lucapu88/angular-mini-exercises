import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-multi-step-form',
  templateUrl: './multi-step-form.component.html',
  styleUrls: ['./multi-step-form.component.scss'],
})
export class MultiStepFormComponent implements OnInit {
  accept: boolean = false;
  formGeneralityInfo = {
    nome: '',
    cognome: '',
    eta: '',
    visibile: true,
  };
  formDetailsInfo = {
    sesso: '',
    email: '',
    visibile: true,
  };

  acceptForm: FormGroup = this.fb.group({
    // gender: [false, Validators.required],
    // email: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  outputGeneralityInfo(generality: any): void {
    this.formGeneralityInfo = generality;
  }

  outputDetailsInfo(details: any): void {
    this.formDetailsInfo = details;
    console.log(this.formDetailsInfo);
  }

  onSubmit(): void {
    this.accept = true;
  }
}
