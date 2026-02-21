
const iframe = document.querySelector('iframe.course_view');
const video_view = document.querySelector('.video_view');






function tooglePops( eventEle , contEle ) {
    document.querySelector(eventEle).addEventListener('click' , (e) => {
        document.querySelector(contEle).classList.toggle('active');
    })
}


tooglePops('.tasks' , '.tasks-view');



const levels = [
    {
        required_xp : 200
    },
    {
        required_xp : 400
    },
    {
        required_xp : 600,
    },
    {
        required_xp : 1500,
    }
]
fiilXp();


const tasks = [
    {
        task_id : 1,
        title : 'اختار شريحتك صحه من خلال STP',
        desc : 'المهمة دي هتدخّلك عالم STP خطوة خطوة، وتعلّمك إزاي تختار شريحة مناسبة وتبني تمركز يخليك تكسب الجولة الجاية بثقة.',
        completed_per : 0,
        task_completed : false,
        lessons : [
            {
                "lesson_id" : 1 , 
                "lesson_name" : "🎯 STP: إزاي تختار شريحتك الصح وتكسب اللعبة؟",
                "lesson_desc" : "STP هو طريقة تفكير بتخليك متحاولش تبيع لكل السوق. الأول بتقسّم السوق لشرائح، بعد كده تختار الشريحة الأنسب ليك، وفي الآخر تحدد الصورة اللي عايزها تفضل في دماغها عن البراند. لما تمشي بالترتيب ده، قراراتك جوّه اللعبة بتبقى أذكى ونتايجها أحسن.",
                "lesson_video" : "https://www.youtube-nocookie.com/embed/0eRi026tSnw",
                "lesson_xp" : 50,
                "lesson_coins" : 0,
                "lesson_completed" : false,
                "lesson_unlocked" : true,
            },
            {
                "lesson_id" : 2 , 
                "lesson_name" : "🧩 Segmentation: إزاي تقسّم السوق وتشوف الصورة كاملة؟",
                "lesson_desc" : "التقسيم معناه إن السوق مش كله شبه بعضه. بنقسّمه حسب السن والدخل والمكان، وكمان حسب سلوك الشراء. كل نوع تقسيم بيكشف اختلافات مهمة بين الشرائح وبيساعدك تشوف السوق بوضوح قبل ما تختار شريحة واحدة تركز عليها.",
                "lesson_video" : "https://www.youtube-nocookie.com/embed/HmHTn3XHbss",
                "lesson_xp" : 100,
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
                "lesson_xp" : 70,
                "lesson_coins" : 0,
                "lesson_completed" : false,
                "lesson_unlocked" : true,
            },
        ]
    },
    {
        task_id : 2,
        title : 'دراسة حالات لأفضل العلامات التجارية',
        desc : 'أربع دراسات حالة مفصّلة عن Apple, Microsoft, Amazon, Pepsi، كل واحدة بتشرح تقسيم السوق، الاستهداف، والتمركز بالتفصيل.',
        completed_per : 0,
        task_completed : false,
        lessons : [
                {
                        "lesson_id" : 1,
                        "lesson_name" : "🍎 Apple: دراسة حالة مفصلة - ازاي استخدموا STP؟",
                        "lesson_desc" : `تفصيل STP اللي خلّى Apple تبقى مختلفة تماماً:

    - التقسيم (Segmentation):
    • السلوكي: heavy users وprofessionals اللي بيستخدموا الأجهزة يومياً للعمل والإنتاج (مثلاً: مصممين، مطوري برامج، منتجي محتوى).
    • النفسي: innovators وstatus-seekers؛ ناس بتحب تبان مختلفة وتقدّر التصميم والبساطة.
    • الديموغرافي: عادةً فئات دخل عالية، عمر 25-45، تعليم متوسط لعالي.
    • الجغرافي: مدن كبرى وأسواق متطورة، ومع الوقت المدن الكبيرة في البلدان الناشئة.
    • الاحتياج: أداء قوي، تكامل بين الأجهزة، خصوصية، وتجربة مستخدم سلسة.
    • التكنولوجي: early adopters ومحبي ecosystem—ناس بتدور على تكامل hardware-software.

    - الاستهداف (Targeting):
    Apple استهدفت الpremium segment بذكاء: مش مجرد إعلانات، لكن منتج وتجربة بيع وخدمات بتجذب الشريحة دي: تسعير أعلى، Apple Stores، AppleCare وecosystem متكامل.

    - التمركز (Positioning):
    Positioning واضح: "Premium + Simplicity + Innovation"، وده اتطبق في التصميم، اللغة البصرية، وطريقة العرض. النتيجة: ولاء عالي، قدرة على رفع السعر، وتأثير image قوي جداً.

    أمثلة: iPhone الأول مكانش عشان السعر، كان عشان التجربة؛ وApple Store عملت تجربة بيع ماحدش زيه.`,
                        "lesson_xp" : 40,
                        "lesson_coins" : 0,
                        "lesson_completed" : false,
                        "lesson_unlocked" : true
                },
                {
                        "lesson_id" : 2,
                        "lesson_name" : "🔷 Microsoft: دراسة حالة مفصلة - STP للمؤسسات",
                        "lesson_desc" : `تفصيل STP اللي خلّى Microsoft تكون اختيار المؤسسات:

    - التقسيم (Segmentation):
    • السلوكي: مستخدمين مؤسسيين (IT admins, sysadmins)، فرق محتاجة collaboration، ومطوّرين.
    • النفسي: الناس اللي بتدور على الاعتمادية والاستقرار والأمان.
    • الديموغرافي: مؤسسات، هيئات حكومية، تعليم عالي، وشركات متوسطة وكبيرة.
    • الجغرافي: انتشار عالمي مع دعم محلي للأسواق المختلفة.
    • الاحتياج: حلول قابلة للتكامل، دعم فني، أمان وامتثال قانوني.
    • التكنولوجي: بنية تحتية hybrid، توافق مع legacy systems.

    - الاستهداف (Targeting):
    Microsoft اعتمدت B2B targeting: فرق مبيعات، شراكات، وحلول مخصصة (Azure, Microsoft 365). الهدف مش المستخدم النهائي لكن صانعي القرار (CIOs, IT managers) بعروض بتثبت القيمة (SLA، دعم، تكامل).

    - التمركز (Positioning):
    Positioning: "Trusted, Secure, Professional"؛ ال messaging بيركز على الإنتاجية والأمان، وده خلى المؤسسات تعتمد عليهم وتدفع اشتراكات طويلة الأمد.

    النتيجة: عقود مستمرة، إيراد متكرر، واعتماد واسع في البنية التحتية للشركات.`,
                        "lesson_xp" : 60,
                        "lesson_coins" : 0,
                        "lesson_completed" : false,
                        "lesson_unlocked" : true
                },
                {
                        "lesson_id" : 3,
                        "lesson_name" : "📦 Amazon: دراسة حالة مفصلة - ازاي غطّوا السوق كله؟",
                        "lesson_desc" : `تفصيل STP اللي خلا Amazon تغطي السوق كله:

    - التقسيم (Segmentation):
    • السلوكي: convenience seekers، bargain hunters، وbusiness buyers.
    • النفسي: ناس بتقدّر الراحة والسرعة وتقليل friction في الشراء.
    • الديموغرافي: شامل جداً - أفراد، عائلات، وشركات.
    • الجغرافي: شبكة لوجستية بتخدم مناطق حضرية ووصول دولي.
    • الاحتياج: تنوع منتجات، سرعة توصيل، أسعار منافسة، وثقة بالمشتريات.
    • التكنولوجي: مستخدمين متصلين، متأثرين بالتوصيات والpersonalization.

    - الاستهداف (Targeting):
    Amazon بتستخدم multi-segment targeting: Prime للـfrequent buyers، Amazon Basics للbargain shoppers، وAWS للشركات. كل شريحة ليها عروض وقنوات مختلفة، مبنية على بيانات وسلوك المستخدم.

    - التمركز (Positioning):
    Positioning واضح: "Everything, Fast, Reliable"؛ وتسلسل التكتيكات من التوصيل السريع للـone-click والـreviews كلها بتدعم الرسالة.

    النتيجة: رفع CLV بفضل Prime، وmoat لوجستي وتقني صعب يتقلب بسهولة، وسيطرة على التجارة الإلكترونية.`,
                        "lesson_xp" : 0,
                        "lesson_coins" : 100,
                        "lesson_completed" : false,
                        "lesson_unlocked" : true
                },
                {
                        "lesson_id" : 4,
                        "lesson_name" : "🥤 Pepsi: دراسة حالة مفصلة - STP واستهداف الشباب",
                        "lesson_desc" : `تفصيل STP اللي خلا Pepsi تبقى صوت الشباب والاختيار المتمرد:

    - التقسيم (Segmentation):
    • السلوكي: occasional drinkers وparty-goers، وheavy consumers في المناطق الحارة.
    • النفسي: شباب trend-seeking، مهتمين بالموسيقى والستايل والابتكار.
    • الديموغرافي: تركيز على عمر 15-35، طلاب وشباب عامل.
    • الجغرافي: مدن حضرية ومناطق شبابية نشيطة.
    • الاحتياج: طعم قوي، إحساس بالانتعاش، وصورة براند شبابية.
    • التكنولوجي: جمهور متصل بالسوشيال ميديا ويتفاعل مع الترندات.

    - الاستهداف (Targeting):
    Pepsi استهدفت الشباب بقوة عن طريق شراكات مع نجوم الموسيقى، حملات رقمية، وإصدارات محدودة بتشد الانتباه. القنوات كانت TV, YouTube, Instagram, TikTok، ومعاها رعايات حفلات ومهرجانات.

    - التمركز (Positioning):
    Positioning: "Choice of a New Generation"—تمرد وحداثة. الexecs التسويقية دايماً بتركز على الثقافة الشبابية وابتكار النكهات.

    النتيجة: ربط البراند بثقافة الشباب، زيادة الحصة في المناسبات، وصورة مميزة قدام المنافس التقليدي.`,
                        "lesson_xp" : 100,
                        "lesson_coins" : 0,
                        "lesson_completed" : false,
                        "lesson_unlocked" : true
                }
        ]
    },
    {
        task_id : 3,
        title : "التطبيق العملي على مفاهيم STP - أطلق منتجك بنجاح!",
        desc : 'الحين جاهزة للعبة الحقيقية؟ 🎮 هتطبق كل اللي اتعلمته عن STP على منتجك الخاص. هتقسّم السوق، تختار الشريحة اللي تناسب منتجك، وتبني تمركز فريد. لو عملت ده صح، سيعك النجاح مضمون!',
        completed_per : 0,
        task_completed : false,
        task_type : "stp",
        missions : [
            {
                "mission_id" : 1 , 
                "mission_xp" : 100,
                "mission_coins" : 0,
                "mission_completed" : false,
                "mission_unlocked" : true,
            },
            {
                "mission_id" : 2 , 
                "mission_xp" : 0,
                "mission_coins" : 800,
                "mission_completed" : false,
                "mission_unlocked" : true,
            },
            {
                "mission_id" : 3 , 
                "mission_xp" : 0,
                "mission_coins" : 200,
                "mission_completed" : false,
                "mission_unlocked" : true,
            },
            {
                "mission_id" : 4 , 
                "mission_xp" : 200,
                "mission_coins" : 0,
                "mission_completed" : false,
                "mission_unlocked" : true,
            },
        ]
    }
]




if ( !user.tasks ){
    resetTasks();
}


function completeTaskProgressFrom(taskId , per) {
    const taskEle = document.querySelector('#task-' + taskId);
    const currTask = user.tasks[taskId - 1];
    taskEle.querySelector('.progress-container').style.setProperty('--progress-width', per + '%');
    taskEle.querySelector('.progress-text').textContent = per + '%';

    if (currTask.completed_per == 100 && currTask.task_completed) {
        const btn = taskEle.querySelector('button');
        btn.disabled = true;
        btn.textContent == 'مكتملة';

        const nextTaskEle = document.querySelector('#task-' + (taskId + 1));
        if (nextTaskEle) {
            const nextBtn = nextTaskEle.querySelector('button');
            nextBtn.removeAttribute('disabled');
        }


    }


}

// Generate Automatic Tasks Elements
user.tasks.map(task => {
    const html =
     `<div class="task" id="task-${task.task_id}">
            <div class="title">
                <h4>
                    ${task.title}
                </h4>
                <button class="btn" ${task.task_completed ? 'disabled' : ''}  ${task.task_id === 1 || user.tasks[task.task_id - 2].task_completed ? '' : 'disabled'}  onclick="nextLesson(${task.task_id})">
                   ${task.completed_per >= 100 ?  "مكتملة" : "أكمل المهمة"}
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


function fiilXp() {
    const currentXP = user.xp;
    const maxXP = levels[user.level - 1].required_xp;
    const percentage = (currentXP / maxXP) * 100;


    if (percentage >= 100) {
        user.level = user.level + 1;
        gameloopy.querySelector('.level').textContent = user.level;
        saveUser();
    }

    document.querySelector('.xp.progress').style.setProperty('--width', percentage + '%');

}

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
        const xpeffect = new Audio('./music/xp.mp3')
        const coinseffect = new Audio('./music/coin.mp3')

        const counter = setInterval(() => {
            if (pointType == 'xp') {
                
                fiilXp();
                xpNumberEle.text = `${user.xp} XP`;
                xpeffect.play();
           
            } else if (pointType == 'coins') {
                coinsNumberEle.text++;
                coinseffect.play();
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


    if (pointType == 'xp') {
        user.xp = Number(user.xp) + Number(points);
    } else if (pointType == 'coins') {
        user.coins = Number(user.coins) + Number(points);
    }


    saveUser();




}


function resetTasks() {
    user.tasks = tasks;
    user.coins = 100;
    user.xp = 0;
    user.level = 1;
    localStorage.setItem( 'user' , JSON.stringify(user));
    localStorage.removeItem('conv');
    localStorage.removeItem('chat_history_api');
}



// Lesson Case
function nextLesson(taskId = 1) {

    if (user.tasks[taskId - 1].task_type == 'stp') {
        nextSTPLevel();
        return;
    }


    video_view.classList.contains('active') ? true : video_view.classList.add('active');

    bgmusic.pause();
    // First Lesson
    const prevLesson = video_view.dataset.current_video;
    const lessons = user.tasks[taskId - 1].lessons;


    if (prevLesson == 0) {

        // Start First Lesson
        const lesson = lessons[prevLesson];

        completeVideoView(taskId , lesson);

        return;
    }


    // If It's The Last Video
    if (prevLesson == lessons.length) {
        video_view.classList.remove('active');
        bgmusic.play();

        video_view.dataset.current_video = 0;


        user.tasks[taskId - 1].completed_per = 100;
        user.tasks[taskId - 1].task_completed = true;
        const lesson = lessons[lessons.length - 1];


        if (!lesson.lesson_completed) {
            if (lesson.lesson_xp > 0) {
                earnPoints('xp' , lesson.lesson_xp)
            }
            if (lesson.lesson_coins > 0) {
                earnPoints('coins' , lesson.lesson_coins);
            }
        }


        user.tasks[taskId - 1].lessons[lessons.length - 1].lesson_completed = true;

        saveUser()
        completeTaskProgressFrom(taskId , 100);

        return;
    }
    
    // Get Lesson Info
    const lesson = lessons.find(lesson => lesson.lesson_id == Number(prevLesson) + 1 );
    if (!lesson) return;

    // Add Per
    const task = user.tasks.find(task => task.task_id == taskId);
    if (!task) return;

    if (!lessons[prevLesson].lesson_completed) {
        const lesson = lessons[prevLesson - 1];
        task.completed_per += 100 / task.lessons.length;
        lesson.lesson_completed  = true;
        completeTaskProgressFrom(taskId , task.completed_per);

        saveUser()
        
        if (lesson.lesson_xp > 0) {
            console.log(lesson);
            earnPoints('xp' , lesson.lesson_xp)
        }
        if (lesson.lesson_coins > 0) {
            earnPoints('coins' , lesson.lesson_coins);
        }
    }






    completeVideoView(taskId , lesson);

    

}

function completeVideoView(taskId , lesson) {
    video_view.dataset.current_video = lesson.lesson_id;


    if (lesson.lesson_video) {
        // Start First Lesson
        document.querySelector('.video-container').classList.add('active');
        iframe.src = lesson.lesson_video;
        iframe.parentElement.classList.add('active');
        video_view.querySelector('p').classList.remove('big');
    } else {
        document.querySelector('.video-container').classList.remove('active');
    }

    video_view.querySelector('p').innerHTML = lesson.lesson_desc;
    video_view.querySelector('h3').innerHTML = lesson.lesson_name;
    video_view.querySelector('button').onclick = function () {
        nextLesson(taskId);
    }

}



function saveUser() {
    localStorage.setItem('user' , JSON.stringify(user));
}