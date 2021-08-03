const cases = [
    "'Ha! ha! happy to catch you just at dinner-time. I hope our friend Thud has left something for me!' cried the jovial doctor, as he laid down his sun-hat and umbrella, and wiped his heated forehead. Then, advancing to the table, Pinfold greeted his god-daughter in very paternal fashion. The doctor considered himself to be a privileged person, one who need never wait for an invitation, being always certain to find a welcome. ",
    "In the meanwhile, Mr. Swift, if he did not improve any, at least held his own. This the doctors said was a sign of hope, and, though Tom was filled with anxiety, he tried to think that fate would be kind to him, and that his father would recover. Dr. Hendrix left, saying there was nothing more he could do, and that the rest depended on the local  physicians, and on the nurse.'Und ve vill do our duty!' ponderously exclaimed Dr. Kurtz. 'You go off to dot bird race, Dom, und doant vorry. Ve vill send der with-out-vire messages to you venever dere is anyt'ing to report. Go mit a light  heart! ",
    "Mrs. Bates, the widow of a former vicar of Highbury, was a very old lady, almost past every thing but tea and quadrille. She lived with hersingle daughter in a very small way, and was considered with all theregard and respect which a harmless old lady, under such untowardcircumstances, can excite. Her daughter enjoyed a most uncommon degreeof popularity for a woman neither young, handsome, rich, nor married.Miss Bates stood in the very worst predicament in the world for having much of the public favour; and she had no intellectual superiority to  make atonement to herself, or frighten those who might hate her into outward respect. She had never boasted either beauty or cleverness. ",
    "Proofreader applicants are tested primarily on their spelling, speed, and skill in finding errors in the sample text. Toward that end, they may be given a list of ten or twenty classically difficult words and a proofreading test, both tightly timed. The proofreading test will often have a maximum number of errors per quantity of text and a minimum amount of time to find them. The goal of this approach is to identify those with the best skill set ",
    "When we talk about motivating others, the justification is the end result (either we want to avoid the pain or go towards pleasure) or what we want to get the person to do. How we achieve the end result, are our alternatives. As a manager, we need to understand the other person's justification and then come up with alternatives. We may then choose the right alternative. However, in general, we choose the first or the emotionally satisfying one. Typically people stop at this level of analysis and start to act. But a good manager would think of the following also: Will the action guarantee the consequence? What about other unintended consequences? This requires a certain experience. Are we capable of doing this action? Intention and the selection of the most ideal alternative do not guarantee execution, if we do not have the skills and the experience. Most motivational tactics fail, because without execution capability, they is only wishful thinking. ",
    "Business meetings, and professional recordings can contain sensitive data, so security is something a transcription company should not overlook when providing services. Companies should therefore follow the various laws and industry best practice, especially so when serving law firms, government agencies or courts. Medical Transcription specifically is governed by HIPAA, which elaborates data security practices and compliance measures to be strictly followed, failure of which leads to legal action and penalties. Transcription security includes maintaining confidentiality of the data through information security practices including limiting access with passwords and ensuring a secure environment for data and appropriate methods of disposal of all materials and deletion of files. Personnel may be required to sign non-disclosure agreements on a regular basis as well as take various oaths regarding confidentiality and accuracy. ",
    "A paralegal is a person trained in legal matters who performs tasks requiring knowledge of the law and legal procedures. A paralegal is not a lawyer but can be employed by a law office or work freelance at a company or law office. Paralegals are not allowed to offer legal services directly to the public on their own and must perform their legal work under an attorney or law firm. ",
    "Web designers are expected to have an awareness of usability and if their role involves creating mark up then they are also expected to be up to date with web accessibility guidelines. The different areas of web design include web graphic design; interface design; authoring, including standardised code and proprietary software; user experience design; and search engine optimization. ",
    "A freelancer or freelance worker, is a term commonly used for a person who is self-employed and is not necessarily committed to a particular employer long-term. Freelance workers are sometimes represented by a company or a temporary agency that resells freelance labor to clients; others work independently or use professional associations or websites to get work. While the term 'independent contractor' would be used in a higher register of English to designate the tax and employment classes of this type of worker, the term freelancing is most common in culture and creative industries and this term specifically motions to participation therein. Fields, professions, and industries where freelancing is predominant include: music, writing, acting, computer programming, web design, graphic design, translating and illustrating, film and video production and other forms of piece work which some cultural theorists consider as central to the cognitive-cultural economy. ",
    "Closed captions were created for deaf or hard of hearing individuals to assist in comprehension. They can also be used as a tool by those learning to read, learning to speak a non-native language, or in an environment where the audio is difficult to hear or is intentionally muted. ",
    "This is the smallest test. "
]

let goButton = document.getElementById("goButton");
let resetButton = document.getElementById("resetButton");
let inputArea = document.getElementById("inputArea");
let seek = document.getElementById("seekH1");
let timer = document.getElementById("timer");
let timeCheck = false;
let interval, t, words, letters, rand, input;
let l = 0, w = 0;
let a = ""
let temp = 0

function time(){
    timeCheck = true;
    t =0
    // t = parseInt(isNaN(timer.value)? 0 : timer.value);
    interval = setInterval(()=>{
        timer.value = ++t;
    },1000);
}

function hightlight(index, condition){
    a = "";
    for(let i = 0; i<words.length; i++){
        if(i<index)
            a += `<span style = "color: green;">${words[i]}</span> `;
        else if(i==index)
            {
            if(condition == 0)
                a += `<span style = "color: blue;">${words[i]}</span> `;
            else if(condition == 1)
                a += `<span style = "color: green;">${words[i]}</span> `;
            else
                a += `<span style = "color: red;">${words[i]}</span> `;
            }
        else
            a += `<span>${words[i]}</span> `;
    }
    seek.innerHTML = a;
}

goButton.addEventListener("click", ()=>{
    goButton.disabled = true
    resetButton.disabled = false
    inputArea.disabled = false
    rand = Math.floor(Math.random()*11)
    words = cases[rand].split(" ");
    letters = cases[rand].split("");
    seek.innerText = cases[rand]
    inputArea.placeholder = "Start Typing!!"
    inputArea.addEventListener("keypress", (e)=>{
        if(timeCheck == false)
            time();
        if(letters[l] == e.key){
            l++;
            hightlight(w,0);
            if(e.key == " " && words[w] == inputArea.value.trim()){
                temp = l; 
                console.log(w);
                inputArea.value = "";
                hightlight(w,1);
                w++;
            }
        }
        else{
            l = temp;
            inputArea.value = "";
            hightlight(w,-1);
        }
    })
})

resetButton.addEventListener("click", ()=>{
    goButton.disabled = false;
    resetButton.disabled = true;
    inputArea.disabled = true;
    inputArea.value = "";
    seek.innerText = "";
    inputArea.placeholder = "Press `Go` to enable typing"
    clearInterval(interval);
    timer.value = "";
    timeCheck = false;
    w = l = 0;
})