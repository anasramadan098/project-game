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

function showPopUp(number = 1) {

    if (number == 'login') {
        const loginForm  = document.querySelector('.login.pop-up');
        loginForm.classList.add('active');
        if (user.full_name) {
            loginForm.querySelectorAll('input')[0].value = user.username;
            loginForm.querySelectorAll('input')[1].value = user.password;
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

    const signup = document.querySelector(`.pop-up[data-index="${number}"]`);
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
    data.xp = 0;
    data.level = 1;
    data.coins = 100;
    
    localStorage.setItem('user' , JSON.stringify(data));

    user = data;
    

    showPopUp(0);

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
        showPopUp(0);
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
const settingPop = document.querySelector('.pop-up.setting');

if (gameloopy) {
    fillLoppyData()
}

if (settingPop) {


    settingPop.querySelector('#update-btn').addEventListener('click' , () => {
        const form = settingPop.querySelector('form');
        const formData = new FormData(form);
        const updatedUser = {};
        for (let [key, value] of formData.entries()) {
            updatedUser[key] = value;
        }
        // Merge with existing user data, or replace entirely
        Object.assign(user, updatedUser);
        localStorage.setItem('user', JSON.stringify(user));
        showMessage('تم تحديث البيانات بنجاح!');
        fillLoppyData(settingPop , user);

        settingPop.classList.remove('active');
    })

}

function fillLoppyData() {

    gameloopy.querySelector('.player-name').textContent = user.full_name;
    gameloopy.querySelector('.progress.xp').dataset.text = `${user.xp} XP`;
    gameloopy.querySelector('.level').textContent = user.level;
    
    gameloopy.querySelector('.progress.coins').dataset.text = `${user.coins}`;  



    settingPop.querySelector('input[name="full_name"]').value = user.full_name;
    settingPop.querySelector('input[name="age"]').value = user.age;
    settingPop.querySelector('input[name="phone"]').value = user.phone;
    settingPop.querySelector('input[name="email"]').value = user.email;
}