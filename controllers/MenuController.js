const inquirer = require('inquirer');
const ContactController = require("./ContactController");

module.exports = class MenuController {
  constructor(){
      this.mainMenuQuestions = [
       {
        type: "list",
         name: "mainMenuChoice",
         message: "Please choose from an option below: ",
         choices: [
           "Add new contact",
           "Get Contacts",
           "Remind me",
           "Exit"
         ]
       }
     ];
     this.book = new ContactController();
  }

  main(){
    console.log(`Welcome to AddressBloc!`);
    inquirer.prompt(this.mainMenuQuestions).then((response) => {
     switch(response.mainMenuChoice){
       case "Add new contact":
         this.addContact();
         break;
       case "Get contacts":
         this.getContactCount();
         break;
       case "Remind me":
         this.remindMe();
         break;
       case "Exit":
         this.exit();
       default:
         console.log("Invalid input");
         this.main();
     }
   })
   .catch((err) => {
     console.log(err);
   });
  }

  clear(){
    console.log("\x1bc");
  }

  addContact(){
    this.clear();
    console.log('addContact called');
    this.main();
  }

  exit(){
    console.log("Thanks for using AddressBloc!");
    process.exit();
  }

  remindMe(){
    return "Learning is a life-long pursuit";
  }

  getContactCount(){
    return this.contacts.length;
  }


}
