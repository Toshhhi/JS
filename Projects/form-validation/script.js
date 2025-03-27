var nameError = document.getElementById('name-error');
    var phoneError = document.getElementById('phone-error');
    var emailError = document.getElementById('email-error');
    var messageError = document.getElementById('message-error');
    var submitError = document.getElementById('submit-error');

    function validateName(){
        var name = document.getElementById('contact-name').value;
        
        if (name.length === 0) {
            nameError.innerHTML = 'Name is required!';
            return false;
        }
        
        if (!name.match(/^[A-Za-z]+(?:\s[A-Za-z]+)+$/)) {
            nameError.innerHTML = 'Enter your full name!';
            return false;
        }
    
        nameError.innerHTML = '<i class="ri-checkbox-line"></i>'; 
        return true;
    }

    function validatePhone(){
        var phone = document.getElementById('contact-phone').value;

        if(phone.length ===0){
            phoneError.innerHTML = 'Enter a phone number!';
            return false;
        }
        if(!phone.match(/^[0-9]{10}$/ || phone.length !== 10)){
            phoneError.innerHTML = 'not a valid phone number!';
            return false;
        }

        phoneError.innerHTML = '<i class="ri-checkbox-line"></i>';
        return true;
    }

    function validateEmail(){
        var email = document.getElementById('contact-email').value;

        if(!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)){
            emailError.innerHTML = 'enter a valid email!'
            return false;
        }
        if(email.length ===0){
            emailError.innerHTML ='Enter an email!';
            return false;
        }
        emailError.innerHTML = '<i class="ri-checkbox-line"></i>';
        return true;

    }

    function validateMessage(){
        var message = document.getElementById('contact-message').value;
        var required = 30; 
        var left = required - message.length;

        if(left>0){
            messageError.innerHTML = left + 'more characters required!';
            return false;
        }
        messageError.innerHTML = '<i class="ri-checkbox-line"></i>';
        return true;
    }

    function validateForm(){
        if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
            submitError.style.display = 'block';
            submitError.innerHTML = 'Please fix error to submit!';
            setTimeout(function(){
                submitError.style.display = 'none';
            },3000)
            return false;
        }
    }
    