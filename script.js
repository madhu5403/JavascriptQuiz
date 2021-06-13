const startButton = document.querySelector('.start-btn')
const nextButton = document.querySelector('.next-btn')
const questionContainer = document.querySelector('#question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-button')
const answerContainer = document.getElementById('answer-button')

let i = 0
startButton.addEventListener('click',startGame)
nextButton.addEventListener('click',()=>{
  setnextQuestion(questions[i++])
  document.body.classList.remove('correct')
  document.body.classList.remove('incorrect')
})
const questions = [
  {
    question:'What is 5+5?',
    answers:[{option:'10',correct:true},{aption:'1', correct:false},{option:55, correct:false},{option:5, correct:false}]
  },
  {
    question:'What is 7+5?',
    answers:[{option:'13',correct:true},{aption:'1', correct:false},{option:55, correct:false},{option:5, correct:false}]
  },
  {
    question:'What is 5+15?',
    answers:[{option:'10',correct:false},{aption:'1', correct:false},{option:20, correct:true},{option:5, correct:false}]
  },
  {
    question:'What is 9+5?',
    answers:[{option:'14',correct:true},{aption:'1', correct:false},{option:55, correct:false},{option:5, correct:false}]
  },
  {
    question:'What is 5+20?',
    answers:[{option:'10',correct:false},{aption:'1', correct:false},{option:55, correct:false},{option:25, correct:true}]
  }
]
function startGame(){
console.log('started')
startButton.classList.add('hide')
questionContainer.classList.remove('hide')
console.log(questions[i])
setnextQuestion(questions[i])
}
function setnextQuestion(question){
  if (typeof question === 'undefined'){
    resetState()
    const endMessage = document.createElement('h1')
    endMessage.innerText="Thank you for you Time!"
    answerContainer.appendChild(endMessage)
  }
  else{
    resetState()
    showQuestion(question)
  }
  
}
function resetState(){
  nextButton.classList.add('hide')
  while(answerButtonElement.firstChild){
    answerButtonElement.removeChild(answerButtonElement.firstChild)
  }
  questionElement.innerText=""
}

function showQuestion(question){
  questionElement.innerText=question.question
  console.log(question.answers)
  Array.from(question.answers,(element=>{
    const button = document.createElement('button')
    console.log(element.option)
    button.innerText=element.option
    answerButtonElement.appendChild(button)
    if(element.correct){
      button.dataset.correct=element.correct
    }
    button.addEventListener('click',selectAnswer)
    button.classList.add('btn')
  }));
  
  console.log()
}
function selectAnswer(e){
  const selectedButton = e.target 
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body,selectedButton,correct) 
  nextButton.classList.remove('hide') 
}
function setStatusClass(element,selectedButton,correct){
  clearStatusClass(element)
if(correct){
  selectedButton.classList.remove('incorrect')
  selectedButton.classList.add('correct')
  element.classList.add('correct')
}
else{
  document.querySelector('[data-correct]').classList.add('correct')
  selectedButton.classList.add('incorrect')
  element.classList.add('incorrect')
}
}
function clearStatusClass(element){
  element.classList.remove('incorrect')
  element.classList.remove('incorrect')
}