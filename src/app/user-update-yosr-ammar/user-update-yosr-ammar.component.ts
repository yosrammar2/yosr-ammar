import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service-yosr-ammar';
import { User } from '../models/user-yosr-ammar';
@Component({
  selector: 'app-user-update-yosr-ammar',
  templateUrl: './user-update-yosr-ammar.component.html',
  styleUrl: './user-update-yosr-ammar.component.css',
})
export class UserUpdateYosrAmmarComponent implements OnInit {
  id!: number;

  form = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    role: new FormControl('user'),
    status: new FormControl('active'),
  });

  roles = ['admin', 'manager', 'user'];
  statuses = ['active', 'inactive', 'banned'];

  constructor(
    private service: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.service.getUserById(this.id).subscribe({
      next: (response) => {
        const user: User = response.user;
        this.form.patchValue(user);
      },
      error: (err) => console.error(err),
    });
  }

  get name() {
    return this.form.get('name');
  }
  get email() {
    return this.form.get('email');
  }

  submit(): void {
    if (this.form.invalid) return;

    const updatedUser: User = {
      name: this.form.value.name!,
      email: this.form.value.email!,
      role: this.form.value.role || 'user',
      status: this.form.value.status || 'active',
    };

    this.service.updateUser(this.id, updatedUser).subscribe({
      next: () => this.router.navigate(['/users']),
      error: (err) => console.error(err),
    });
  }
}

