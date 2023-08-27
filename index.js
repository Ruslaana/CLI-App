const contacts = require('./contacts');

async function main() {
  await contacts.addContact('Іван Іванов', 'ivan@example.com', '123-456-7890');
  await contacts.addContact('Петро Петров', 'petro@example.com', '987-654-3210');

  const allContacts = await contacts.listContacts();
  console.log('Список всіх контактів:', allContacts);

  const contactId = allContacts[0].id;
  const contactById = await contacts.getContactById(contactId);
  console.log('Контакт за ID:', contactById);

  const removedContact = await contacts.removeContact(contactId);
  console.log('Видалений контакт:', removedContact);

  const updatedContacts = await contacts.listContacts();
  console.log('Список після видалення:', updatedContacts);
}

main();
