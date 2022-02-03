// declaring string variables
var firstName = "Zack,";
var lastName = "Isingoma";
console.log(lastName)
console.log(firstName)
//escaping quotes in strings.
var myString = "My name is \"zack\"isingoma ";
console.log(myString)
// quoting with single quotes
var quotes = 'im using "single quotes to quote the words inside with double quotes"';
console.log(quotes)
//escaping sequences in strings
var newline = "im making a new line using\n 'and\t for a new tab and \\ for creating a backslash'";
console.log(newline)
//concetrating strings with plus operator
var order = "you come first and" + "i come second";
console.log(order)
var strOrder = "i come first and ";
strOrder += "you come second";
console.log(strOrder)
//constructing strings with variables
var myName = "Zack";
var feeling = "Hello " +myName+", how are you feeling";
console.log(feeling)
//appending variables to strings
firstName += lastName;
console.log(firstName)
//finding length of string//"didnt work. maybe next time"
myNameLength = 0;
myNamelength = myName.length;
console.log(myNameLength)
//bracket notation for first character
firstLetterOfFirstName = "";
var firstName = "ZACK"
firstLetterOfFirstName = firstName[0];
console.log(firstLetterOfFirstName)
//last number of string
var firstName = "Zack";
var lastLetter = firstName[firstName.length -1];
console.log(lastLetter)