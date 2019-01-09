/*sum = 0;
for (i=0;i<1000;i++) {
    if (i%3==0 | i%5 ==0) {
        sum += i;
    }
}
console.log(sum);
*/


x1 = 1;
x2 = 2;
sum = 0;

for (y=0;y<4000000) {
    y = x1+x2;
    if (y%2==0) sum += y;
    x1 = y;
}
