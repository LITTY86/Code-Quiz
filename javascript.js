function check() {
    var c=0;
    var q1=document.quiz.question1.value;
    var q2=document.quiz.question1.value;
    var q3=document.quiz.question1.value;
    var q4=document.quiz.question1.value;
    var result=document.getElementById("result");
    var quiz=document.getElementById("quiz")
    if (q1=="Javascript"){c++}
    if (q2=="Array"){c++}
    if (q3=="Javascript Object Notation"){c++}
    if (q4=="Variables"){c++}
   quiz.style.display="none";   
    result.textContent="$(c)";
}