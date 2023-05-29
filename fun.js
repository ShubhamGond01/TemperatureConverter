const form=document.querySelector('.form');


form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const num=document.getElementById('num');
    const temperature=document.getElementById('temp');
    
    const answer=document.getElementById('answer');
    // answer.innerHTML=num.value+" "+temp.value;
    let numVal=num.value;

    const tempValue=temp.options[temperature.selectedIndex].value;

    

    const celToFah=(cel)=>{
        let fahh=Math.round((cel*9/5)+32);
        return fahh;
    }

    const fahToCel=(fah)=>{
        let cell=Math.round((fah-32)*5/9);
        return cell;
    }

    let result;
    console.log(tempValue);
    if(tempValue == "celcius"){
        result=celToFah(num.value);
        answer.innerHTML=result+ "fahrenheit";
        console.log("celcius");
    }
    else if(tempValue == "fahrenheit"){
        result=fahToCel(num.value);
        answer.innerHTML=result + "celcius";
        console.log("fahrenheit");
    }

    // console.log(tempValue);
    // if(temperature.value == "celcius"){
    //     // result=celToFah(num.value);
    //     answer.innerHTML=Math.round((numVal*9/5)+32) + "fahrenheit";
    //     // console.log("celcius");
    // }
    // else if(temperature.value == "fahrenheit"){
    //     // result=fahToCel(num.value);
    //     // answer.innerHTML=result + "celcius";
    //     // console.log("fahrenheit");
    //     answer.innerHTML=Math.round((numVal*9/5)+32) + " celcius";

    // }
});
