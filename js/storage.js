let user = JSON.parse(localStorage.getItem('user')) ?? {};


if (document.querySelector('.home button.auth')) {
    if (Object.keys(user).length > 0) {
        document.querySelectorAll('.home .social-btns, .home .btns').forEach(el => el.remove());
        document.querySelector('.home button.auth').style.display = 'block';
    }
}

// Validate required fields in current form
function validateRequiredFields(popupNumber) {
    const signup = document.querySelector(`.signup[data-index="${popupNumber}"]`);
    if(!signup) return false;
    
    const form = signup.querySelector('form');
    if(!form) return true;
    
    const requiredInputs = form.querySelectorAll('input[required], select[required], textarea[required]');
    let isValid = true;
    
    requiredInputs.forEach(input => {
        if(!input.value || input.value.trim() === '') {
            input.style.borderColor = '#ff4444';
            isValid = false;
        } else {
            input.style.borderColor = '';
        }
    });
    
    return isValid;
}

function showsignupPopUp(number = 1) {

    if (number == 'login') {
        const loginForm  =document.querySelector('.login.pop-up');
        loginForm.classList.add('active');
        if (user.full_name) {
            loginForm.querySelector('input')[0].value = user.username;
            loginForm.querySelector('input')[1].value = user.password;
        }
        return;
    }


    // Validate current form before moving
    const preEl = document.querySelector('.pop-up.active');
    
    if (number == 0) {
        preEl.classList.remove('active');
        return;
    }

    if (preEl) {
        const currentIndex = preEl.getAttribute('data-index');
        if(!validateRequiredFields(currentIndex)) {
            alert('فيه بيانات لسة مكتبتهاش !')
            return;
        }
        preEl.classList.remove('active');
    }

    const signup = document.querySelector(`.signup[data-index="${number}"]`);
    if(signup) {
        signup.classList.add('active')
    }
}

function saveData(e) {
    const currForm = e.parentElement.parentElement;
    if (currForm.querySelector('input[name="password"]').value != currForm.querySelector('input[name="confirm_password"]').value )
    {
        currForm.querySelector('input[name="confirm_password"]').style.borderColor = 'red';
        alert(
            `لازم الكلمتين يكونوا شبه بعض`
        )
        return;
    }
    let data = collectFormData();
    
    localStorage.setItem('user' , JSON.stringify(data));

    user = data;
    

    showsignupPopUp(0);

    showMessage(
        `حسابك إتسجل تعرف تسجل بيه دلوقتي !`
    );

}

function showMessage(text, type = 'success') {
    const msgsContainer = document.querySelector('.msgs');
    if(!msgsContainer) return;
    
    const msgEl = document.createElement('div');
    msgEl.className = 'msg';
    msgEl.textContent = text;
    msgEl.style.opacity = '0';
    
    msgsContainer.appendChild(msgEl);
    
    // Trigger fade-in animation
    setTimeout(() => {
        msgEl.style.transition = 'opacity 0.5s ease-in';
        msgEl.style.opacity = '1';
    }, 10);
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        msgEl.style.transition = 'opacity 0.5s ease-out';
        msgEl.style.opacity = '0';
        
        // Remove element after fade-out
        setTimeout(() => {
            msgEl.remove();
        }, 500);
    }, 5000);
}


// Collect all form data into single object
function collectFormData() {
    const signups = document.querySelectorAll('.signup');
    const formData = {};
    
    signups.forEach(signup => {
        const form = signup.querySelector('form');
        if(form) {
            const inputs = form.querySelectorAll('input:not([name="confirm_password"]), select, textarea');
            inputs.forEach(input => {
                if(input.name) {
                    formData[input.name] = input.value;
                }
            });
        }
    });
    
    return formData;
}


// LOGIn LOGIC
function login(element) {
    const form = element.parentElement.parentElement;
    // Check

    if (Object.keys(user).length == 0) {
        showsignupPopUp(0);
        showMessage(
            `يرجي إنشاء حساب أولًا !`
        )
        return;
        
    }

    // navigate to game page
    location.href = './game.html';
}



// Enter The Data 
const gameloopy = document.querySelector('.game-loopy');
if (gameloopy) {
    gameloopy.querySelector('.player-name').textContent = user.full_name;
    gameloopy.querySelector('.progress.xp').dataset.text = `${150} XP`;
    gameloopy.querySelector('.level').textContent = 3;
    
    gameloopy.querySelector('.progress.coins').dataset.text = `${5000}`;


    
}