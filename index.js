// const contacts = require('./contacts');

// async function main() {
//   await contacts.addContact(
//     'Іван Іванов', 
//     'ivan@example.com', 
//     '123-456-7890');
//   await contacts.addContact(
//     'Петро Петров',
//     'petro@example.com',
//     '987-654-3210',
//   );

//   const allContacts = await contacts.listContacts();
//   console.log('Список всіх контактів:', allContacts);

//   const contactId = allContacts[1].id;
//   const contactById = await contacts.getContactById(contactId);
//   console.log('Контакт за ID:', contactById);

//   const removedContact = await contacts.removeContact(contactId);
//   console.log('Видалений контакт:', removedContact);

//   const updatedContacts = await contacts.listContacts();
//   console.log('Список після видалення:', updatedContacts);
// }

// main();

const { Command } = require('commander');
const program = new Command();
const { listContacts, getContactById, addContact, removeContact } = require('./contacts');

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
      listContacts().then(console.table);
      break;

    case 'get':
      getContactById(id).then(console.log);
      break;

    case 'add':
      addContact(name, email, phone).then(console.log);
      break;

    case 'remove':
      removeContact(id).then(console.log);
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);
