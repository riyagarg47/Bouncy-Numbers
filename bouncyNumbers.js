
let bouncy = (a,c) => {
let flag1=0;
let flag2=0;
for(let i=0;i<c-1;i++)
{
    if(a[i]>a[i+1])
	 {
	 flag1=1;
	 break;
	 }
}
for(let i=1;i<c;i++)
{
    if(a[i-1]<a[i])
    {
    flag2=1;
    break;
    }

}

if(flag2 == 1 && flag1 == 1)
    return 1;

else return 0;
}


let check = () => {
    let result=0;
 for(let n=101;;n++)
 {
	let x;
	x=n;
	let c=0;

	while(x!=0)
	{
	c++;
	x=x/10;
	}

	let a = [];
	a.length = c;
	let j=0;
	x=n;

	while(x!=0)
	{
	a[c-j-1]=x%10;
	j++;
	x=x/10;
	}

	if(bouncy(a,c))
	result++;

	let d=result/n;
	if(d>=0.99)
	   {
	   console.log(n);
	   break;
	   }
}

}

console.log("Calculating the least number for 99% proportion..Please wait..");
	check();
   // return 0;

