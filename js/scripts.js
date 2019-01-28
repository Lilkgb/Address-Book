//Business Logic for AddressBook
function AddressBook() {
  this.contacts = [];
  this.currentId = 0;
}

//Method for addContact
AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts.push(contact);
};

//Method to assign a Id to each contact inputed
AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

//Business Logic for finding a contact
AddressBook.prototype.findContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
    if (this.contacts[i].id == id) {
      return this.contacts[i];
    }
  }
  return false;
};

//Business Logic for deleting a contacts
AddressBook.prototype.deleteContact = function(id) {
  for (var i=0; i< this.contacts.length; i++) {
    if (this.contacts[i].id == id) {
      delete this.contacts[i];
      return true;
    }
  }
  return false;
};

//Business Logic for Contacts
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName,
  this.lastName = lastName,
  this.phoneNumber = phoneNumber
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};
