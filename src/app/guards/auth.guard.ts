import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private _snackBar: MatSnackBar, private router: Router) {}

  canActivate(): boolean {
    const usuarioConectado: string = localStorage.getItem('usuarioConectado');

    if (usuarioConectado) {
      return true;
    } else {
      this._snackBar.open('Debe iniciar sesión antes', 'cerrado');
      this.router.navigate(['usuario/login']);

      return false;
    }
  }
}
