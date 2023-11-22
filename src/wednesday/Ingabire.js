function operations(num1,operation,num2){
    switch (operation){
        case '+':
            return num1 + num2;

            break;

            case '-':
            return num1 - num2;
            break;

            case 'x':
                return num1*num2;
                break;

                case '/':
                    if(num1===0){
                        return 0;
                    }else if( num2===0){
                            return ' operation is impossible''
                        }else{
                            return num1/num2;
                        }
                        default:
                            return invalid;  
                        }
                    }
                        
                
                        
                        
                    
                    
                    const num1 = 6;
                    const num2 = 2;
                    const operation='+';
                    console.log(operations(6,2));
