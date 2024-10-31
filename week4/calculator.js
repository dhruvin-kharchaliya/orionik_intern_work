let display = document.getElementById('Inputbox');
let buttons = document.querySelectorAll('button');
// console.log(buttons);
let arraybtn = Array.from(buttons);
// console.log(arraybtn);
let string = '';
arraybtn.forEach(function (btn) {
    btn.addEventListener('click', (event) => {
        
        if (event.target.innerHTML == 'DEL') {
            string = string.substring(0, string.length - 1);
            display.value=string;
        }
        else if(event.target.innerHTML=='AC'){
            string='';
            display.value=string;
            
        }
        else if(event.target.innerHTML=='='){
         string=eval(string);
         display.value=string;
        }
        else{
            string += event.target.innerHTML;
            display.value = string;
            
        }
    })
}
)