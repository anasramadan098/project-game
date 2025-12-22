const iframe = document.querySelector('iframe.course_view');
const video_view = document.querySelector('.video_view');

document.querySelector('.tasks').addEventListener('click' , (e) => {
    document.querySelector('.tasks-view').classList.toggle('active');
})

const levels = [
    {
        "name" : "STP",
        "level" : 1,
        "lessons" : [
            {
                "lesson_id" : 1 , 
                "lesson_name" : "🎯 STP: إزاي تختار شريحتك الصح وتكسب اللعبة؟",
                "lesson_desc" : "STP هو طريقة تفكير بتخليك متحاولش تبيع لكل السوق. الأول بتقسّم السوق لشرائح، بعد كده تختار الشريحة الأنسب ليك، وفي الآخر تحدد الصورة اللي عايزها تفضل في دماغها عن البراند. لما تمشي بالترتيب ده، قراراتك جوّه اللعبة بتبقى أذكى ونتايجها أحسن.",
                "lesson_video" : "https://www.youtube-nocookie.com/embed/0eRi026tSnw",
                "lesson_xp" : 30,
                "lesson_coins" : 0,
                "lesson_completed" : false,
                "lesson_unlocked" : true,
            },
            {
                "lesson_id" : 2 , 
                "lesson_name" : "🧩 Segmentation: إزاي تقسّم السوق وتشوف الصورة كاملة؟",
                "lesson_desc" : "التقسيم معناه إن السوق مش كله شبه بعضه. بنقسّمه حسب السن والدخل والمكان، وكمان حسب سلوك الشراء. كل نوع تقسيم بيكشف اختلافات مهمة بين الشرائح وبيساعدك تشوف السوق بوضوح قبل ما تختار شريحة واحدة تركز عليها.",
                "lesson_video" : "https://www.youtube-nocookie.com/embed/HmHTn3XHbss",
                "lesson_xp" : 30,
                "lesson_coins" : 0,
                "lesson_completed" : false,
                "lesson_unlocked" : true,
            },
            {
                "lesson_id" : 3 , 
                "lesson_name" : "🔍 Segmentation المتقدم: فهم أعمق للشرائح اللي بتكسب",
                "lesson_desc" : "في تقسيم أعمق بيركّز على طريقة التفكير، استخدام التكنولوجيا، الاحتياجات الحقيقية، والقيمة اللي الشريحة مستعدة تدفعها. الأنواع دي بتخلّيك تفهم الشرائح بشكل أعمق وتاخد قرارات أدق جوّه اللعبة.",
                "lesson_video" : "https://www.youtube-nocookie.com/embed/DKBjWxv-wy0",
                "lesson_xp" : 30,
                "lesson_coins" : 0,
                "lesson_completed" : false,
                "lesson_unlocked" : true,
            },
            {
                "lesson_id" : 4 , 
                "lesson_name" : "🎯 Targeting: تختار أنهي شريحة علشان تكسب أسرع؟",
                "lesson_desc" : "الاستهداف مش اختيار أكبر شريحة، لكنه اختيار أنسب شريحة. بنبص على قوة الاحتياج، سهولة الوصول، والقدرة على الشراء. لما تختار الشريحة الصح، فرص النجاح في اللعبة بتزيد.",
                "lesson_video" : "https://www.youtube-nocookie.com/embed/FZPCZYJc38c",
                "lesson_xp" : 30,
                "lesson_coins" : 0,
                "lesson_completed" : false,
                "lesson_unlocked" : true,
            },
            {
                "lesson_id" : 5 , 
                "lesson_name" : "🧠 Positioning: إزاي تسيب بصمتك في دماغ شريحتك؟",
                "lesson_desc" : "التمركز هو الصورة اللي البراند بياخدها في دماغ الشريحة المستهدفة. لازم تختار تمركز واضح زي السرعة أو الجودة أو القيمة، وتبني كل قراراتك عليه علشان تفضّل مميز ومختلف جوّه اللعبة.",
                "lesson_video" : "https://www.youtube-nocookie.com/embed/4wDSh6xRW6Q",
                "lesson_xp" : 30,
                "lesson_coins" : 0,
                "lesson_completed" : false,
                "lesson_unlocked" : true,
            },
        ]
    }
]

const tasks = [
    {
        task_id : 1,
        title : 'اختار شريحتك صحه من خلال STP',
        desc : 'المهمة دي هتدخّلك عالم STP خطوة خطوة، وتعلّمك إزاي تختار شريحة مناسبة وتبني تمركز يخليك تكسب الجولة الجاية بثقة.',
        completed_per : 0,
        lessons : [
            {
                "lesson_id" : 1 , 
                "lesson_name" : "🎯 STP: إزاي تختار شريحتك الصح وتكسب اللعبة؟",
                "lesson_desc" : "STP هو طريقة تفكير بتخليك متحاولش تبيع لكل السوق. الأول بتقسّم السوق لشرائح، بعد كده تختار الشريحة الأنسب ليك، وفي الآخر تحدد الصورة اللي عايزها تفضل في دماغها عن البراند. لما تمشي بالترتيب ده، قراراتك جوّه اللعبة بتبقى أذكى ونتايجها أحسن.",
                "lesson_video" : "https://www.youtube-nocookie.com/embed/0eRi026tSnw",
                "lesson_xp" : 30,
                "lesson_coins" : 0,
                "lesson_completed" : false,
                "lesson_unlocked" : true,
            },
            {
                "lesson_id" : 2 , 
                "lesson_name" : "🧩 Segmentation: إزاي تقسّم السوق وتشوف الصورة كاملة؟",
                "lesson_desc" : "التقسيم معناه إن السوق مش كله شبه بعضه. بنقسّمه حسب السن والدخل والمكان، وكمان حسب سلوك الشراء. كل نوع تقسيم بيكشف اختلافات مهمة بين الشرائح وبيساعدك تشوف السوق بوضوح قبل ما تختار شريحة واحدة تركز عليها.",
                "lesson_video" : "https://www.youtube-nocookie.com/embed/HmHTn3XHbss",
                "lesson_xp" : 30,
                "lesson_coins" : 0,
                "lesson_completed" : false,
                "lesson_unlocked" : true,
            },
            {
                "lesson_id" : 3 , 
                "lesson_name" : "🔍 Segmentation المتقدم: فهم أعمق للشرائح اللي بتكسب",
                "lesson_desc" : "في تقسيم أعمق بيركّز على طريقة التفكير، استخدام التكنولوجيا، الاحتياجات الحقيقية، والقيمة اللي الشريحة مستعدة تدفعها. الأنواع دي بتخلّيك تفهم الشرائح بشكل أعمق وتاخد قرارات أدق جوّه اللعبة.",
                "lesson_video" : "https://www.youtube-nocookie.com/embed/DKBjWxv-wy0",
                "lesson_xp" : 0,
                "lesson_coins" : 100,
                "lesson_completed" : false,
                "lesson_unlocked" : true,
            },
            {
                "lesson_id" : 4 , 
                "lesson_name" : "🎯 Targeting: تختار أنهي شريحة علشان تكسب أسرع؟",
                "lesson_desc" : "الاستهداف مش اختيار أكبر شريحة، لكنه اختيار أنسب شريحة. بنبص على قوة الاحتياج، سهولة الوصول، والقدرة على الشراء. لما تختار الشريحة الصح، فرص النجاح في اللعبة بتزيد.",
                "lesson_video" : "https://www.youtube-nocookie.com/embed/FZPCZYJc38c",
                "lesson_xp" : 0,
                "lesson_coins" : 150,
                "lesson_completed" : false,
                "lesson_unlocked" : true,
            },
            {
                "lesson_id" : 5 , 
                "lesson_name" : "🧠 Positioning: إزاي تسيب بصمتك في دماغ شريحتك؟",
                "lesson_desc" : "التمركز هو الصورة اللي البراند بياخدها في دماغ الشريحة المستهدفة. لازم تختار تمركز واضح زي السرعة أو الجودة أو القيمة، وتبني كل قراراتك عليه علشان تفضّل مميز ومختلف جوّه اللعبة.",
                "lesson_video" : "https://www.youtube-nocookie.com/embed/4wDSh6xRW6Q",
                "lesson_xp" : 30,
                "lesson_coins" : 0,
                "lesson_completed" : false,
                "lesson_unlocked" : true,
            },
        ]
    }
]

if ( !user.tasks ){
    resetTasks();
}


function completeTaskProgressFrom(taskId , per) {
    document.querySelector('#task-' + taskId).querySelector('.progress-container').style.setProperty('--progress-width', per + '%');

    document.querySelector('#task-' + taskId).querySelector('.progress-text').textContent = per + '%';


}

// Generate Automatic Tasks Elements
user.tasks.map(task => {
    const html =
     `<div class="task" id="task-${task.task_id}">
            <div class="title">
                <h4>
                    ${task.title}
                </h4>
                <button class="btn" ${task.completed_per == 100 ? 'disabled' : ''} onclick="nextLesson(${task.task_id})">
                   ${task.completed_per == 100 ?  "مكتملة" : "أكمل المهمة"}
                </button>
            </div>
            <p>
               ${task.desc}
            </p>
            <div class="progress-container" style="--progress-width: ${task.completed_per}%">
                <div class="progress-bar"></div>
                <div class="progress-text">${task.completed_per}%</div>
                <div class="particles">
                    <div class="particle"></div>
                    <div class="particle"></div>
                    <div class="particle"></div>
                    <div class="particle"></div>
                    <div class="particle"></div>
                </div>
            </div>
            
        </div>
    `
    document.querySelector('.tasks-container').innerHTML += html;
});

function earnPoints(pointType , points) {

    const popUpsActive = document.querySelectorAll('.pop-up.active');
    popUpsActive.forEach(p => p.classList.remove('active'));


    const coinsNumberEle = document.querySelector('.coins.progress').dataset;
    const xpNumberEle = document.querySelector('.xp.progress').dataset;

    const earningShow = document.querySelector('.earning-show');
    earningShow.classList.add('active');
    earningShow.querySelectorAll('div').forEach(div =>  {
        div.classList.remove('active');
        if (div.classList.contains(pointType)) {
            div.classList.add('active');
            div.querySelector('span').textContent = points;
        }
    })



    setTimeout(() => {
        earningShow.classList.remove('active');

        let index = 0;
        const counter = setInterval(() => {
            if (pointType == 'xp') {
                const currentXP = Number(xpNumberEle.text.split(' ')[0]) + 1;
                const maxXP = 500;
                const percentage = (currentXP / maxXP) * 100;
                
                xpNumberEle.text = `${currentXP} XP`;
                document.querySelector('.xp.progress').style.setProperty('--width', percentage + '%');
            } else if (pointType == 'coins') {
                coinsNumberEle.text++;
            }
            index++;
            if (index == points) {
                clearInterval(counter);
                setTimeout(() => {
                    popUpsActive.forEach(p => p.classList.add('active'));
                }, 1000);
                return;
            }
        }, 10);

    }, 2000);


    user.xp = Number(user.xp) + Number(points);
    user.coins = Number(user.coins) + Number(points);

    localStorage.setItem('user' , JSON.stringify(user));




}


function resetTasks() {
    user.tasks = tasks;
    user.coins = 5000;
    user.xp = 150;
    localStorage.setItem( 'user' , JSON.stringify(user));
}

function nextLesson(taskId = 1) {

    video_view.classList.contains('active') ? true : video_view.classList.add('active');

    // First Lesson
    const prevLesson = iframe.dataset.current_video;
    if (prevLesson == 0) {
        

        // Start First Lesson
        const lesson = user.tasks[taskId - 1].lessons[0];

        completeVideoView(lesson);

        return;
    }


    // If It's The Last Video
    if (prevLesson == user.tasks[taskId - 1].lessons.length) {
        video_view.classList.remove('active');
    }
    
    // Get Lesson Info
    const lesson = user.tasks[taskId - 1].lessons.find(lesson => lesson.lesson_id == Number(prevLesson) + 1 );
    if (!lesson) return;

    // Add Per
    const task = user.tasks.find(task => task.task_id == taskId);
    if (!task) return;

    if (!lesson.lesson_completed) {
        task.completed_per += 100 / task.lessons.length;
        lesson.lesson_completed  = true;
        completeTaskProgressFrom(taskId , task.completed_per);

        localStorage.setItem('user' , JSON.stringify(user));
        
        if (lesson.lesson_xp > 0) {
            earnPoints('xp' , lesson.lesson_xp)
        }
        if (lesson.lesson_coins > 0) {
            earnPoints('coins' , lesson.lesson_coins);
        }
    }






    completeVideoView(lesson);

    

}

function completeVideoView(lesson) {
    // Start First Lesson
    iframe.src = lesson.lesson_video;
    iframe.dataset.current_video = lesson.lesson_id;

    video_view.querySelector('p').textContent = lesson.lesson_desc;
    video_view.querySelector('h3').textContent = lesson.lesson_name;

}
