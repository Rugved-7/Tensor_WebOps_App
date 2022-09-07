<!DOCTYPE html>
<html lang="en">
<head>
   
    <title>Q5</title>
</head>

<script>
    /* You are given a set of five people with their names and age. */
const people = {
    '1' : {
        'name' : 'Rohan',
        'age' : 24
    },

    '2' : {
        'name' : 'Ujjwal',
        'age' : 27
    },
    '3' : {
        'name' : 'Tara',
        'age' : 18
    },
    '4' : {
        'name' : 'Sagar',
        'age' : 20
    },

    '5' : {
        'name' : 'Kumar',
        'age' : 21
    }
}

array=[];
x=[];
for(let k=0;k<=4;k++)
{
    array[k]=(people[k+1].age);
}
array.sort();
function sortArr(array)
{
    for(let p=0;p<=4;p++)
    {
        for(let q=0;q<=4;q++)
        {
            if(array[q]==people[p+1].age)
            {
                x[q]=people[p+1].name;
                break;
            }
           
        }
    }
    return x;
}

console.log(sortArr(array))

















/* You need to make an array of names from people. Names should be arranged in ascending order of their age.*/
/* Write a function for the same. Hardcoding is not allowed. */
/* Write your code here.*/





</script>

<body>
    
</body>
</html>


