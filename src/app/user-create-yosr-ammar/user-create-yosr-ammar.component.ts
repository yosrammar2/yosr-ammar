import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service-yosr-ammar';
import { User } from '../models/user-yosr-ammar';

@Component({
  selector: 'app-user-create-yosr-ammar',
  templateUrl: './user-create-yosr-ammar.component.html',
  styleUrl: './user-create-yosr-ammar.component.css',
})
export class UserCreateYosrAmmarComponent {
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl('user'),
    status: new FormControl('active'),
  });

  roles = ['admin', 'manager', 'user'];
  statuses = ['active', 'inactive', 'banned'];

  constructor(private service: UserService, private router: Router) {}

  get name() {
    return this.form.get('name');
  }
  get email() {
    return this.form.get('email');
  }

  submit(): void {
    if (this.form.invalid) return;

    const user: User = {
      name: this.form.value.name!,
      email: this.form.value.email!,
      role: this.form.value.role || 'user',
      status: this.form.value.status || 'active',
    };

    this.service.createUser(user).subscribe({
      next: () => this.router.navigate(['/users']),
      error: (err) => console.error(err),
    });
  }
}

