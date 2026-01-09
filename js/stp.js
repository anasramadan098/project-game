const countries = [
     { 
        name: "مصر",
        governorates: [
            {
                name: "القاهرة",
                population: 10200000,
                risk: 35,
                marketClass: "A",
                areas: [
                    { name: "مدينة نصر", id : 1, population: 3000000, risk: 30, marketClass: "A" },
                    { name: "المعادى", id : 2, population: 600000, risk: 20, marketClass: "A" },
                    { name: "شبرا", id : 3, population: 1200000, risk: 45, marketClass: "B" },
                    { name: "حلوان", id : 4, population: 900000, risk: 55, marketClass: "B" },
                    { name: "وسط البلد", id : 5, population: 500000, risk: 40, marketClass: "A" },
                    { name: "المقطم", id : 6, population: 250000, risk: 35, marketClass: "B" },
                    { name: "عين شمس", id : 7, population: 400000, risk: 50, marketClass: "B" },
                    { name: "الوايلى", id : 8, population: 350000, risk: 45, marketClass: "B" },
                    { name: "المرج", id : 9, population: 300000, risk: 60, marketClass: "C" },
                    { name: "الزمالك", id : 10, population: 150000, risk: 20, marketClass: "A" },
                    { name: "المهندسين", id : 11, population: 180000, risk: 25, marketClass: "A" },
                    { name: "النزهة", id : 12, population: 200000, risk: 30, marketClass: "A" },
                    { name: "القاهرة الجديدة", id : 13, population: 450000, risk: 25, marketClass: "A" },
                    { name: "السلام", id : 14, population: 600000, risk: 50, marketClass: "B" },
                    { name: "العباسية", id : 15, population: 300000, risk: 40, marketClass: "B" },
                    { name: "روض الفرج", id : 16, population: 350000, risk: 55, marketClass: "C" },
                    { name: "مصر الجديدة", id : 17, population: 250000, risk: 35, marketClass: "A" },
                    { name: "الزيتون", id : 18, population: 400000, risk: 50, marketClass: "B" },
                    { name: "مدينة القائد إبراهيم", id : 19, population: 150000, risk: 45, marketClass: "B" },
                    { name: "شيراتون", id : 20, population: 100000, risk: 25, marketClass: "A" }
                ]
            },
            {
                name: "الجيزة",
                population: 8700000,
                risk: 45,
                marketClass: "B",
                areas: [
                    { name: "الدقى", id : 21, population: 700000, risk: 35, marketClass: "A" },
                    { name: "المهندسين", id : 22, population: 800000, risk: 30, marketClass: "A" },
                    { name: "الهرم", id : 23, population: 2500000, risk: 55, marketClass: "B" },
                    { name: "الفيصل", id : 24, population: 2000000, risk: 60, marketClass: "B" },
                    { name: "الشيخ زايد", id : 25, population: 400000, risk: 20, marketClass: "A" },
                    { name: "الدراسة", id : 26, population: 150000, risk: 25, marketClass: "A" },
                    { name: "الوراق", id : 27, population: 100000, risk: 50, marketClass: "B" },
                    { name: "البراجيل", id : 28, population: 120000, risk: 55, marketClass: "C" },
                    { name: "العمرانية", id : 29, population: 500000, risk: 65, marketClass: "C" },
                    { name: "الطالبية", id : 30, population: 250000, risk: 45, marketClass: "B" },
                    { name: "الكيت كات", id : 31, population: 200000, risk: 50, marketClass: "B" },
                    { name: "أبو رواش", id : 32, population: 100000, risk: 60, marketClass: "C" },
                    { name: "الوراق الجديدة", id : 33, population: 150000, risk: 35, marketClass: "B" },
                    { name: "فيصل الجديدة", id : 34, population: 180000, risk: 40, marketClass: "B" },
                    { name: "حدائق الأهرام", id : 35, population: 300000, risk: 45, marketClass: "B" },
                    { name: "الواحات البحرية", id : 36, population: 100000, risk: 20, marketClass: "A" }
                ]
            },
            {
                name: "الإسكندرية",
                population: 5400000,
                risk: 40,
                marketClass: "A",
                areas: [
                    { name: "سموحة", id : 37, population: 400000, risk: 25, marketClass: "A" },
                    { name: "ستانلي", id : 38, population: 250000, risk: 30, marketClass: "A" },
                    { name: "المنتزه", id : 39, population: 900000, risk: 45, marketClass: "B" },
                    { name: "العجمي", id : 40, population: 1200000, risk: 55, marketClass: "B" },
                    { name: "بحري", id : 41, population: 700000, risk: 50, marketClass: "B" },
                    { name: "المكس", id : 42, population: 200000, risk: 35, marketClass: "B" },
                    { name: "سان ستيفانو", id : 43, population: 150000, risk: 25, marketClass: "A" },
                    { name: "فكتوريا", id : 44, population: 100000, risk: 20, marketClass: "A" },
                    { name: "رأس التين", id : 45, population: 250000, risk: 40, marketClass: "B" },
                    { name: "ميامي", id : 46, population: 300000, risk: 45, marketClass: "B" },
                    { name: "محرم بك", id : 47, population: 350000, risk: 35, marketClass: "B" },
                    { name: "سيدي جابر", id : 48, population: 400000, risk: 30, marketClass: "A" },
                    { name: "القلعة", id : 49, population: 150000, risk: 50, marketClass: "B" },
                    { name: "كامب شيزار", id : 50, population: 120000, risk: 25, marketClass: "A" },
                    { name: "أبو قير", id : 51, population: 200000, risk: 55, marketClass: "C" },
                    { name: "رشدي", id : 52, population: 180000, risk: 40, marketClass: "B" }
                ]
            },
            {
                name: "الدقهلية",
                population: 6800000,
                risk: 55,
                marketClass: "B",
                areas: [
                    { name: "المنصورة", id : 53, population: 600000, risk: 40, marketClass: "A" },
                    { name: "طلخا", id : 54, population: 350000, risk: 45, marketClass: "B" },
                    { name: "ميت غمر", id : 55, population: 500000, risk: 60, marketClass: "C" },
                    { name: "بلقاس", id : 56, population: 450000, risk: 65, marketClass: "C" },
                    { name: "دكرنس", id : 57, population: 300000, risk: 50, marketClass: "B" },
                    { name: "أجا", id : 58, population: 250000, risk: 55, marketClass: "C" }
                ]
            },
            {
                name: "الشرقية",
                population: 7500000,
                risk: 60,
                marketClass: "C",
                areas: [
                    { name: "الزقازيق", id : 59, population: 450000, risk: 50, marketClass: "B" },
                    { name: "بلبيس", id : 60, population: 400000, risk: 60, marketClass: "C" },
                    { name: "منيا القمح", id : 61, population: 350000, risk: 65, marketClass: "C" },
                    { name: "أبو حماد", id : 62, population: 300000, risk: 70, marketClass: "C" },
                    { name: "فاقوس", id : 63, population: 280000, risk: 55, marketClass: "B" },
                    { name: "إبشواى", id : 64, population: 150000, risk: 60, marketClass: "C" }
                ]
            },
            {
                name: "البحيرة",
                population: 6400000,
                risk: 65,
                marketClass: "C",
                areas: [
                    { name: "دمنهور", id : 65, population: 400000, risk: 55, marketClass: "B" },
                    { name: "كفر الدوار", id : 66, population: 500000, risk: 60, marketClass: "C" },
                    { name: "رشيد", id : 67, population: 200000, risk: 50, marketClass: "B" },
                    { name: "أبو حمص", id : 68, population: 250000, risk: 70, marketClass: "C" },
                    { name: "إيتاي البارود", id : 69, population: 150000, risk: 55, marketClass: "B" },
                    { name: "دلقان", id : 70, population: 100000, risk: 60, marketClass: "C" }
                ]
            },
            {
                name: "المنيا",
                population: 6200000,
                risk: 70,
                marketClass: "C",
                areas: [
                    { name: "المنيا", id : 71, population: 350000, risk: 60, marketClass: "B" },
                    { name: "ملوي", id : 72, population: 300000, risk: 70, marketClass: "C" },
                    { name: "سمالوط", id : 73, population: 250000, risk: 75, marketClass: "C" },
                    { name: "أبو قرقاص", id : 74, population: 200000, risk: 80, marketClass: "C" }
                ]
            },
            {
                name: "أسيوط",
                population: 5000000,
                risk: 75,
                marketClass: "C",
                areas: [
                    { name: "أسيوط", id : 75, population: 400000, risk: 65, marketClass: "B" },
                    { name: "ديروط", id : 76, population: 250000, risk: 75, marketClass: "C" },
                    { name: "منفلوط", id : 77, population: 200000, risk: 80, marketClass: "C" },
                    { name: "أبنوب", id : 78, population: 180000, risk: 85, marketClass: "C" }
                ]
            },
            {
                name: "السويس",
                population: 750000,
                risk: 30,
                marketClass: "A",
                areas: [
                    { name: "الأربعين", id : 79, population: 300000, risk: 35, marketClass: "B" },
                    { name: "الفيصل", id : 80, population: 200000, risk: 25, marketClass: "A" },
                    { name: "الجنائن", id : 81, population: 100000, risk: 30, marketClass: "B" }
                ]
            },
            {
                name: "بورسعيد",
                population: 800000,
                risk: 25,
                marketClass: "A",
                areas: [
                    { name: "العرب", id : 82, population: 300000, risk: 30, marketClass: "B" },
                    { name: "الزهور", id : 83, population: 250000, risk: 20, marketClass: "A" },
                    { name: "بورسعيد", id : 84, population: 150000, risk: 15, marketClass: "A" }
                ]
            }
        ]
    }   
];


if (!user.stp) {
    user.stp = {};
    saveUser();
}

const stpPopups = document.querySelectorAll('.pop-up[class*="stp-"]');
const stp1 = document.querySelector('.pop-up.stp-1');

stpPopups.forEach(stp => {

    stp.querySelector('.btn.submit').addEventListener('click', () => {
        nextSTPLevel();
    });

    if (stp.querySelector('.btn.prev')) {
        stp.querySelector('.btn.prev').addEventListener('click', () => {
            nextSTPLevel(false);
        });
    }


})

let targetCountries;



countries.map(country => {
    let countryHTML = `
        <div class="country-selection">
            <div class="checkbox-wrapper-12">
                <div class="cbx">
                    <input type="checkbox" class="country" id="cbx-12">
                    <span for="cbx-12"> </span>

                    <svg fill="none" viewBox="0 0 15 14" height="14" width="15">
                        <path d="M2 8.36364L6.23077 12L13 2"></path>
                    </svg>
                    <label for="cbx-12"> ${country.name} </label>
                </div>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <filter id="goo-12">
                            <feGaussianBlur result="blur" stdDeviation="4" in="SourceGraphic"></feGaussianBlur>
                            <feColorMatrix result="goo-12" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" mode="matrix" in="blur"></feColorMatrix>
                            <feBlend in2="goo-12" in="SourceGraphic"></feBlend>
                        </filter>
                    </defs>
                </svg>
                <div class="governorate-choices" style="margin-right: 20px;">
                    ${country.governorates.map((governorate, govId) => `
                        <div class="checkbox-wrapper-12">
                            <div class="cbx">
                                <input type="checkbox" class="governorate" id="cbx-governorate-${govId}">
                                <span for="cbx-governorate-${govId}"></span>
                                <svg fill="none" viewBox="0 0 15 14" height="14" width="15">
                                    <path d="M2 8.36364L6.23077 12L13 2"></path>
                                </svg>
                                <label for="cbx-governorate-${govId}"> ${governorate.name} </label>
                                <div>
                                    <b  style="color:green;"> عدد السكان <b> ${governorate.population} </b> </b>
                                    <b  style="color:yellow;"> نوع السوق <b> ${governorate.marketClass} </b> </b>
                                    <b  style="color:red;"> نسبة المخاطرة <b> ${governorate.risk}% </b> </b>
                                </div>
                            </div>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <filter id="goo-12">
                                        <feGaussianBlur result="blur" stdDeviation="4" in="SourceGraphic"></feGaussianBlur>
                                        <feColorMatrix result="goo-12" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" mode="matrix" in="blur"></feColorMatrix>
                                        <feBlend in2="goo-12" in="SourceGraphic"></feBlend>
                                    </filter>
                                </defs>
                            </svg>
                            <div class="area-choices" style="margin-right: 20px;">
                                ${governorate.areas.map((area, areaId) => { return `
                                    <div class="checkbox-wrapper-12">
                                        <div class="cbx">
                                            <input type="checkbox" data-area="${area.id}" class="area" id="cbx-area-${govId}-${areaId}">
                                            <span for="cbx-area-${govId}-${areaId}"></span>
                                            <svg fill="none" viewBox="0 0 15 14" height="14" width="15">
                                                <path d="M2 8.36364L6.23077 12L13 2"></path>
                                            </svg>
                                            <label for="cbx-area-${govId}-${areaId}"> ${area.name} </label>
                                            <div>
                                                <b  style="color:green;"> عدد السكان <b> ${area.population} </b> </b>
                                                <b  style="color:yellow;"> نوع السوق <b> ${area.marketClass} </b> </b>
                                                <b  style="color:red;"> نسبة المخاطرة <b> ${area.risk}% </b> </b>
                                            </div>
                                            </div>
                                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                                            <defs>
                                                <filter id="goo-12">
                                                    <feGaussianBlur result="blur" stdDeviation="4" in="SourceGraphic"></feGaussianBlur>
                                                    <feColorMatrix result="goo-12" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" mode="matrix" in="blur"></feColorMatrix>
                                                    <feBlend in2="goo-12" in="SourceGraphic"></feBlend>
                                                </filter>
                                            </defs>
                                        </svg>
                                    </div>
                                `;}).join('')}
                            </div> 
                        </div> 
                    `).join('')}
                </div>
            </div>
        </div>
    `;


    if (stp1) {
        stp1.querySelector('.choices').innerHTML += countryHTML;
    }
});




// Logic For Nested Checkboxes
document.querySelectorAll('.stp-1 input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function () {

        if (checkbox.parentElement.parentElement.querySelectorAll('input')) {
            checkbox.parentElement.parentElement.querySelectorAll('input').forEach(input => {
                input.checked = checkbox.checked;
            })
        }

        let result = document.querySelectorAll('input[type="checkbox"].area:checked');
        const selectedAreaIds = Array.from(result).map(checkbox => parseInt(checkbox.dataset.area));

        targetCountries = countries.flatMap(country =>
            country.governorates.flatMap(governorate =>
                governorate.areas.filter(area => selectedAreaIds.includes(area.id))
            )
        );

        user.stp.geo_segmantation = targetCountries;
        saveUser();

    });
});





function nextSTPLevel(next = true) {




    let currentStpIndex = -1;
    let hasError = false;

    stpPopups.forEach((popup, index) => {
        if (popup.classList.contains('active')) {
            currentStpIndex = index;
        }
    });


    if (currentStpIndex === -1) {
        stpPopups[0].classList.add('active');
        return;
    }

    // STP TASK
    const taskIndex = user.tasks.findIndex(task => task.task_type == 'stp');
    const missions = user.tasks[taskIndex].missions;
    const currentMision = missions[currentStpIndex];
    
    
    if (next) {

        // Store Responses
        const allResponses = stpPopups[currentStpIndex].querySelectorAll('input , textarea , select');

        allResponses.forEach(input => {
            if (input.name !== 'target_segment') {
                // Radio handling
                if (input.type === 'radio') {
                    const checkedRadio = stpPopups[currentStpIndex]
                        .querySelector(`input[type="radio"][name="${input.name}"]:checked`);

                    if (!checkedRadio) {
                        hasError = true;
                    } else {
                        user.stp[input.name] = checkedRadio.value;
                    }

                } 
                // Normal inputs
                else {
                    if (input.value.trim() === '') {
                        hasError = true;
                        input.style.borderColor = 'red';
                    } else {
                        user.stp[input.name] = input.value;
                    }
                }
            }

        })

        if (hasError) {
            return;
        }
        
        saveUser();

        stpPopups[currentStpIndex].classList.remove('active');


        // LAST LEVEl
        if (currentStpIndex + 1 == stpPopups.length) {

            if (!currentMision.mission_completed) {
                currentMision.mission_xp > 0 ? earnPoints('xp' , currentMision.mission_xp) : false ;
                currentMision.mission_coins > 0 ? earnPoints('coins' , currentMision.mission_coins) : false;
            }
            completeMission(taskIndex , currentStpIndex);
            

            return;
        }
        stpPopups[currentStpIndex + 1].classList.add('active');

        if (!currentMision.mission_completed) {
            currentMision.mission_xp > 0 ? earnPoints('xp' , currentMision.mission_xp) : false ;
            currentMision.mission_coins > 0 ? earnPoints('coins' , currentMision.mission_coins) : false;
        }
        completeMission(taskIndex , currentStpIndex);



    } else {
        if (currentStpIndex === 0) {
            return;
        }
        stpPopups[currentStpIndex].classList.remove('active');
        stpPopups[currentStpIndex - 1].classList.add('active');
    }


}


function completeMission(taskIndex , currentStpIndex) {
    const misson = user.tasks[taskIndex].missions[currentStpIndex];
    if (!misson.mission_completed) {
        user.tasks[taskIndex].completed_per += 100 / user.tasks[taskIndex].missions.length;
        completeTaskProgressFrom(taskIndex + 1 , user.tasks[taskIndex].completed_per);
        user.tasks[taskIndex].missions[currentStpIndex].mission_completed = true;

        if (currentStpIndex + 1 == user.tasks[taskIndex].missions.length) {
            user.tasks[taskIndex].task_completed = true;
        }

        saveUser();
    }



}


document.querySelectorAll('input[name="target_segment"]').forEach(input => {
    input.addEventListener('change' , () => {
        user.stp.target_segment = input.value;
        saveUser();
    })
})