//using selectors inside the element
// traversing the dom

const questions=document.querySelectorAll(".question");

questions.forEach(function(question){
    // console.log(question);
    const btns=question.querySelector(".question-btn");
    // console.log(btns);
    btns.addEventListener("click",function(){
        question.classList.toggle("show-text");
    });
});

// const btns=document.querySelectorAll('.question-btn');

// btns.forEach(function(btn){
//     btn.addEventListener("click",function(event){
//     //    console.log(event.currentTarget.parentElement.parentElement)
//         const question=event.currentTarget.parentElement.parentElement; 
//         question.classList.toggle("show-text");

//     })
// })
    
