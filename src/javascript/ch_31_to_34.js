const dobInfo = () => {

    let currentDate =   new Date(Date.now());
    let birthDate =   new Date();
    let dobMilliseconds;
    let dd = ''
    let dname = "";
    let ageStr;
    let monthsPassed = 0;
    let years = 0;
    var ageDate= new Date();

    //  (Date.parse(new Date()) - Date.parse('2021-02-01'))
    // (1000 * 60 *60 * 24 * 365)
    // 1000 = milliseconds
    // 60 = seconds
    // 60 = minutes
    // 24 = hours
    // month = 30 ( +1 because month starts with 0)
    // 365 = days

    dname = document.getElementById('dobname').value;

    birthDate = document.getElementById('dob').value;
    birthDate = new Date(birthDate+"T00:00")

    console.log('currentDate  ', currentDate)
    console.log('birthDate  ', birthDate)

    currentDate = Date.parse(currentDate);
    dobMilliseconds = Date.parse(birthDate);

    
    console.log('currentDate  ', currentDate)
    console.log('dobMilliseconds  ', dobMilliseconds)
  
    totdays = totalDays(currentDate, dobMilliseconds)
    years = ageInYears(totdays);
    monthsPassed = ageInMonths(years);

    // console.log('totdays.... ', totdays)
    // console.log('monthsPassed........  ',  monthsPassed)   
    // console.log('years...... ', years)

       
    // -------------  Comming Birthday -------------

    daysleft = comingBirthdayDays(birthDate);

    // console.log('daysleft  ',  daysleft)
   // -----------------

    if( dobMilliseconds < currentDate ) {

            document.getElementById('dobResult').innerText = dname +  

            " \n Your DOB: "+ new Date(birthDate).toUTCString() + 
            "\n Your age is: " + Math.floor(years) + " years, "
            + Math.floor(monthsPassed) + " Month(s) and " 
            + Math.floor((monthsPassed % 1)* 30) + " days old. " 
            + "\nAge in Days: " + Math.round(totdays)
            + "\nNext birthday: " + daysleft +" day(s) left"
    } else {

        document.getElementById('dobResult').innerText =  dname + "\nInvalid Date of Birth, can't be greater than current date."

    }

}


//====================================================

const totalDays = (presentDate, birthDate) =>     (presentDate - birthDate) / (1000 * 60 * 60 * 24) 

const ageInYears = (days) =>  days / 365;

const ageInMonths = (years) => { 
    
    // leapDays = Math.floor(((totdays/365)%1)*10)
    // console.log("leapDays ----------- ",  leapDays )
    // return (((totdays-leapDays)/365)%1)/30     
    
    return (((years % 1 ) * 365 )/30);  
}


const comingBirthdayDays = (bd) => {
    let y = 0;
    let m = 0;
    let d = 0;

     console.log('---------  comingBirthdayDays() -----------   ', bd)

     
     presentDate = new Date();
     dob1 = new Date(bd)
    
     console.log('dob1  ', dob1 +'  presentDate '+ presentDate)

     
    if(dob1.getMonth() === presentDate.getMonth() && dob1.getDate() === presentDate.getDate() ) {

        yearOld = presentDate.getFullYear() - dob1.getFullYear();
          
       
        return "Congratulations " + yearOld + " year(s) Old! \nNext Birthday will be on " + parseInt(dob1.getFullYear()+1) + "-0" + parseInt(dob1.getMonth()+1) +"-0" + dob1.getDate()
        + ", 365";
    } 
        else if((dob1.getMonth() >= presentDate.getMonth()) ){
            

            if((dob1.getMonth() > presentDate.getMonth())) {                
                birthDateComming = presentDate.getFullYear() +'-'+ parseInt(dob1.getMonth()+1) +'-'+ dob1.getDate();
                console.log('  birthDateComming   1 ', birthDateComming)          
            }

            if((dob1.getMonth() === presentDate.getMonth())  && (dob1.getDate() < presentDate.getDate()) ) {                
                birthDateComming = parseInt(presentDate.getFullYear()+1) +'-'+ parseInt(dob1.getMonth()+1) +'-'+ dob1.getDate();
                console.log('  birthDateComming   2 ', birthDateComming)          
            }


            if((dob1.getMonth() === presentDate.getMonth())  && (dob1.getDate() >  presentDate.getDate()) ) {                
                birthDateComming = presentDate.getFullYear() +'-'+ parseInt(dob1.getMonth()+1) +'-'+ dob1.getDate();
                console.log('  birthDateComming  3  ', birthDateComming)          
            }


            birthDaysleft = Math.abs(Math.floor(totalDays(presentDate, new Date(birthDateComming))))

            return birthDaysleft;
           
    }

    else if((dob1.getMonth() < presentDate.getMonth()) ){
        birthDateComming = parseInt(presentDate.getFullYear()+1) +'-'+ parseInt(dob1.getMonth()+1) +'-'+ dob1.getDate();
        // console.log('  birthDateComming....    ', birthDateComming)     
        
        birthDaysleft = Math.abs(Math.floor(totalDays(presentDate, new Date(birthDateComming))))
        return birthDateComming +", "+ birthDaysleft;
    }
    
}
const validateDOB = (b, present) => {

   
}