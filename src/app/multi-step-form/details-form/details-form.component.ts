import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DetailsC } from 'src/app/forms';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.scss'],
})
export class DetailsFormComponent implements OnInit {
  detailsModel: DetailsC;

  @Output() details = new EventEmitter<any>();

  detailsForm: FormGroup = this.fb.group({
    gender: [null, Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(): void {
    // assegno alla classe DetailsModel tutti i dati del forme e tramite il metodo emit la invio al padre di questo componente
    // mi passo la proprietà visibile settata a false in modo da rendere il form invisibile
    this.detailsModel = {
      gender: this.detailsForm.value.gender,
      email: this.detailsForm.value.email,
      visibile: false,
    };
    this.details.emit(this.detailsModel);
  }
}
