

//Q10. Write a program to find the smallest number using a stack.

n=prompt("Enter how many elements in to stack")
stack=[]
for( var i=0;i<n;i++)
{
  t=prompt("Enter element of stack")
  stack.push(t)
}
console.log(smallestofstack(n));
function smallestofstack(n)
{
  if(stack.length===1)
  return stack[0]
  return Math.min.apply(null,stack)
}


//Write a program to find all pairs of an integer array whose sum is equal to a given number?

find_sum=prompt("Enter which sum u wantto find out");
var n=prompt("Enter how many elements in to array")
var arr=[]
for( var i=0;i<n;i++)
{
  var t=Number(prompt("Enter element of array"))
  arr.push(t)
}
console.log(arr)
//filter we can use
sumarr= Sum_Pairs(n,find_sum)
console.log(sumarr)
function Sum_Pairs(n,find_sum)
{

  var smp=[]
  for(var i=0;i<n;i++)
  {
      t=find_sum-arr[i]
       if(arr.includes(t))
      {
        smp.push([arr[i],t])
        arr[i]=0
      }
  }
  return smp;
}

var n=prompt("Enter how many elements in to array")
var arr=[]
for( var i=0;i<n;i++)
{

  var t=Number(prompt("Enter element of array"))
  arr.push(t)
}
console.log("Before array")
var str=" "
for( var i=0;i<n;i++)
{
  
  str +=arr[i]+" "
}
console.log(str)
var ind =(arr.length-1)
for(i=0;i<(n/2);i++)
{
  var t=arr[i]
  arr[i]=arr[ind-i]
  arr[ind-i]=t
}
str=" "
console.log("After array")
for( var i=0;i<n;i++)
{
  str +=arr[i]+" "
}
console.log(str)


//Q3. Write a program to check if two strings are a rotation of each other?

s1=prompt("Enter 1st string")
s2=prompt("Enter 2nd String")
s1=[...s1].sort()
s2=[...s2].sort()
function sortingt(s1,s2 )
{
  for(var i=0;i<s1.length;i++)
     {
      if(s1[i]!==s2[i])
      return -1
     }
  return 0
}
if(s1.length===s2.length)
{
     y=sortingt(s1,s2)
     if(y==0)
     {
      console.log("two strings are  rotation")
     }
     else{
      console.log("two strings are not rotation")
    }

}
else{
  console.log("two strings are not rotation")
}

// Write a program to check if all the brackets are closed in a given code snippet.
/*
1. take the code snippet as input 
2. Trace the code snippet 
 */
s1=prompt("Enter how brackets string")
stack=[...s1].sort()
console.log(stack)
var l=stack.length
var index=0
console.log("before",l)
for(;index<stack.length;index++)
{
 
  if(stack[index]=="("||stack[index]=="{"||stack[index]=="[")
  {
   
    for(var i =0;i<stack.length;i++)
    {
      if(stack[index]=='(' && stack[i]==')')
      {
        every(index,i)
        break;
      }
      if(stack[index]=='[' && stack[i]==']')
      {
        every(index,i)
        break;
      }
      if(stack[index]=='{' && stack[i]=='}')
      {
        every(index,i)
        break;
      }
    }
  
  }
  
}
function every(x,y)
{
  stack[x]=0
  stack[y]=0
  l=l-2;
}
if(l===0)
{
  conole.log(" brackets are closed in a given code snippet")
}
else{
   conole.log(" brackets are not closed in a given code snippet") 
}


//Q9. Write a program to reverse a stack.?
var n=prompt("Enter how many elements in to stack")
var arr=[]
for( var i=0;i<n;i++)
{

  var t=Number(prompt("Enter element of array"))
  arr.push(t)
}
var top =arr.length
var str=" "
console.log("before array",arr.map(i=>str+" "+i))

var ind =(arr.length-1)
for(i=0;i<(n/2);i++)
{
  var t=arr[i]
  arr[i]=arr[ind-i]
  arr[ind-i]=t
}
str=" "
console.log("After array",arr.map(i=>str+" "+i))

//Q4. Write a program to print the first non-repeated character from a string?

// Answer 4

let s=prompt("Enter string")
let k=[...s]
let ind=s.length;
for(let i=0;i<s.length;i++)
{
  
  if(k.includes(s[i])===false)
  {
   
    if(i<ind)
    {
      ind=i
    }

  }
  else{
    console.log("           ")
  }
  k=[...s]
}
console.log(s[ind])


//Q6. Read about infix, prefix, and postfix expressions. Write a program to convert infix to prefix expression.

let pfe1 = "*+A/BC-/ADL";
console.log("Prefix Expression input ==> " + pfe1);
let pfarray = pfe1.split('').reverse();

// function to check if opertor is encountered
function checkOperator2(input1) {
    switch (input1) {
        case '+':
        case '-':
        case '/':
        case '*':
            return true;
    }
    return false;
}

function pfToInfix(pfarray) {
    let infixArray=[]
    for (j = 0; j < pfarray.length; j++){
        if (checkOperator2(pfarray[j]) === true) {
            let op1 = infixArray[infixArray.length - 1];
            infixArray.pop();
            let op2 = infixArray[infixArray.length - 1];
            infixArray.pop();
            
            let temp2 = op1 + pfarray[j] + op2;
            infixArray.push(temp2)
        } else {
            infixArray.push(pfarray[j]);
        }
    }
    let infixExp = infixArray.toString();
    console.log("Infix Expression output ==> "+infixExp);
}

pfToInfix(pfarray);
let postFixExp = "ABC/-AK/L-*";

//Printing the Post fix Expression
console.log("PostFix expression input ==> " + postFixExp);
// conversion from Sring to  Array
let postFixArray = postFixExp.split("");
// function to check if opertor is encountered
function checkOperator(input) {
    switch (input) {
        case '+':
        case '-':
        case '/':
        case '*':
            return true;
    }
    return false;
}

// function to convert Postfix To PreFix

function postfixToPrefix(postFixArray) {
    // Declarimg preFix array 
    let prefixArray = [];
    // Looping through the postFix Array
    for (i = 0; i < postFixArray.length; i++){
        if (checkOperator(postFixArray[i]) === true) {
            // POP two operands 
            let operand1 = prefixArray[prefixArray.length - 1];
            prefixArray.pop();
            let operand2 = prefixArray[prefixArray.length - 1];
            prefixArray.pop();
            //concatinate operator and operand
            let temp = postFixArray[i] + operand2 + operand1;
            prefixArray.push(temp);
        } else {
            prefixArray.push(postFixArray[i]);
        }
    }
    // Converting Prefix Array To string
    let prefixExp = prefixArray.toString();
    // Display Result on the console 
    console.log("Prefix expression output ==> "+ prefixExp);
}




 //Q5. Read about the Tower of Hanoi algorithm. Write a program to implement it.
              // javascript recursive function to 
// solve tower of hanoi puzzle 
function towerOfHanoi(n1, from_rod,  to_rod,  aux_rod)
{
        if (n1 == 0)
        {
            return;
        }
        towerOfHanoi(n1 - 1, from_rod, aux_rod, to_rod);
        console.log("Move disk " + n + " from rod " + from_rod +
        " to rod " + to_rod);
        towerOfHanoi(n1 - 1, aux_rod, to_rod, from_rod);
    }
  
    // Driver code
    var n1 = 4; // Number of disks
    towerOfHanoi(n1, 'A', 'C', 'B'); // A, B and C are names of rods



