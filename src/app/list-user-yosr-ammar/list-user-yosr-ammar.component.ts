import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service-yosr-ammar';
import { User } from '../models/user-yosr-ammar';
@Component({
  selector: 'app-list-user-yosr-ammar',
  templateUrl: './list-user-yosr-ammar.component.html',
  styleUrl: './list-user-yosr-ammar.component.css',
})
export class ListUserYosrAmmarComponent implements OnInit {
  users: User[] = [];
  loading = true;

  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {
    this.loadUsers();
  }

  // ============================
  // Load all users
  // ============================
  loadUsers(): void {
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur chargement users', err);
        this.loading = false;
      },
    });
  }

  // ============================
  // Delete user
  // ============================
  deleteUser(id: number): void {
    if (!confirm('Voulez-vous vraiment supprimer cet utilisateur ?')) return;

    this.userService.deleteUser(id).subscribe({
      next: () => this.loadUsers(),
      error: (err) => console.error('Erreur suppression user', err),
    });
  }

  // ============================
  // Navigation
  // ============================
  goToAdd(): void {
    this.router.navigate(['/users/add']);
  }

  goToUpdate(id: number): void {
    this.router.navigate(['/users/update', id]);
  }
}

