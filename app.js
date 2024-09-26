//                     CHAPTER NO 15(ARRAY 1)

//                        QUESTION NO 1
// let emptyArray = [];

//                        QUESTION NO 2

// let singleStringArray = ["Safa"];
// console.log(singleStringArray);

//                        QUESTION NO 3

// var alphabet = ["h" , "i" , "j", "k"];
// alert(alphabet[2]);

//                        QUESTION NO 4

//  var alphabet = ["h" , "i" , "j", "k" , "l" , "m" , "n" , " o"];
//  var totalLenght = alphabet.length;
//  console.log(alphabet.lenght);

//                        QUESTION NO 5

// let myArray = ["firstElement"];
// myArray[1] = "secondElement";
// alert(myArray[1]); 

//                     CHAPTER NO 15(ARRAY 2)

//                        QUESTION NO 1

// let myArray = ["firstElement"];
// myArray.push("secondElement");
// alert(myArray[myArray.length - 1]); 

//                        QUESTION NO 2

//  var alphabet = ["h" , "i" , "j", "k"];
// alphabet.pop(3)
// console.log(alphabet)

//                        QUESTION NO 3

//  var alphabet = ["h" , "i" , "j", "k"];
// alphabet.push("l");
// console.log(alphabet);

//                     CHAPTER NO 15(ARRAY 3)

//                        QUESTION NO 1

// var sizes = ["S", "M" , "XL" , "XXL" , "XXXL"];
// sizes.shift(0);
// console.log(sizes)

//                        QUESTION NO 2&3

//  var sizes = ["S", "M" , "XL" , "XXL" , "XXXL"];
// sizes.unshift("A" ,"B" ,"C")
// console.log(sizes)
// alert(sizes[0])

//                        QUESTION NO 4

//  var sizes = ["S", "M" , "XL" , "XXL" , "XXXL"];
// sizes.splice(2,0 ,'L')
// console.log(sizes);

//                        QUESTION NO 5

//  var sizes = ["S", "M" , "XL" , "XXL" , "XXXL"];
// var copy = sizes.slice(0,2);
// document.write(sizes)

//                        QUESTION NO 6

// var pets = ["dog" , "cat" , "ox" , "duck" , "frog"]
// pets.splice(1 , 3, "Bat" ,"Rat" );
// console.log(pets)

//                        QUESTION NO 7

// var pets = ["dog" , "cat" , "ox" , "duck" , "frog"]
// pets.splice(1,2)
// console.log(pets)

//                        QUESTION NO 8

//  var pets = ["dog" , "cat" , "ox" , "duck" , "frog" , "flea"]
// pets.splice(3,4)
// console.log(pets)


//                     pdf question chapter 14-16

//                        QUESTION NO 1

// var studentNames = [];
// console.log(studentNames);

//                        QUESTION NO 3
// let alpha = ["safa" , "surti"]
// console.log(alpha)

//                        QUESTION NO 4

// let num = [10,20,30];
// console.log(num);

//                        QUESTION NO 5
// let booleanArray = [true , false ]
// console.log(booleanArray)

//                        QUESTION NO 6

// let mixedArray = ["Safa" , 100 , true , false]
//  console.log(mixedArray)

//                        QUESTION NO 7

// let Education = ["Qualifications", "SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"]
//     for (let i = 0 ; i < Education.length; i++){
//         console.log(Education[i])
//     }

//                        QUESTION NO 8

// let studentNames = [" Safa" , " Mushtaq  " , "  Surti"];
// let marks = [320 , 230 , 480];
// let totalMarks = [500];
// for(let i = 0 ; i < studentNames.length; i++){
//     let per =(marks[i] / totalMarks *100);
// console.log("Score of" + " " +studentNames [i] + " " + "is" +" " + marks[i] + " " + "Percentage:" + " " +per + "%" )
//  }
// "
// //                        QUESTION NO 9(part "A")

// let color = [ "Red" , "Blue" , "Green"];
// let choose = prompt("Enter what color do  you want");
//  let alertStart = alert(choose);
// let unShift = color.unshift(choose)
// document.write(unShift + color )

//                        QUESTION NO 9 (part "B")

//  let color = [ "Red" , "Blue" , "Green"];
//  let choose = prompt("Enter what color do  you want");
//   let alertStart = alert(choose);
//  let unShift = color.push(choose)
// document.write(unShift + color )

//                        QUESTION NO 9 (part "C")

// let color = [ "Red" , "Blue" , "Green"];
// let unShift = color.push("Black" , "violet")
// document.write(unShift + color )

//                        QUESTION NO 9 (part "D")


// let color = [ "Red" , "Blue" , "Green"];
// document.write(color)
// let unShift = color.splice(1,2)
// document.write( "<br>" + unShift  )

//                        QUESTION NO 9 (part "E")

// let color = [ "Red" , "Blue" , "Green"];
// document.write(color)
// let unShift = color.splice(0,2)
// document.write( "<br>" + unShift  )