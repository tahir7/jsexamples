var getReversedSlice = () => {

    let textSlice = ''
    let endingNumber = 0;
    let reversedString = '';
    let x=0;    
    document.getElementById('resultedSlice').innerText ='';


    endingNumber = Math.ceil(document.getElementById('charstoExtract').value) -1
    textSlice = document.getElementById('anytext').value

    
   if( endingNumber  >= textSlice.length) {
             endingNumber  = textSlice.length-1
    }

       
       
    for(x=endingNumber; x >= 0; x--) {
        // alert(x, textSlice[x])            
        reversedString = reversedString + textSlice[x] ;
    }
    console.log('reversed  ', reversedString)
    document.getElementById('resultedSlice').innerText = reversedString
    alert(reversedString);

}


var firstLetterCapital = () => {

    document.getElementById('firstLetterCapitalOutput').innerText = ''
    let getText = document.getElementById('anySentence').value + ' ';
    let strSentence = '';
    let strTmp = ''

    for(i=0; i< getText.length; i++) {

        if (getText[i] != ' ') {
            strTmp = strTmp + getText[i] ;
        }

        else if (getText[i] === ' ') {
         
            // console.log('strTmp - Space  ', strTmp);

            if(strTmp.trim().length > 0) {
                strTmp.toLowerCase();

                strTmp = strTmp[0].toUpperCase() + (strTmp.slice(1, strTmp.length)).toLowerCase() + ' ';
                // console.log('strTmp - Space  ', strTmp);
                strSentence = strSentence + strTmp;
                strTmp='';
             }            
        }

        
    }       
        
        console.log('Result .....  ', strSentence )
        document.getElementById('firstLetterCapitalOutput').innerText = strSentence

}