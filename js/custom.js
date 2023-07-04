// There are mainly two ways to access dom element
// document.getElementById();
// document.querySelector;

// localstorage syntax
// window.localStorage.setItem('key', value);

// IIFE (Two Eyes and One Ear)
// Immediately Invoked Function Expression (IIFE)
// Syntax
// ()(); (Two Eyes and One Ear)

let fname = window.localStorage.getItem('first_name');
let lname = window.localStorage.getItem('last_name');

let story = `One day a fox became very hungry as he went to search for some food. He searched high and low, but couldn't find something that he could eat. Finally, as his stomach rumbled, he stumbled upon a farmer's wall. At the top of the wall, he saw the biggest, juiciest grapes he'd ever seen. They had a rich, purple color, telling the fox they were ready to be eaten. To reach the grapes, the fox had to jump high in the air. As he jumped, he opened his mouth to catch the grapes, but he missed. The fox tried again but missed yet again. He tried a few more times but kept failing. Finally, the fox decided it was time to give up and go home. While he walked away, he muttered, “I'm sure the grapes were sour anyway.”`

let pertwolinecharcount = 285;
        let initialSquence = 1; 
        let currentcharcountlocation = 1;
        let curloc = 1;
        let prevChar = []; // Square bracket is a Array
        let currentChar = '';
        // let nextChar = '';  
        // console.log('Total count', story.length);
        var twolinechar = Math.ceil(story.length/pertwolinecharcount);
        

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
let playSound = (status) => {
    let at = document.querySelector('.d_audio');
    if(status === 'correct'){
        at.src = '../sound/key_sound.mp3';
        // at.play();
        console.log('I am Playing sound file', at.play());
    }else{
        at.src = '../sound/er_one.mp3';
        console.log('Ooh Error', at.play());
        // console.log('I am error sound file', at.play());
    }
}

let start = ( ) => {
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
        // console.log(fname);
    } 
    // Keypress sound play
        document.addEventListener('keypress',(e)=>{

            var prevChar2 = prevChar.pop();
            // console.log(prevChar)
            console.log(prevChar)
            console.log(prevChar2)
            if(prevChar2 !== currentChar){
                // Play Error Sound
                // console.log('Incorrect', prevChar);
                // console.log('Incorrect', currentChar);
                playSound('correct');
            }else{
                // console.log('Correct', prevChar);
                // console.log('Correct', currentChar);
                // Play error sound here
                playSound('incorrect');
            }
            
            console.log('-->', e);
            console.log('I am the key', currentChar = e.key);
            currentChar = e.key;
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
        })
        document.addEventListener('keyup',(e)=>{
            // console.log(e)
            var elements = document.getElementsByClassName('active');
             for(var i = 0; i < elements.length; i++) {
                elements[i].classList.remove('active');
            }
            
            var elements = document.getElementsByClassName('d_hand_dot');
             for(var i = 0; i < elements.length; i++) {
                elements[i].style.display= "none";
            }
            
            // console.log('initialSquence-->', initialSquence);
            // console.log('currentcharcountlocation-->', currentcharcountlocation);
            // console.log('pertwolinecharcount-->', pertwolinecharcount);
            if(currentcharcountlocation >= pertwolinecharcount){
                currentcharcountlocation = 0;
                initialSquence++;
                // console.log('new initialSquence', initialSquence);
            }else {
                currentcharcountlocation++;
            }

            if(initialSquence === 1) {

                // console.log('---->',story.substring(initialSquence-1, (initialSquence*pertwolinecharcount), (initialSquence*pertwolinecharcount) + pertwolinecharcount));
                let tpl = story.substring(initialSquence-1, (initialSquence*pertwolinecharcount), (initialSquence*pertwolinecharcount) + pertwolinecharcount);

                // let tpl = 'dinesh'
                // cll = 1 <span class="text-green">d</span><span class="text-red;text-decoration-underline">i</span>nesh 

                var p1 = tpl.substring(0, currentcharcountlocation); 
                var p2 = tpl.substring(currentcharcountlocation);
                
                prevChar.push(p2.charAt(0));
                p2 = "<span style='text-decoration: underline;font-weight:bolder;'>" + p2.charAt(0) + "</span>" + p2.slice(1);
                
                // console.log('---> part 1', p1);
                // console.log('---> part 2', p2);
                let textcolor = `<span style="color:red;">${p1}</span>` + p2;
                document.querySelector('.d_my_para').innerHTML = textcolor;
                // console.log('next char--->', nextChar);
                }else{
                // console.log('---->',story.substring((initialSquence-1)*pertwolinecharcount, (initialSquence*pertwolinecharcount) + pertwolinecharcount));
                let tpl = story.substring((initialSquence-1)*pertwolinecharcount, (initialSquence*pertwolinecharcount) + pertwolinecharcount);
                 
                var p1 = tpl.substring(0, currentcharcountlocation); 
                var p2 = tpl.substring(currentcharcountlocation); 
                prevChar.push(p2.charAt(0));

                p2 = "<span style='text-decoration: underline;font-weight:bolder;'>" + p2.charAt(0) + "</span>" + p2.slice(1);
                

                // console.log('---> part 1', p1);
                // console.log('---> part 2', p2);
                // console.log('---> part 2', tpl);

                let textcolor = `<span style="color:red;">${p1}</span>` + p2;
                document.querySelector('.d_my_para').innerHTML = textcolor;
                // console.log('next char--->', nextChar);
                }
            curloc++;
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
    })();


