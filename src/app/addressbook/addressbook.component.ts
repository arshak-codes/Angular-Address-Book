import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-addressbook',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './addressbook.component.html',
  styleUrl: './addressbook.component.css'
})
export class AddressbookComponent {
  contacts:any[] = [];
  constructor(private contactService: ContactService) {}
  ngOnInit(){
    this.contacts=this.contactService.getContacts();
  }

}
