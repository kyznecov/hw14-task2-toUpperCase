let arr = ["Строка1","Строка2","Строка3",]

arr = arr.map(function(x){ return x.toUpperCase(); })

console.log(arr);

///////////

let arr2 = ["Строка1","Строка2","Строка3",];


function mapToUpperCase(arr2) {

    for (let i = 0; i < arr2.length; i++) {
       // newArray.push(newArray += myArray[i]);
        arr2[i] = arr2[i].toUpperCase()
        
    };
//    return arr2[i].toUpperCase();
};

mapToUpperCase(arr2);
console.log(arr2)