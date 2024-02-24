// contact.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contacts: any[] = [];

  addContact(contact: any) {
    this.contacts.push(contact);
  }

  getContacts() {
    return this.contacts;
  }
}
