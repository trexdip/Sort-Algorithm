var array=[45,2,34,8]
var newArray= new Array()
console.log("the original array: "+array)
for(var i=0;i<array.length;i++)
{
	if(array[i]>array[i+1])
	{
		
			swapFunction()
			swapAgainFunction()
			
	}
	else
	{
		swapAgainFunction()
	
	}
}

function swapFunction()
{
		newArray[i]= array[i+1]
		newArray[1+i]=array[i]
		array[i]=newArray[i]
		array[i+1]=newArray[i+1]
}
function swapAgainFunction()
{
	
		if(array[i-1]<array[i-2])
		{	newArray[i]=array[i-1]
			array[i-1]=array[i-2]
			array[i-2]=newArray[i]
		}
	
}
console.log(array)