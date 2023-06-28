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
    // console.log(fname, lname);
    window.localStorage.setItem('first_name', fname)
    window.localStorage.setItem('last_name', lname)
}
let playSound = () => {
    // console.log('Hello Meenakshi')
    let at = document.querySelector('.d_audio');
    at.play();
}

// IIFE stands for Immediately Invoked Function Expression. It is a JavaScript design pattern that allows you to create a function and immediately execute it.
(()=>{

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
            // document.querySelector('.d_hand_dot').style.display = "none";
        })
        // document = whole website
        

    })();

