import { Component } from '@angular/core';
import { User } from '../models/user-yosr-ammar';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service-yosr-ammar';

@Component({
  selector: 'app-user-detail-yosr-ammar',
  templateUrl: './user-detail-yosr-ammar.component.html',
  styleUrl: './user-detail-yosr-ammar.component.css',
})
export class UserDetailYosrAmmarComponent {
  user!: User;
  id!: number;

  constructor(private route: ActivatedRoute, private service: UserService) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.service.getUserById(this.id).subscribe({
      next: (res) => {
        this.user = res.user;
      },
      error: (err) => console.error(err),
    });
  }
}

