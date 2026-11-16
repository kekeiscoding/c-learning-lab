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
const $ = s => document.querySelector(s);
const editor = $('#code-editor'), terminal = $('#terminal-output'), lineNumbers = $('#line-numbers');
let activeChallenge = 0;
let completed = new Set(JSON.parse(localStorage.getItem('cLabCompleted') || '[]'));
function updateProgress(){ $('#progress-text').textContent = completed.size + ' / 3 complete'; $('#progress-bar').style.width = (completed.size/3*100)+'%'; }
function showLesson(key){ const x=lessons[key]; $('#lesson-kicker').textContent=x.k; $('#lesson-title').textContent=x.t; $('#lesson-copy').textContent=x.c; $('#lesson-code').textContent=x.code; $('#lesson-tip').textContent=x.tip; $('#lesson-code').dataset.copy=x.code; $('.lesson-number').textContent=x.n; document.querySelectorAll('.topic-card').forEach(b=>b.classList.toggle('selected',b.dataset.topic===key)); }
function setChallenge(i,reset=true){activeChallenge=i;const c=challenges[i];$('#challenge-title').textContent=c.title;$('#challenge-prompt').textContent=c.prompt;$('#challenge-hint').textContent=c.hint;$('#challenge-count').textContent='0'+(i+1)+' / 03';document.querySelectorAll('.challenge-tab').forEach(b=>b.classList.toggle('active',Number(b.dataset.challenge)===i));if(reset)editor.value=c.starter;updateLines();terminal.innerHTML='<p class="terminal-muted">Challenge loaded. Write your solution, then run the check.</p>';}
function updateLines(){const n=editor.value.split('\n').length;lineNumbers.textContent=Array.from({length:n},(_,i)=>i+1).join('\n');}
function report(items){terminal.innerHTML=items.map(x=>'<p class="'+x.type+'">'+String(x.text).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))+'</p>').join('');}
function debug(){
 const s=editor.value;const issues=[];
 if(!s.trim())issues.push(['terminal-error','Your editor is empty. Start from the challenge template or reset it.']);
 if(/\bprintf\s*\(/.test(s)&&!/#include\s*<stdio\.h>/.test(s))issues.push(['terminal-hint','I see printf, but not #include <stdio.h>. Add the header so printf is declared.']);
 if(/\bprintf\s*\([^;]*\)\s*\n/.test(s))issues.push(['terminal-hint','A printf call may be missing its semicolon. C statements usually end with ;']);
 if(/\bscanf\s*\(/.test(s)&&!/\bscanf\s*\([^;]*&/.test(s))issues.push(['terminal-hint','Check scanf arguments: it usually needs the variable address, such as scanf("%d", &value).']);
 if(/int\s*\*\s*\w+\s*;/.test(s)&&/\*\s*\w+/.test(s))issues.push(['terminal-error','A pointer may be used before it is initialized. Give it a valid address before dereferencing, for example int *p = &value;']);
 const size=[...s.matchAll(/\b\w+\s*\[(\d+)\]\s*=/g)];
 for(const m of size){const name=m[0].match(/\w+/)[0],len=Number(m[1]),idx=new RegExp('\\b'+name+'\\s*\\[\\s*'+len+'\\s*\\]').test(s);if(idx)issues.push(['terminal-error',name+' has '+len+' elements, so index '+len+' is out of bounds. The last valid index is '+(len-1)+'.']);}
 const opens=(s.match(/{/g)||[]).length,closes=(s.match(/}/g)||[]).length;if(opens!==closes)issues.push(['terminal-error','The number of opening and closing braces does not match. Check your { and } blocks.']);
 if(/if\s*\([^)]*[^=!<>]=[^=]/.test(s))issues.push(['terminal-hint','Inside an if condition, check whether you meant == (comparison) instead of = (assignment).']);
 if(!issues.length)issues.push(['terminal-ok','No common beginner issues detected. This quick helper checks a few patterns; a real compiler can catch more.']);
 report(issues.map(([type,text])=>({type,text})));
}
function challengeCheck(s){
 if(activeChallenge===0){const arr=/int\s+scores\s*\[\s*3\s*\]\s*=/.test(s),loop=/\bfor\s*\(/.test(s),sum=/\bsum\b/.test(s)&&/\+=|sum\s*=\s*sum\s*\+/.test(s),avg=/average|sum\s*\/\s*3|sum\s*\/\s*count/i.test(s),print=/\bprintf\s*\(/.test(s);return {ok:arr&&loop&&sum&&avg&&print,tip:'For this challenge, use scores[3], a loop and sum, an average calculation, and printf.'};}
 if(activeChallenge===1){const pointer=/\bint\s*\*\s*\w+\s*=\s*&\s*value\b/.test(s),through=/\*\s*\w+\s*=\s*12\s*;/.test(s),printed=/\bprintf\s*\(/.test(s);return {ok:pointer&&through&&printed,tip:'Declare a pointer to value using &value, assign 12 through *thatPointer, then print value.'};}
 const def=/struct\s+Student\s*\{[\s\S]*?\bint\s+id\s*;[\s\S]*?\bfloat\s+gpa\s*;[\s\S]*?\}\s*;/.test(s),instance=/struct\s+Student\s+\w+\s*=/.test(s),field=/\w+\.id\b/.test(s),printed=/\bprintf\s*\(/.test(s);return {ok:def&&instance&&field&&printed,tip:'Define struct Student with int id and float gpa, create an instance, and print its .id field.'};
}
async function check(){
 const source=editor.value;if(!source.trim()){report([{type:'terminal-error',text:'Editor is empty. Add your solution first.'}]);return;}
 const button=$('#run-code');button.disabled=true;button.innerHTML='<span>…</span> Compiling';report([{type:'terminal-muted',text:'Compiling with GCC and running your program…'}]);
 try{
  const response=await fetch('/api/run',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({source,input:$('#stdin-input').value})});
  const result=await response.json();
  if(!response.ok||result.error){report([{type:'terminal-error',text:result.error||'The local GCC runner returned an error.'}]);return;}
  const lines=[];
  if(result.compile_output)lines.push({type:result.exit_code===0?'terminal-hint':'terminal-error',text:result.compile_output});
  if(result.timed_out)lines.push({type:'terminal-error',text:'Program stopped: it ran longer than 4 seconds.'});
  else if(result.output)lines.push({type:'terminal-ok',text:'Program output:'},{type:'terminal-ok',text:result.output});
  else if(result.exit_code===0)lines.push({type:'terminal-muted',text:'Program finished with no output.'});
  if(result.exit_code!==0&&!result.timed_out)lines.push({type:'terminal-error',text:'Program exited with status '+result.exit_code+'.'});
  if(result.exit_code===0&&!result.timed_out){const challenge=challengeCheck(source);if(challenge.ok){completed.add(activeChallenge);localStorage.setItem('cLabCompleted',JSON.stringify([...completed]));updateProgress();lines.push({type:'terminal-ok',text:'✓ Challenge requirements detected.'},{type:'terminal-hint',text:'Nice work. Explain each step in your own words.'});}else lines.push({type:'terminal-hint',text:'Your C program ran. '+challenge.tip});}
  report(lines);
 }catch(e){report([{type:'terminal-error',text:'Could not reach the local GCC runner. Start the lab with start-lab.bat, then open http://127.0.0.1:8000.'}]);}
 finally{button.disabled=false;button.innerHTML='<span>▶</span> Run with GCC';}
}
document.querySelectorAll('.topic-card').forEach(b=>b.addEventListener('click',()=>showLesson(b.dataset.topic)));
document.querySelectorAll('.challenge-tab').forEach(b=>b.addEventListener('click',()=>setChallenge(Number(b.dataset.challenge))));
$('#run-code').addEventListener('click',check);$('#debug-code').addEventListener('click',debug);
$('#reset-code').addEventListener('click',()=>setChallenge(activeChallenge));
$('#clear-terminal').addEventListener('click',()=>terminal.innerHTML='<p class="terminal-muted">Terminal cleared.</p>');
$('#copy-lesson').addEventListener('click',async e=>{try{await navigator.clipboard.writeText($('#lesson-code').dataset.copy);e.currentTarget.textContent='Copied!';setTimeout(()=>e.currentTarget.textContent='Copy code',1200);}catch{e.currentTarget.textContent='Select code to copy';}});
editor.addEventListener('input',updateLines);editor.addEventListener('scroll',()=>lineNumbers.scrollTop=editor.scrollTop);
editor.addEventListener('keydown',e=>{if(e.key==='Tab'){e.preventDefault();const a=editor.selectionStart,b=editor.selectionEnd;editor.setRangeText('    ',a,b,'end');updateLines();}});
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener('click',()=>{const target=$(a.getAttribute('href'));if(target)target.scrollIntoView({behavior:'smooth'});}));
showLesson('arrays');setChallenge(0);updateProgress();
