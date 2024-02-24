import { Component, NgModule } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AddToContactsComponent } from "./addtocontacts/addtocontacts.component";
import { AddressbookComponent } from "./addressbook/addressbook.component";
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, DashboardComponent, AddToContactsComponent,RouterLink,FormsModule]
})

export class AppComponent {
  constructor(private router: Router) {}

  isButtonActive(path: string): boolean {
    return this.router.url === path;
  }
}




