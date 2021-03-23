let courses = [];


const courseNames = () => {
    var course;
    courses = [];

    for(i=0, j=1; i<2; i++, j++){
        // courses[i] = prompt('Enter Course Name  ', '');
        course = prompt('Course-'+ j,  '')
        courses.push(course)
    }

    console.log('courses  ', courses[0], courses[1])
    console.log(courses);

    document.getElementById('myCourses').innerText = ''
    document.getElementById('myCourses').innerText = courses
}

displayNames = () => {
    
    for(i=0, j=1; i< courses.length; i++, j++){
        alert('Course-'+ j + ': '+  courses[i])        
    }
    
    document.getElementById('myCourses').innerText = ''
    document.getElementById('myCourses').innerText = courses

    // changedCourse = prompt('Your courses are:  ' ,  courses)
    // console.log(changedCourse)
    // courses  = changedCourse
    // console.log('After Change  ', courses)


   
    // for(i=0; i<courses.length; i++){
    //     if(courses[i] !== changedCourse[i]) {
    //         courses[i] = changedCourse[i]  
    //     }
    // }  

}

const changeCourse = () => {

    for(i=0, j=1; i<2; i++, j++){
        // courses[i] = prompt('Enter Course Name  ', '');
        course = prompt('Course-'+ j,  courses[i])
       
        if(course != courses[i]){
            
            courses.splice(i, 1, course)
            
        }
    }

    document.getElementById('myCourses').innerText = ''
    document.getElementById('myCourses').innerText = courses

}