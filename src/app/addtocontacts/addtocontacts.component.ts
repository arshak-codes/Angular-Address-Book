import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-addtocontacts',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addtocontacts.component.html',
  styleUrl: './addtocontacts.component.css'
})
export class AddToContactsComponent {
  contact = {
    name: '',
    address: '',
    phoneNumber:'',
  };

  constructor(private contactService: ContactService) {}

  onSubmit() {
    this.contactService.addContact(this.contact);
    // You can optionally clear the form after submitting
    this.contact = { name: '', address: '',phoneNumber:'' };
  }
}

