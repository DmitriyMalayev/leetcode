// bitwise.js
// JavaScript Bitwise operators
// AND &
// OR  |
// XOR ^
// NOT ~
// Shift Left <<
// Shift Right >>

let log = console.log;
let n = 10;     //1010
let i = 6;      // 110
log( n.toString(2), i.toString(2) );
// 1010
//  110
// 0010  2     present in both
log("AND &",  (n & i) )
let temp = 2;
log( temp.toString(2) )

//  1010
//   110
//  1110   present in either one
log("OR | ",  (n | i) );

// 1010
//  110
// 1100  12 XOR    present only in one of them 
log('XOR ^', (n^i) );

// ~ 1010   10
//   0101    
//  x  = -(x+1)  
log('NOT ~', (~n) );  -11

//PERMISSIONS
// read, write, delete
let perm = 6 ;
   
let allowedToRead = (perm & 4)?true:false;
let allowedToWrite = (perm & 2)?true:false;
let allowedToDelete = (perm & 1)?true:false;
//  0110  6
//  0100  AND 4
//  0100  4 

//  0110  6
//  0100  AND 4
//  0100  0
 
for(var c=0; c<50; c++){
    if(c&1){
        //log('Odd');
    }else{
        //log('\t\tEven');
    }
}

//101010 >> 4  = 10
//  111  >> 1  = 3
log( 7 >> 1 );

//  111 << 1 = 1110   (14)
//  1000 << 1 = 10000  (16)
log( 7 << 1);
log( 8 << 1);

//  FF3300  - 24bit values  8bits Red, 8bits Green, 8 bits Blue
// GREEN  - Shift 8 >>, AND 11111111  (255)
//  111111110011001100000000  >> 8 = 1111111100110011
//  1111111100110011
//  0000000011111111
//          00110011

var color = 0xFF3300;
var noBlue = color >> 8;
var green = noBlue & 255;
log('GREEN', green, green.toString(16))

/**************************
counting in decimal, binary
 0      0       
 1      1       2^0
 2     10       2^1
 3     11
 4    100       2^2
 5    101
 6    110
 7    111
 8   1000       2^3
 9   1001
10   1010
11   1011
12   1100
13   1101
14   1110
15   1111
16  10000       2^4
**************************/