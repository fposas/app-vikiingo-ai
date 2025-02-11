import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.scss']
})
export class SharedComponent implements OnInit {
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      Input: [null]
    })

  }

  onPatchValue(): void {
    this.form.patchValue({Input: 'Vikiingo'});
  }

  onSubmit(): void{
    console.log('Presiono boton submit')
  }

}
