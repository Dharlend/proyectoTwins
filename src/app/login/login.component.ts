import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    if (this.username && this.password) {
      console.log('Nombre de usuario:', this.username);
      console.log('Contraseña:', this.password);
      // Aquí puedes agregar la lógica para autenticar al usuario
    }
  }
}
