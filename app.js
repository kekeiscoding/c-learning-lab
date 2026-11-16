const lessons = {
  arrays: {n:'01',k:'COLLECTIONS',t:'Arrays keep values in order.',c:'An array stores several values of one type. Its first item is at index 0, so an array with four items uses indexes 0 through 3.',code:'int scores[4] = {85, 92, 78, 90};\nprintf("%d\\n", scores[0]); // 85',tip:'Array indexes start at zero. If an array has length 4, its last valid index is 3.'},
  pointers: {n:'02',k:'ADDRESSES',t:'Pointers let you work with an address.',c:'A pointer stores the address of another variable. Use & to get an address, and * to read or update the value at that address.',code:'int count = 3;\nint *p = &count;\n*p = 4; // count is now 4',tip:'Only dereference a pointer after it points to a valid object.'},
  structures: {n:'03',k:'CUSTOM TYPES',t:'Structures group related information.',c:'A struct combines fields that can have different types. Use a dot to access a field from a struct variable, or an arrow through a pointer.',code:'struct Student { int id; float gpa; };\nstruct Student s = {101, 3.6f};\nprintf("%d", s.id);',tip:'Use . with a struct variable: student.id. Use -> with a pointer to a struct: student_ptr->id.'}
};
const challenges = [
 {title:'Find the average',prompt:'Create an integer array named scores with 3 values. Use a loop to add them, calculate the average, and print it. For {80, 90, 100}, the average should be 90.',hint:'Try an int sum = 0; then loop from i = 0 while i < 3. Add scores[i] to sum.',starter:'#include <stdio.h>\n\nint main(void) {\n    int scores[3] = {80, 90, 100};\n    // Make a sum and loop through scores\n    // Print the average\n    return 0;\n}'},
 {title:'Update through a pointer',prompt:'Create an integer named value with 7. Make a pointer to it, then use that pointer to change value to 12. Print value.',hint:'Declare int *ptr = &value; then assign 12 through it with *ptr = 12;',starter:'#include <stdio.h>\n\nint main(void) {\n    int value = 7;\n    // Make a pointer to value\n    // Change value through the pointer\n    printf("%d\\n", value);\n    return 0;\n}'},
 {title:'Create a student record',prompt:'Define struct Student with an int id and a float gpa. Create one student, then print the student’s ID using the dot operator.',hint:'Define the struct before main. Then try struct Student student = {101, 3.5f}; and print student.id.',starter:'#include <stdio.h>\n\n// Define struct Student here\n\nint main(void) {\n    // Create a Student and print its id\n    return 0;\n}'}
];
const questionBank = [
 {id:'a1',topic:'Arrays',q:'What is the index of the first element in a C array?',options:['0','1','-1','It depends on the array size'],answer:0,why:'C arrays use zero-based indexing, so the first element is at index 0.'},
 {id:'a2',topic:'Arrays',q:'An array is declared as int marks[5]. What is its last valid index?',options:['4','5','6','0'],answer:0,why:'Five elements have indexes 0 through 4. Index 5 is outside this array.'},
 {id:'a3',topic:'Arrays',q:'Which loop condition visits every element in int data[6] without going out of bounds?',options:['i < 6','i <= 6','i > 6','i != 6 starting at 1'],answer:0,why:'Starting at 0 and continuing while i < 6 visits indexes 0, 1, 2, 3, 4, and 5.'},
 {id:'a4',topic:'Arrays',q:'Which declaration creates space for 3 floating-point values?',options:['float temps[3];','int temps = 3;','float[3] temps;','temps float(3);'],answer:0,why:'The element type comes first, then the array name and its size in brackets.'},
 {id:'a5',topic:'Arrays',q:'What does scores[2] refer to?',options:['The third element','The second element','The value 2','The array length'],answer:0,why:'Index 2 refers to the third element because indexing begins at 0.'},
 {id:'a6',topic:'Arrays',q:'What is a common risk when writing to values[4] in an array of length 4?',options:['It is out of bounds','It always selects the first element','It automatically grows the array','It changes the array type'],answer:0,why:'The valid indexes are 0 to 3. C does not automatically grow a fixed-size array.'},
 {id:'p1',topic:'Pointers',q:'What does the & operator do in int *p = &count;?',options:['Gets the address of count','Multiplies count by p','Declares an array','Frees count'],answer:0,why:'The address-of operator & produces the memory address of an object.'},
 {id:'p2',topic:'Pointers',q:'If p points to an int, what does *p mean in an expression?',options:['The value at the address stored in p','The address of p','The size of p','A multiplication that is always invalid'],answer:0,why:'The unary * dereferences a pointer to access the object it points to.'},
 {id:'p3',topic:'Pointers',q:'Which is a safe way to initialize a pointer to an existing int variable n?',options:['int *p = &n;','int *p = n;','int p = &n;','int *p; *p = n;'],answer:0,why:'Declare a pointer to int and initialize it with the address of n.'},
 {id:'p4',topic:'Pointers',q:'After int n = 4; int *p = &n;, what does *p = 9; do?',options:['Changes n to 9','Changes p into an int','Sets n to its address','Creates a new variable'],answer:0,why:'Writing through *p changes the object p points to, which is n.'},
 {id:'p5',topic:'Pointers',q:'What should you do before dereferencing a pointer?',options:['Make sure it points to a valid object','Add 1 to it','Set it to 0 and dereference it','Cast it to float'],answer:0,why:'Dereferencing a null, uninitialized, or invalid pointer causes undefined behavior.'},
 {id:'p6',topic:'Pointers',q:'In most expressions, what does an array name such as nums represent?',options:['A pointer to its first element','The number of items','A pointer to the last element','A struct'],answer:0,why:'In most expressions an array name converts to a pointer to its first element.'},
 {id:'s1',topic:'Structures',q:'Why use a struct in C?',options:['To group related fields, possibly of different types','To make every variable global','To increase an array size','To replace all functions'],answer:0,why:'A structure packages related fields, such as an ID, name, and GPA.'},
 {id:'s2',topic:'Structures',q:'How do you access the id field of a struct variable named student?',options:['student.id','student->id','student::id','id.student'],answer:0,why:'Use the dot operator when you have a structure variable.'},
 {id:'s3',topic:'Structures',q:'How do you access a field through a pointer named student_ptr?',options:['student_ptr->id','student_ptr.id','*student_ptr.id','student_ptr::id'],answer:0,why:'The arrow operator -> accesses a structure member through a pointer.'},
 {id:'s4',topic:'Structures',q:'Which line declares a structure type named Book with an int pages field?',options:['struct Book { int pages; };','Book struct = int pages;','struct { Book pages; } int;','int Book.pages;'],answer:0,why:'A structure definition starts with struct and a tag, then lists fields in braces.'},
 {id:'s5',topic:'Structures',q:'What does this initialize? struct Point p = {2, 5};',options:['The first two fields of p','Two Point variables','An array with five points','A pointer to p'],answer:0,why:'This aggregate initializer fills the fields in declaration order.'},
 {id:'s6',topic:'Structures',q:'If struct Student *p points to a student, what is p->gpa equivalent to?',options:['(*p).gpa','*(p.gpa)','&p.gpa','p.gpa'],answer:0,why:'The arrow operator is shorthand for (*pointer).field.'}
];
const $ = s => document.querySelector(s);
const editor = $('#code-editor'), terminal = $('#terminal-output'), lineNumbers = $('#line-numbers');
let activeChallenge = 0;
function storageGet(key){try{return localStorage.getItem(key);}catch{return null;}}
function storageSet(key,value){try{localStorage.setItem(key,value);}catch{}}
let savedCompletions=[];try{savedCompletions=JSON.parse(storageGet('cLabCompleted')||'[]');}catch{}
let completed = new Set(savedCompletions.filter(v=>[0,1,2].includes(v)));
function updateProgress(){ $('#progress-text').textContent = completed.size + ' / 3 complete'; $('#progress-bar').style.width = (completed.size/3*100)+'%'; }
function showLesson(key){const x=lessons[key];$('#lesson-kicker').textContent=x.k;$('#lesson-title').textContent=x.t;$('#lesson-copy').textContent=x.c;$('#lesson-code').textContent=x.code;$('#lesson-tip').textContent=x.tip;$('#lesson-code').dataset.copy=x.code;$('.lesson-number').textContent=x.n;document.querySelectorAll('.topic-card').forEach(b=>b.classList.toggle('selected',b.dataset.topic===key));}
function setChallenge(i,reset=true){activeChallenge=i;const c=challenges[i];$('#challenge-title').textContent=c.title;$('#challenge-prompt').textContent=c.prompt;$('#challenge-hint').textContent=c.hint;$('#challenge-count').textContent='0'+(i+1)+' / 03';document.querySelectorAll('.challenge-tab').forEach(b=>b.classList.toggle('active',Number(b.dataset.challenge)===i));if(reset)editor.value=c.starter;updateLines();report([{type:'terminal-muted',text:'Write your solution, then select Check code for feedback.'}]);}
function updateLines(){const n=editor.value.split('\n').length;lineNumbers.textContent=Array.from({length:n},(_,i)=>i+1).join('\n');}
function report(items){terminal.innerHTML=items.map(x=>'<p class="'+x.type+'">'+String(x.text).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))+'</p>').join('');}
function cleanSource(source){return source.replace(/\/\*[\s\S]*?\*\//g,m=>m.replace(/[^\n]/g,' ')).replace(/\/\/.*$/gm,m=>' '.repeat(m.length)).replace(/"(?:\\.|[^"\\])*"/g,m=>' '.repeat(m.length)).replace(/'(?:\\.|[^'\\])*'/g,m=>' '.repeat(m.length));}
function analyze(){
 const raw=editor.value, s=cleanSource(raw), issues=[];
 if(!raw.trim())return [{type:'terminal-error',text:'Your editor is empty. Start with the challenge template or reset the code.'}];
 if(/\b(?:printf|scanf)\s*\(/.test(s)&&!/#\s*include\s*<stdio\.h>/.test(s))issues.push(['terminal-hint','Missing header: add #include <stdio.h> to use printf or scanf.']);
 if(/\bscanf\s*\(/.test(s)&&/\bscanf\s*\([^;]*,\s*\w+\s*\)/.test(s))issues.push(['terminal-hint','Check scanf: it usually needs a variable address, for example scanf("%d", &value).']);
 if(/if\s*\([^)]*\b\w+\s*=(?!=)[^=]/.test(s))issues.push(['terminal-hint','An if condition appears to use assignment (=). Did you mean equality comparison (==)?']);
 const stack=[], pairs={')':'(',']':'[','}':'{'}, opens=new Set(['(','[','{']);let line=1;
 for(const ch of s){if(ch==='\n'){line++;continue;}if(opens.has(ch))stack.push({ch,line});else if(pairs[ch]){const last=stack.pop();if(!last||last.ch!==pairs[ch]){issues.push(['terminal-error','Mismatched closing '+ch+' near line '+line+'. Check the matching parentheses, brackets, or braces.']);break;}}}
 if(stack.length)issues.push(['terminal-error','Unclosed '+stack[stack.length-1].ch+' opened near line '+stack[stack.length-1].line+'. Add its matching closing character.']);
 const arrays=[...s.matchAll(/\b(?:int|float|double|char)\s+(\w+)\s*\[\s*(\d+)\s*\]/g)];
 for(const [,name,sizeText] of arrays){const size=Number(sizeText),rx=new RegExp('\\b'+name+'\\s*\\[\\s*(\\d+)\\s*\\]','g');let m;while((m=rx.exec(s))){if(/\b(?:int|float|double|char)\s+$/.test(s.slice(0,m.index)))continue;const index=Number(m[1]);if(index>=size)issues.push(['terminal-error',name+'['+index+'] is out of bounds for an array of '+size+' elements. Its indexes are 0 to '+(size-1)+'.']);}}
 const ptrs=[...s.matchAll(/\b\w+\s*\*\s*(\w+)\s*;/g)].map(m=>m[1]);
 for(const p of ptrs){if(new RegExp('\\*\\s*'+p+'\\b').test(s)&&!new RegExp('\\b'+p+'\\s*=\\s*&').test(s))issues.push(['terminal-error','Pointer '+p+' may be dereferenced before it points to a valid object. Initialize it with an address before using *'+p+'.']);}
 const lines=s.split('\n');
 lines.forEach((row,i)=>{const t=row.trim();if(!t||t.startsWith('#')||t==='{'||t==='}'||t.endsWith(';')||t.endsWith('{')||t.endsWith('}')||t.endsWith(':')||t.startsWith('//'))return;if(/\b(?:printf|scanf)\s*\(/.test(t)||/^(?:return\b|(?:int|float|double|char|long|short)\s+\*?\s*\w+(?:\s*\[\s*\d+\s*\])?\s*(?:=[^;]*)?|\w+\s*(?:\+\+|--|[+*/-]?=))/.test(t))issues.push(['terminal-hint','Line '+(i+1)+' may be missing a semicolon at the end.']);});
 const unique=[];const seen=new Set();for(const item of issues){const key=item[1];if(!seen.has(key)){seen.add(key);unique.push({type:item[0],text:key});}}
 if(!unique.length)unique.push({type:'terminal-ok',text:'No common issues found by the quick checker. This does not guarantee the code compiles or behaves correctly.'});
 return unique;
}
function checkChallenge(s){
 if(activeChallenge===0){const ok=/int\s+scores\s*\[\s*3\s*\]/.test(s)&&/\bfor\s*\(/.test(s)&&/\bsum\b/.test(s)&&/\+=|sum\s*=\s*sum\s*\+/.test(s)&&/average|sum\s*\/\s*3|sum\s*\/\s*count/i.test(s)&&/\bprintf\s*\(/.test(s);return{ok,tip:'For this task, look for scores[3], a loop, a running sum, an average calculation, and printf.'};}
 if(activeChallenge===1){const ok=/\bint\s*\*\s*\w+\s*=\s*&\s*value\b/.test(s)&&/\*\s*\w+\s*=\s*12\s*;/.test(s)&&/\bprintf\s*\(/.test(s);return{ok,tip:'Declare a pointer to value with &value, change it through *pointer, and print the result.'};}
 const ok=/struct\s+Student\s*\{[\s\S]*?\bint\s+id\s*;[\s\S]*?\bfloat\s+gpa\s*;[\s\S]*?\}\s*;/.test(s)&&/struct\s+Student\s+\w+\s*=/.test(s)&&/\w+\.id\b/.test(s)&&/\bprintf\s*\(/.test(s);return{ok,tip:'Define Student with int id and float gpa, create an instance, and print its .id field.'};
}
function checkCode(){
 const findings=analyze(), challenge=checkChallenge(editor.value);
 if(findings.some(x=>x.type==='terminal-error')){report(findings);return;}
 if(!challenge.ok){findings.push({type:'terminal-hint',text:'Challenge hint: '+challenge.tip});report(findings);return;}
 findings.push({type:'terminal-ok',text:'Challenge patterns found. Your code matches the key ideas this activity is looking for.'});
 findings.push({type:'terminal-hint',text:'This is a pattern checker, not a compiler. Review the code and try it in a C compiler to verify its behavior.'});
 completed.add(activeChallenge);storageSet('cLabCompleted',JSON.stringify([...completed]));updateProgress();report(findings);
}
function debugCode(){report(analyze());}
function shuffle(items){const a=[...items];for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]];}return a;}
let quiz=[],quizIndex=0,quizScore=0,selectedAnswer=null,answered=false;
function drawQuiz(){const core=['Arrays','Pointers','Structures'].flatMap(topic=>shuffle(questionBank.filter(q=>q.topic===topic)).slice(0,2));const used=new Set(core.map(q=>q.id));return shuffle([...core,...shuffle(questionBank.filter(q=>!used.has(q.id))).slice(0,2)]);}
function startQuiz(){
 let selected=drawQuiz(),signature=selected.map(x=>x.id).sort().join(',');
 const previous=storageGet('cLabLastQuiz');
 for(let tries=0;signature===previous&&tries<12;tries++){selected=drawQuiz();signature=selected.map(x=>x.id).sort().join(',');}
 storageSet('cLabLastQuiz',signature);
 quiz=selected.map(q=>{const opts=shuffle(q.options.map((text,index)=>({text,correct:index===q.answer})));return{...q,opts};});
 quizIndex=0;quizScore=0;selectedAnswer=null;answered=false;$('#quiz-summary').hidden=true;renderQuestion();
}
function renderQuestion(){
 const q=quiz[quizIndex];$('#quiz-topic').textContent=q.topic.toUpperCase();$('#quiz-question').textContent=q.q;$('#quiz-progress').textContent='Question '+(quizIndex+1)+' of '+quiz.length;$('#quiz-score').textContent=quizScore;$('#quiz-progress-bar').style.width=(quizIndex/quiz.length*100)+'%';$('#quiz-feedback').hidden=true;$('#quiz-feedback').textContent='';$('#quiz-options').replaceChildren();selectedAnswer=null;answered=false;
 q.opts.forEach((opt,i)=>{const b=document.createElement('button');b.type='button';b.className='quiz-option';b.textContent=opt.text;b.addEventListener('click',()=>{if(answered)return;selectedAnswer=i;document.querySelectorAll('.quiz-option').forEach(x=>x.classList.remove('chosen'));b.classList.add('chosen');$('#quiz-next').disabled=false;$('#quiz-next').textContent='Check answer';});$('#quiz-options').appendChild(b);});
 $('#quiz-next').disabled=true;$('#quiz-next').textContent='Check answer';
}
function quizNext(){
 if(!answered){if(selectedAnswer===null)return;answered=true;const q=quiz[quizIndex],correct=q.opts[selectedAnswer].correct;const fb=$('#quiz-feedback');fb.hidden=false;fb.className='quiz-feedback '+(correct?'is-correct':'is-wrong');fb.innerHTML='<strong>'+(correct?'Correct!':'Not quite.')+'</strong> '+escapeHtml(q.why);if(correct)quizScore++;$('#quiz-score').textContent=quizScore;document.querySelectorAll('.quiz-option').forEach((b,i)=>{b.disabled=true;if(q.opts[i].correct)b.classList.add('right');else if(i===selectedAnswer)b.classList.add('wrong');});$('#quiz-next').textContent=quizIndex===quiz.length-1?'See results':'Next question';return;}
 if(quizIndex<quiz.length-1){quizIndex++;renderQuestion();}else showQuizSummary();
}
function escapeHtml(value){return String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function showQuizSummary(){ $('#quiz-options').replaceChildren();$('#quiz-topic').textContent='QUIZ COMPLETE';$('#quiz-question').textContent='You scored '+quizScore+' out of '+quiz.length+'.';$('#quiz-progress').textContent='Finished';$('#quiz-progress-bar').style.width='100%';$('#quiz-feedback').hidden=true;$('#quiz-next').disabled=true;$('#quiz-next').textContent='Complete';const box=$('#quiz-summary');box.hidden=false;box.textContent=quizScore>=7?'Excellent work. Try a fresh set to keep practicing.':quizScore>=5?'Good progress. Review the explanations, then try a new set.':'Keep going. Revisit the lessons and give a new set a try.';}
document.querySelectorAll('.topic-card').forEach(b=>b.addEventListener('click',()=>showLesson(b.dataset.topic)));
function showNotes(topic){document.querySelectorAll('.notes-tab').forEach(tab=>{const active=tab.dataset.notes===topic;tab.classList.toggle('active',active);tab.setAttribute('aria-selected',String(active));tab.tabIndex=active?0:-1;});document.querySelectorAll('.notes-panel').forEach(panel=>{panel.hidden=panel.dataset.notesPanel!==topic;});}
document.querySelectorAll('.notes-tab').forEach(tab=>{tab.addEventListener('click',()=>showNotes(tab.dataset.notes));tab.addEventListener('keydown',e=>{if(!['ArrowDown','ArrowUp','ArrowRight','ArrowLeft'].includes(e.key))return;e.preventDefault();const tabs=[...document.querySelectorAll('.notes-tab')],index=tabs.indexOf(tab),step=e.key==='ArrowDown'||e.key==='ArrowRight'?1:-1,next=tabs[(index+step+tabs.length)%tabs.length];showNotes(next.dataset.notes);next.focus();});});
const validViews=new Set(['home','learn','notes','practice','quiz']);
function showView(view,pushHistory=true){if(!validViews.has(view))view='home';document.querySelectorAll('[data-view-panel]').forEach(panel=>{panel.hidden=panel.dataset.viewPanel!==view;});document.querySelectorAll('[data-view-link]').forEach(link=>{if(link.dataset.viewLink===view)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');});document.body.dataset.activeView=view;if(pushHistory&&location.hash!=='#'+view)history.pushState({view},'','#'+view);window.scrollTo(0,0);}
document.querySelectorAll('.challenge-tab').forEach(b=>b.addEventListener('click',()=>setChallenge(Number(b.dataset.challenge))));
$('#run-code').addEventListener('click',checkCode);$('#debug-code').addEventListener('click',debugCode);$('#reset-code').addEventListener('click',()=>setChallenge(activeChallenge));
$('#clear-terminal').addEventListener('click',()=>report([{type:'terminal-muted',text:'Feedback console cleared.'}]));
$('#copy-lesson').addEventListener('click',async e=>{try{await navigator.clipboard.writeText($('#lesson-code').dataset.copy);e.currentTarget.textContent='Copied!';setTimeout(()=>e.currentTarget.textContent='Copy code',1200);}catch{e.currentTarget.textContent='Select code to copy';}});
editor.addEventListener('input',updateLines);editor.addEventListener('scroll',()=>lineNumbers.scrollTop=editor.scrollTop);editor.addEventListener('keydown',e=>{if(e.key==='Tab'){e.preventDefault();const a=editor.selectionStart,b=editor.selectionEnd;editor.setRangeText('    ',a,b,'end');updateLines();}});
$('#quiz-next').addEventListener('click',quizNext);$('#new-quiz').addEventListener('click',startQuiz);
const viewForHash={'#home':'home','#learn':'learn','#notes':'notes','#practice':'practice','#quiz':'quiz'};
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const view=viewForHash[a.getAttribute('href')];if(view){e.preventDefault();showView(view);}}));
window.addEventListener('popstate',()=>showView(viewForHash[location.hash]||'home',false));
showLesson('arrays');showNotes('arrays');setChallenge(0);updateProgress();startQuiz();showView(viewForHash[location.hash]||'home',false);
