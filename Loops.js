for(var i=0; i<3; i++){
    console.log(i);
}

for(var i=10; i>0; i--){
    console.log(i);
}

for(var i =12; i>3; i-=2){
    console.log(i);
}////12,10,8,6,4

for(var i=0; i<3; i+=0.5){
    console.log(i);
}/////0.5,1,1.5,2,2.5

/////////////////While Loops//////////////////////////////////
var i =0;
while(i<3){
    console.log(i)
    i++;
}//0,1,2

var start = 0;
var end =10;
while(start <=end){
    console.log("start: " + start + ", end:" + end);
    start++;
    end--;
}

//////////////////////////////////////////
var res = " ";
for(var i = 0; i<10; i++){
    res += "*";
    console.log(res);
}