import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  resultado!:number
  formCalculador: FormGroup = this.formBuilder.group(
    {
      num1:['',[Validators.required, Validators.min(0)]],
      num2:['', [Validators.required,Validators.min(0)]]
    }
  ) 
  
  constructor(private formBuilder: FormBuilder){
  }
  
  get num1()
  {
    return this.formCalculador.controls['num1'];
  }

  get num2()
  {
    return this.formCalculador.controls['num2']
  }

  sumar()
  {
    if(this.formCalculador.valid)
    {
      this.resultado = this.formCalculador.controls['num1'].value 
                                + this.formCalculador.controls['num2'].value;
      
    }
    else{
      alert("La validación falló")
    }
  }
}
