// There are mainly two ways to access dom element
// document.getElementById();
// document.querySelector;

// localstorage syntax
// window.localStorage.setItem('key', value);

// IIFE (Two Eyes and One Ear)
// Immediately Invoked Function Expression (IIFE)
// Syntax
// ()(); (Two Eyes and One Ear)

let saveRegisInfo = () => {
    // console.log('ok');
    let fname = document.getElementById('first_name').value;
    let lname = document.getElementById('last_name').value;
    let dur = document.querySelector('.d_myselect').value
    // console.log(fname, lname);
    window.localStorage.setItem('first_name', fname)
    window.localStorage.setItem('last_name', lname)
    window.localStorage.setItem('duration', dur)
}
let playSound = () => {
    // console.log('Hello Meenakshi')
    let at = document.querySelector('.d_audio');
    at.play();
}

let start = () => {
    // Built in function
        // Set the date we're countung down to
        var nextTime = new Date().getTime();
        nextTime = new Date(nextTime + (localStorage.getItem('duration')*60* 1000)); // Add one hour

        // Create a new date object  with the specified datetime
        const datetime = new Date(nextTime);
        
        // get the Unix timestamp by dividing the ms since Jan 1 1995
        const unixTimestamp = Math.floor(datetime.getTime()/ 1000)*1000;
        
        setInterval(()=>{
            // Get today's data and time
            var now = new Date().getTime();
            // add a certain amount of time to the current time
            console.log('Next Time', unixTimestamp);
            console.log('Current Time', now);

            // Find the distance between now and the count down date
            var distance = unixTimestamp - now;

            // Time calculations for days, hours, minutes and seconds
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in the element with id="demo"
            document.querySelector(".d_duration").innerHTML = minutes + "m " + seconds + "s ";

            // If the count down is finished, write some text
            if (distance < 0) {
                clearInterval(x);
                document.querySelector(".d_duration").innerHTML = "EXPIRED";
            }
        },1000);
}

// IIFE stands for Immediately Invoked Function Expression. It is a JavaScript design pattern that allows you to create a function and immediately execute it.
// (after the page load)();
(()=>{
    
    // To know the character current position
    let currentCharacterPos = 0;

    let fname = window.localStorage.getItem('first_name');
    let lname = window.localStorage.getItem('last_name');
    

    // console.log('Page Loaded Successfully');
    // Get a refrence to the modal element
    var modal = document.getElementById('registrationModal');
    // Create a Bootstrap modal instance using the modal element
    var modalInstance = new bootstrap.Modal(modal);
    // Call the 'show' method on the modal instance  to launch the modal
    if(fname === null){
        // True
        modalInstance.show();
    }
    // check if the local storage is set or not
    if(fname !== null){
        document.querySelector('.d_welcome').innerHTML = 'Welcome ' + fname +' '+ lname;
        console.log(fname);
    } 
    // Keypress sound play

        document.addEventListener('keypress',(e)=>{
            console.log(e.keyCode);
            if(e.keyCode == 113) {
                let a = document.querySelector('.d_q');
                console.log(a.classList.add('active')); 
                document.querySelector('.l_pinky').style.display = "block";
            }
            if(e.keyCode == 97) {
                let a = document.querySelector('.d_a');
                console.log(a.classList.add('active')); 
                document.querySelector('.l_pinky').style.display = "block";
            }
            if(e.keyCode == 122) {
                let a = document.querySelector('.d_z');
                console.log(a.classList.add('active')); 
                document.querySelector('.l_pinky').style.display = "block";
            }
            if(e.keyCode == 119) {
                let a = document.querySelector('.d_w');
                console.log(a.classList.add('active')); 
                document.querySelector('.l_ring').style.display = "block";
            }
            if(e.keyCode == 115) {
                let a = document.querySelector('.d_s');
                console.log(a.classList.add('active')); 
                document.querySelector('.l_ring').style.display = "block";
            }
            if(e.keyCode == 120) {
                let a = document.querySelector('.d_x');
                console.log(a.classList.add('active')); 
                document.querySelector('.l_ring').style.display = "block";
            }
            if(e.keyCode == 101) {
                let a = document.querySelector('.d_e');
                console.log(a.classList.add('active')); 
                document.querySelector('.l_middle').style.display = "block";
            }
            if(e.keyCode == 100) {
                let a = document.querySelector('.d_d');
                console.log(a.classList.add('active')); 
                document.querySelector('.l_middle').style.display = "block";
            }
            if(e.keyCode == 99) {
                let a = document.querySelector('.d_c');
                console.log(a.classList.add('active')); 
                document.querySelector('.l_middle').style.display = "block";
            }
            if(e.keyCode == 114) {
                let a = document.querySelector('.d_r');
                console.log(a.classList.add('active')); 
                document.querySelector('.l_index').style.display = "block";
            }
            if(e.keyCode == 102) {
                let a = document.querySelector('.d_f');
                console.log(a.classList.add('active')); 
                document.querySelector('.l_index').style.display = "block";
            }
            if(e.keyCode == 118) {
                let a = document.querySelector('.d_v');
                console.log(a.classList.add('active')); 
                document.querySelector('.l_index').style.display = "block";
            }
            if(e.keyCode == 116) {
                let a = document.querySelector('.d_t');
                console.log(a.classList.add('active')); 
                document.querySelector('.l_index').style.display = "block";
            }
            if(e.keyCode == 103) {
                let a = document.querySelector('.d_g');
                console.log(a.classList.add('active')); 
                document.querySelector('.l_index').style.display = "block";
            }
            if(e.keyCode == 98) {
                let a = document.querySelector('.d_b');
                console.log(a.classList.add('active')); 
                document.querySelector('.l_index').style.display = "block";
            }
            if(e.keyCode == 98) {
                let a = document.querySelector('.d_b');
                console.log(a.classList.add('active')); 
                document.querySelector('.r_index').style.display = "block";
            }
            if(e.keyCode == 32) {
                let a = document.querySelector('.d_space');
                console.log(a.classList.add('active')); 
                document.querySelector('.l_thumb').style.display = "block";
            }
            if(e.keyCode == 32) {
                let a = document.querySelector('.d_space');
                console.log(a.classList.add('active')); 
                document.querySelector('.r_thumb').style.display = "block";
            }
            if(e.keyCode == 121) {
                let a = document.querySelector('.d_y');
                console.log(a.classList.add('active')); 
                document.querySelector('.r_index').style.display = "block";
            }
            if(e.keyCode == 104) {
                let a = document.querySelector('.d_h');
                console.log(a.classList.add('active')); 
                document.querySelector('.r_index').style.display = "block";
            }
            if(e.keyCode == 110) {
                let a = document.querySelector('.d_n');
                console.log(a.classList.add('active')); 
                document.querySelector('.r_index').style.display = "block";
            }
            if(e.keyCode == 117) {
                let a = document.querySelector('.d_u');
                console.log(a.classList.add('active')); 
                document.querySelector('.r_index').style.display = "block";
            }
            if(e.keyCode == 106) {
                let a = document.querySelector('.d_j');
                console.log(a.classList.add('active')); 
                document.querySelector('.r_index').style.display = "block";
            }
            if(e.keyCode == 109) {
                let a = document.querySelector('.d_m');
                console.log(a.classList.add('active')); 
                document.querySelector('.r_index').style.display = "block";
            }
            if(e.keyCode == 105) {
                let a = document.querySelector('.d_i');
                console.log(a.classList.add('active')); 
                document.querySelector('.r_middle').style.display = "block";
            }
            if(e.keyCode == 107) {
                let a = document.querySelector('.d_k');
                console.log(a.classList.add('active')); 
                document.querySelector('.r_middle').style.display = "block";
            }
            if(e.keyCode == 112) {
                let a = document.querySelector('.d_p');
                console.log(a.classList.add('active')); 
                document.querySelector('.r_pinky').style.display = "block";
            }
            if(e.keyCode == 111) {
                let a = document.querySelector('.d_o');
                console.log(a.classList.add('active')); 
                document.querySelector('.r_ring').style.display = "block";
            }
            if(e.keyCode == 108) {
                let a = document.querySelector('.d_l');
                console.log(a.classList.add('active')); 
                document.querySelector('.r_ring').style.display = "block";
            }
            playSound();
        })
        document.addEventListener('keyup',(e)=>{
            console.log(e)
            
            var elements = document.getElementsByClassName('active');
             for(var i = 0; i < elements.length; i++) {
                elements[i].classList.remove('active');
            }
            
            var elements = document.getElementsByClassName('d_hand_dot');
             for(var i = 0; i < elements.length; i++) {
                elements[i].style.display= "none";
            }
            // In below code we are finding character current postion and adding the number
            currentCharacterPos = currentCharacterPos +1;
            console.log(currentCharacterPos);

            // document.querySelector('.d_hand_dot').style.display = "none";
        })
        // document = whole website
        
        /*
        for (expresion 1 ; condition; expresion 3 increment++/decrement--) {

        }
        */

        // Typing durarion code
        var gametime = '';
        for(var i = 0; i <= 60; i++){
            gametime = gametime + `<option value="${i}">${i}</option>`;
        }
        // console.log(gametime);
        // console.log(document.querySelector('.d_myselect'));
        document.querySelector('.d_myselect').innerHTML = gametime;
        // document.querySelector('.d_duration').innerHTML = localStorage.getItem('duration')+':00';
        // Ternary operator
        // Syntax
        // C?T:F (C= conditon, ? T = true, : F = false)
        document.querySelector('.d_duration').innerHTML = localStorage.getItem('duration') == null ?'': localStorage.getItem('duration')+':00'; 


        // Below is the code for paragraph loaded as per requirenment start

        let story = `One day a fox became very hungry as he went to search for some food. He searched high and low, but couldn't find something that he could eat. Finally, as his stomach rumbled, he stumbled upon a farmer's wall. At the top of the wall, he saw the biggest, juiciest grapes he'd ever seen. They had a rich, purple color, telling the fox they were ready to be eaten. To reach the grapes, the fox had to jump high in the air. As he jumped, he opened his mouth to catch the grapes, but he missed. The fox tried again but missed yet again. He tried a few more times but kept failing. Finally, the fox decided it was time to give up and go home. While he walked away, he muttered, “I'm sure the grapes were sour anyway.”`
        
        // Split Function breaks the "string" into "array sub string" (Array -----> String)
        console.log(story.split(''));
        
        // Slice Function return selected element in an array, as a new array with the help of array start and end index number (String------> Array)
        let stroyword = story.split(' ');
        // Array index number start from 0 (0, 1, 2, 3)
        // Here 0 is Inclusive and 20 is exclusive as we just need 20 words in one para (0 to 20) 
        
        console.log(stroyword.slice(0,20).join(' '))
        
        // Function chaining a().b().c().d()....
        // console.log(stroyword.split(' ').slice(0, 20).join(' '));
        // Access the dom element
        // join method return the array as string and not the change the orignal array
        let showcontent = stroyword.slice(0, 20).join(' ');
        document.querySelector(".d_type_content").innerHTML = showcontent
        // End

    })();


