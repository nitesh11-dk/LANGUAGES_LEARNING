

// // //  Static Field 
// // class Car {
// //     static totalCars = 0; // Static field
  
// //     constructor(model) {
// //       this.model = model;
// //       Car.totalCars++; // Accessing static field using class name
// //     }
  
// //     static getTotalCars() { // Static method
// //       return Car.totalCars;
// //     }
// //   }
  
// //   const car1 = new Car('Tesla'); 
// //   const car2 = new Car('BMW');

// //   console.log(Car.getTotalCars()); // Output: 2
  
// // //   console.log(Car.getTotalCars()); // Output: 2
// // //   console.log(car1.totalCars); // Output: undefined (static fields are not accessible via instance)

// //  ! Private variable 


// // class Person {
// //     #name; // Private field
   
// //     constructor(name , age) {
// //       this.#name = name; // Private field
// //       this.age = age ;
// //     }
  
// //     getName() {
// //       return this.#name; // Accessing private field within the class
// //     }

// //   }

// //   let p1 = new Person("ak" , 23);
// // //   console.log(p1.getName());
// // console.log(p1.getName());
  

// // meraacc .balance  == 200000 ;


// class BankUser{
//       #balance ;

//     constructor(name ,age ,balance){
//        this.#balance = balance;
//         this.name = name ;
//         this.age = age ;
        
//     }

//       getBalance (){
//         console.log(this.#balance);
//         return ""
//     }
//      deposite(amt){
 
//       this.#balance = this.#balance + amt ;

//       console.log(`balance after deposit is ${this.#balance}`);
//       return "";
//      }

//      withdraw(amt){
  
//         if (this.#balance < amt){
//             console.log(`balance nahi hai yitna appka blanace hai ${this.#balance} `);
           
//         }else{
//             this.#balance = this.#balance - amt ;
//         console.log(`balance after withdraw  is ${this.#balance}`);
        
//         }
        
//         return "";
//        }

// }

// // let buser = new BankUser("ak" , 23 , 40000 );

// // let buser2 = new BankUser("34ak" , 34  , 60000);

// // console.log(buser.getBalance());

// // buser.deposite(1000000);
// // buser.withdraw(1000000);
// // buser.withdraw(40000);
// // buser.withdraw(40000);
// // console.log(buser2);

// bad me class me method kese add kare -- prototype me 

// Person.prototype.ageUpdate = function(updateBy) {
//     this.age += updateBy;
//     console.log(this.age);
//   }
  
//   person1.ageUpdate(3); 
// //  static methods adding after class creatation


// Person.greet23 = function() {
//     console.log("Hello everyone");
//   }
  
//   Person.greet23(); // Output: Hello everyone