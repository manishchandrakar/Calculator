var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator  = null;


for(var i=0;i<buttons.length;i++)
{
    buttons[i].addEventListener('click', function()
    {
        var value = this.getAttribute('data-value');
        if(value=='+')
        {
            operator = '+';
            operand1 = parseFloat(display.textContent);
            display.innerText += value;

        }
        else if( value=='-')
        {
            operator = '-';
            operand1 = parseFloat(display.textContent);
            display.innerText += value;
        }
        else if(value == '*')
        {
            operator = '*';
            operand1 = parseFloat(display.textContent);
            display.innerText += value;
            console.log('click');
                }
        else if(value == '/')
        {
            operator = '/';
            display.innerText += value;
            operand1 = parseFloat(display.textContent);
        }
        else if(value =='%')
        {
            operator = '%';
            display.innerText += value;
            operand1 = parseFloat(display.textContent);
        }
        else if(value =='AC')
        {
            display.innerText = '';
        }
        else if (value=='='){
             display.innerText = eval(display.innerText);
                display.innerText = parseFloat(display.innerText).toFixed(2);

        }
        else{
            display.innerText += value;
        }
    });
}