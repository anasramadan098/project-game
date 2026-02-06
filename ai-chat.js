const formPrompt = document.querySelector('#msg-ai-prompt-form');
const msgsHolder = document.querySelector('.chat-msgs');
const chatHolder = document.querySelector('.chat');

if (localStorage.getItem('conv')) {
    msgsHolder.innerHTML = localStorage.getItem('conv');
}


// Load Chat History (JSON) for Context Awareness
let chatHistory = [];
try {
    chatHistory = JSON.parse(localStorage.getItem('chat_history_api')) || [];
} catch (e) {
    chatHistory = [];
}

let res;


function sendForm() {


    const userPrompt = formPrompt.querySelector('input[type="text"]').value.trim();

    // CHECK Before Send
    if (userPrompt == '') {
        formPrompt.querySelector('input[type="text"]').style.borderColor = 'red';
        return;
    } else {
        formPrompt.querySelector('input[type="text"]').style.borderColor = '';
    }

    formPrompt.querySelector('input[type="text"]').value = '';


    const msg = `
    
    <div class="msg user">
        <img src="imgs/defualt-${user.gender}.png" alt="DEFUALT BOY MARKETLY">
        <div class="text">
            <div>
                ${userPrompt}
            </div>
            <span class="date">
                ${new Date().toLocaleString()}
            </span>
        </div>
    </div>
    
    `
    msgsHolder.innerHTML += msg;
    chatHolder.scrollTop = msgsHolder.scrollHeight;

}

formPrompt.addEventListener('submit', async (e) => {
    e.preventDefault();
    const userPrompt = formPrompt.querySelector('input[type="text"]').value.trim();

    sendForm();



    const sys = `
    أنت "ماركتلي"، خبير تسويق ومساعد ذكي في لعبة تعليمية.
    دورك: مساعدة اللاعب في فهم استراتيجيات التسويق (STP) واتخاذ القرارات.
    اللغة: تحدث باللهجة المصرية الودودة والمحترفة (GEN Z , Business Casual) يكون الرد علي حسب السن.
    
    بيانات اللاعب الحالية: ${JSON.stringify(user)}

    **تعليمات صارمة للتنسيق (مهم جداً):**
    1. لا تستخدم تنسيق Markdown أبداً (لا تستخدم ** أو ## أو -).
    2. استخدم وسوم HTML فقط لتنسيق النص لأن الرد سيعرض داخل صفحة ويب مباشرة.
    3. استخدم <b> للكلمات المهمة والعناوين.
    - لا تستخدم <br> مرتين ورة بعض !
    4. استخدم <br> للانتقال لسطر جديد (لا تعتمد على المسافات).
    5. استخدم <ul> و <li> عند ذكر نقاط أو خطوات.
    6. اجعل الرد قصيراً، مركزاً، ومنسقاً بصرياً ليسهل قراءته.
    `;


    sendToApi(sys , userPrompt);




})



document.querySelector('.analysis-btn').addEventListener('click' ,  () => {



    formPrompt.querySelector('input[type="text"]').value = 'قم بتحليل الأداء الخاص بي.';
    sendForm();

    const sys = `
    أنت مدير تسويق كبير (CMO) في لعبة محاكاة، وتقوم بعمل تقييم أداء (Performance Review) للاعب.
    بيانات اللاعب وإجاباته: ${JSON.stringify(user)}

    المطلوب: تحليل شامل لمستوى اللاعب، قراراته في الـ STP، وتقدمه في المهام. كن صريحاً، بناءً، ومحفزاً.
    
    **تعليمات التنسيق (HTML Only):**
    - لا تستخدم Markdown نهائياً.
    - ابدأ بـ <b>تقييم عام:</b> (رقم من 10).
    - استخدم <b>نقاط القوة:</b> واذكرها في قائمة <ul>.
    - استخدم <b>فرص التحسين:</b> واذكر الأخطاء أو الأشياء الناقصة.
    - اختم بـ <b>نصيحة ذهبية:</b> لتطوير مستواه.
    - استخدم <br> للفصل بين الفقرات بوضوح.
    - لا تستخدم <br> مرتين ورة بعض !
    `;


    
    sendToApi(sys  , 'حللني')


})



async function  sendToApi(sys, userMsg) {
    // SEND API
    const api = 'pk_KcjFDqm5HGaNexsX';
    const model = 'qwen-coder';
    const a_api = `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`;
    const freeModel = "z-ai/glm-4.5-air:free";


    // Prepare messages with history
    // We create a temporary history including the new user message to send to the API
    // We don't save to permanent storage until success to avoid duplicates on errors
    const currentMessages = [
        { "role": "system", "content": sys },
        ...chatHistory,
        { "role": "user", "content": userMsg }
    ];


    // GET API FROM FETCH
    const sec_api = fetch('')

    try {
        const response = await fetch(`https://salesflow.anasramadanking.workers.dev/`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${a_api}`,
                
            },
            body: JSON.stringify({
                    "model": freeModel,
                    "messages": currentMessages,
                    "user": user.username || "guest_player"
            })
        });

        const data = await response.json();
        console.log(data);
        const res = data.choices[0].message.content;

        // Update History on Success
        chatHistory.push({ "role": "user", "content": userMsg , 'date' : new Date().toLocaleString()});
        chatHistory.push({ "role": "assistant", "content": res , 'date' : new Date().toLocaleString()});
        
        // Limit history to last 20 messages to avoid token limits issues with free models
        if (chatHistory.length > 20) {
            chatHistory = chatHistory.slice(-20);
        }
        
        localStorage.setItem('chat_history_api', JSON.stringify(chatHistory));

        // Show Data And Create Msg
        const msg = `
        
            <div class="msg ai">
                <img src="imgs/ai_robot.png" alt="MARKETLY Ai Robot">
                <div class="text">
                    <div>
                        ${res}
                    </div>
                    <span class="date">
                        ${new Date().toLocaleString()}
                    </span>
                </div>
            </div>
        `
        msgsHolder.innerHTML += msg;
        chatHolder.scrollTop = msgsHolder.scrollHeight;

        // Save
        localStorage.setItem('conv' , msgsHolder.innerHTML);

        
    } catch (error) {
        console.error('Error calling AI API:', error);
        alert('حدث خطأ أثناء الاتصال بالخدمة المجانية');
    }
}
