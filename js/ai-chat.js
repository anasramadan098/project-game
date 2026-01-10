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
    
    بيانات اللاعب الحالية: ${JSON.stringify(user)}

    **تعليمات اللغة والأسلوب (مهم جداً):**
    1. **تكييف الأسلوب حسب السن:**
       - سن اللاعب هو: ${user.age || 'غير محدد'}.
       - لو السن أقل من 25 سنة: تكلم بأسلوب "Gen-Z" شبابي جداً، استخدم مصطلحات زي (روقان، عاش، ليفل الوحش، فاكس، ...).
       - لو السن أكبر من 25 سنة: تكلم بأسلوب "Business Casual" متزن، خليط بين المهنية والود، زي مدير شاطر وودود.
    2. **الفرانكو:** لو اللاعب بيكتب "فرانكو"، رد عليه بالفرانكو. لو بيكتب عربي، رد عربي.

    **تعليمات صارمة للتنسيق (HTML فقط - ممنوع Markdown):**
    1. **تحذير:** لا تبدأ الرد أبداً بكلمة "html" أو علامات الكود (\`\`\`). ابدأ بالنص مباشرة.
    2. ممنوع استخدام Markdown (لا تستخدم ** أو ## أو -).
    3. استخدم <b> للكلمات المهمة.
    4. استخدم <br> للسطر الجديد.
    5. استخدم <ul> و <li> للنقاط.
    6. اجعل الرد منسقاً وجاهزاً للعرض داخل <div>.
    `;


    sendToApi(sys , userPrompt);




})



document.querySelector('.analysis-btn').addEventListener('click' ,  () => {



    formPrompt.querySelector('input[type="text"]').value = 'قم بتحليل الأداء الخاص بي.';
    sendForm();

    const sys = `
    أنت مدير تسويق كبير (CMO) في لعبة محاكاة، وتقوم بعمل تقييم أداء (Performance Review) للاعب.
    بيانات اللاعب وإجاباته: ${JSON.stringify(user)}

    المطلوب: تحليل شامل لمستوى اللاعب.

    **تعليمات اللغة والأسلوب:**
    1. **حسب السن (${user.age || 'غير محدد'}):**
       - لو تحت 25: خلي التقرير بأسلوب شبابي (Gen-Z) ومحفز جداً.
       - لو فوق 25: خلي التقرير احترافي (Professional) وبناء.
    2. لو اللاعب بيكتب "فرانكو"، اكتب التقرير بالفرانكو.
    
    **تعليمات التنسيق (HTML Only - No Markdown):**
    - **تحذير:** ممنوع كتابة "html" أو \`\`\` في البداية.
    - ابدأ بـ <b>تقييم عام:</b> (رقم من 10).
    - استخدم <b>نقاط القوة:</b> (قائمة <ul> و <li>).
    - استخدم <b>فرص التحسين:</b> (قائمة <ul> و <li>).
    - اختم بـ <b>نصيحة ذهبية:</b>.
    - استخدم <br> للفصل بين الفقرات.
    `;


    
    sendToApi(sys  , 'حللني')


})



async function  sendToApi(sys, userMsg) {
    // SEND API
    const api = 'pk_KcjFDqm5HGaNexsX';
    const model = 'qwen-coder';
    const a_api = `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`;
    const freeModel = "google/gemma-3-27b-it:free";


    // Prepare messages with history
    // We create a temporary history including the new user message to send to the API
    // We don't save to permanent storage until success to avoid duplicates on errors
    const currentMessages = [
        { "role": "system", "content": sys },
        ...chatHistory,
        { "role": "user", "content": userMsg }
    ];


    // GET API FROM FETCH
    const sec_api = fetch('');

    try {
        const response = await fetch(`https://salesflow.anasramadanking.workers.dev/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                    "model": freeModel,
                    "messages": currentMessages,
                    "user": user.username || "guest_player"
            })
        });

        const data = await response.json();
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
