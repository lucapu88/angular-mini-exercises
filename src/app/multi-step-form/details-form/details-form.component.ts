import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.scss'],
})
export class DetailsFormComponent implements OnInit {
  gender: boolean = false;
  email: string = '';
  @Output() details = new EventEmitter<any>();

  detailsForm: FormGroup = this.fb.group({
    gender: [null, Validators.required],
    email: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    const formInfo = {
      gender: this.detailsForm.value.gender,
      email: this.detailsForm.value.email,
      visibile: false,
    };
    this.details.emit(formInfo);
  }
}
