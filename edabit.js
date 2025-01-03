function minMax(arr) {
  let max=arr[0];
	let min=arr[0];
	 let n = arr.length;
	for (i=1;i<n;i++)
		{
			if(arr[i]>max)
				{max=arr[i];}
			if(arr[i]<min)
			{min=arr[i];}	
		}
	return[min,max]
}
// *******************************************

function sumOfCubes(nums) {
	let sum=0
	for (i=0; i<nums.length; i++)
		{
			sum+= nums[i]**3;
		}
	return sum;
}

// ******************************************
function filterArray(arr) {
	let tab=[];
	for (i=0; i < arr.length; i++)
		{
			if(typeof(arr[i])!== "string" && arr[i] >=0 && arr[i]!==arr[i+1] )
			  { 
			    tab.push(arr[i]);
			  }
		}
	return tab;
}


// *******************************
function isSymmetrical(num) {
let num_str=num.toString();
let n=num_str.length
let afficher = true
	for(i=0;i<n/2;i++)
	{let j=n-1-i
	        if(num_str[i]!==num_str[j])
	        {return false;}
	}
return afficher;
}

// *****************************************
function isSpecialArray(arr) {
	let i;
	n=arr.length;
	for(i=0;i<n;i++)
	{ 	
	     if((arr[i]%2 !==0 && i%2 ===0)||(arr[i]%2 ===0 && i%2 !==0))
	      { return false; }
	    
	}
	return  true;
}

// ****************************************
function countTrue(arr) {
	let cpt=0;
	let n=arr.length
	for(i=0;i<n;i++)
	{
	    if(arr[i].toString() === "true")
	    {
	        cpt++;
			}   
	}
	return cpt;
}
// *******************************************
function objectToArray(obj) {
let tab=[];
	 for(let key in obj)
		 {
			 //let value=obj[key]
			 tab.push([key,obj[key]]);
		 }
	 return tab
}

// *******************************************

function arrayOfMultiples (num, length) {
	let tab=[];
	for (i=1 ; i<=length;i++)
	{   
	    tab.push(num*i);
	    
	}
	return tab;
}

// *******************************************
function marathonDistance(d) {
	let sum=0;
	for(i=0 ; i<d.length ; i++)
	{ 
	    sum+= Math.abs(d[i]);
	}
		if(sum < 25 || sum >25)
      	{ 
      	    return false;
      	}
      	 
	return true;
}
// ******************************************

function squareDigits(n) {
let tab=[];
let nbr;

 let n_str=n.toString();
 for(i=0; i< n_str.length;i++)
 {    
     tab.push(n_str[i]**2);
     nbr = tab.join("");
 }
  return Number(nbr);
}
// *******************************************
