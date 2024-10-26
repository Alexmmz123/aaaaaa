import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 password :string='';
 username: string = '';

  onSubmitForm (){
    if (!this.username || !this.password) {
      alert('El nombre de usuario y la contraseña no pueden estar vacíos.');
      return;
    }
 

  }

}
