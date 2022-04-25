'use strict'


// let discriminant = function(a, b, c){
//     let root1;
//     let root2;

//     const d = b * b - 4 * a * c;

//     if(d > 0){
//         root1 = (-b + Math.sqrt(d)) / (2 * a);
//         root2 = (-b - Math.sqrt(d)) / (2 * a);
            
//         console.log( `The roots of quadratic equation are ${root1} and ${root2}`);  
//         }else if(d === 0){
//            root1 = root2 = -b / (2 * a);
//            console.log( `The root of quadratic equation is ${root1} and ${root2}` );
//         }else {
//             throw new Error('The roots are not real' );
        
//         }
// }

//  discriminant(1, -1, 6);

 //****************** */

//  class SyntaxError extends Error{
//      constructor(message){
//          super(message);
//          this.name = 'SintaxError'
//      }
//  }


//  class FormatError extends SyntaxError{
//      constructor(message){
//      super(message);
//      this.name = 'FormatError';
//      }
//  }

//  const err = new FormatError('Something went wrong');

//  console.log( err.name );
//  console.log( err.message );
//  console.log( err.stack );

//  console.log( err instanceof FormatError ); // true
//  console.log( err instanceof SyntaxError ); // true
//  console.log( err instanceof Error ); // true

 //******************* */

 const getAge = function(){
     const answer = +prompt('How old are you?');


     if(answer < 0){
         throw new Error('Something is wrong');
     } else if(answer < 15){
         console.log( 'You are a child' );
     }else if(answer > 15 && answer < 20){
         console.log( 'You are a teenager' );
     }else{
         console.log( 'You are an adult');
     }   
    
 }

 getAge();
 
 
 
