const $text = document.getElementsByTagName('input')[0]

const $buttons = Array.from(document.getElementsByTagName('input')).filter(e=>e.type ==='button')


$buttons.map( (button)=>{
button.addEventListener('click', (e) =>{
    switch(e.target.value){
        case 'C':
            $text.value = '';
            break;
        case '=':
            try{
                $text.value = eval($text.value);
                
            }catch{
                $text.value = 'ERROR';
            }
            break;
        default:
            $text.value += e.target.value;
    }

} )
} ) 
