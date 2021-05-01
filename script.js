let myArray = [
    "rock",
    "paper",
    "scissors"
  ];
  
  var snd = new Audio("tink.wav"); // buffers automatically when created
 // snd.play();
  
  let humancount = 0;
  let compcount = 0;
  let round1LC = "";
  let roundNum = 1;
  
  //entire function for running the game
  function Battle(round1LC)
  {
  let random1 = myArray[Math.floor(Math.random() * myArray.length)];
  
  if(random1 === 'rock')
  {playSoundC1();}
  if(random1 === 'paper')
  {playSoundC2();}
  if(random1 === 'scissors')
  {playSoundC3();}
  
  
  //Determining winner and giving value to each phase
  if (random1 == round1LC)
  {
  roundNum++;
  }
  else if (random1 == "rock" && round1LC == "paper")
  {
     humancount++;
    
  }
  else if (random1 == "paper" && round1LC == "scissors")
  {
    humancount++;
    
  }
  else if (random1 == "scissors" && round1LC == "rock")
  {
    humancount++;
   
  }
  else if (random1 == "rock" && round1LC == "scissors")
  {
    compcount++;
    
  }
  else if (random1 == "paper" && round1LC == "rock")
  {
    compcount++;
    
  }
  else if (random1 == "scissors" && round1LC == "paper")
  {
    compcount++;
   
  }
  console.log(humancount)
  console.log(compcount)
  
  
  
  //need to put game end conditions here as well as a visual log for current game score
  
  if (humancount === 5)
  {
      alert('You got 5 wins, you won!');
      humancount = 0;
      compcount = 0
  }
  
  if (compcount === 5)
  {
      alert('You lost. The oppenent got 5 wins');
      humancount = 0;
      compcount = 0
  }
  
  document.getElementById("humanCount").innerHTML = humancount || 0;
  document.getElementById("compCount").innerHTML = compcount || 0;
  
  }
  
  
  //functions to select and set player choice
  function Rock()
  {   round1LC = 'rock';
      console.log(round1LC);
      Battle('rock');
      playSoundR();
      snd.play();
      return ('rock')
  } 
  function Paper()
  {
      round1LC ='paper';
  
      console.log('hello 2');
      Battle('paper');
      playSoundP();
      snd.play();
  return round1LC = 'paper';
  
  }
  function Scissors()
  {
  round1LC = 'scissors';  
  console.log('hello 3');
  Battle('scissors');
  playSoundS();
  snd.play();
  return round1LC = 'scissors';
  
  }
  //animation for the buttons
  const buttonss = Array.from(document.querySelectorAll('.buttonh'));
  const buttonsC = Array.from(document.querySelectorAll('.buttonC')); 
  
  function playSoundC1(e) {
      const buttonC1 = document.querySelector(`div[data-key="CRock"]`);
      buttonC1.classList.add('playing2');
     setTimeout (timerC1,600);
     
    }
    function timerC1()
    {
      const buttonC1 = document.querySelector(`div[data-key="CRock"]`);
      buttonC1.classList.remove('playing2');
    }
    function playSoundC2(e) {
      const buttonC2 = document.querySelector(`div[data-key="CPaper"]`);
      buttonC2.classList.add('playing2');
     setTimeout (timerC2,600);
     
    }
    function timerC2()
    {
      const buttonC2 = document.querySelector(`div[data-key="CPaper"]`);
      buttonC2.classList.remove('playing2');
    }
    function playSoundC3(e) {
      const buttonC3 = document.querySelector(`div[data-key="CScissors"]`);
      buttonC3.classList.add('playing2');
     setTimeout (timerC3,600);
     
    }
    function timerC3()
    {
      const buttonC3 = document.querySelector(`div[data-key="CScissors"]`);
      buttonC3.classList.remove('playing2');
    }
    function playSoundR(e) {
      const buttonR = document.querySelector(`div[data-key="Rock"]`);
      buttonR.classList.add('playing');
     setTimeout (timerR,600);
 
     
    }
    function timerR()
    {
      const buttonR = document.querySelector(`div[data-key="Rock"]`);
      buttonR.classList.remove('playing');
      
    }
    function playSoundP(e) {
      const buttonP = document.querySelector(`div[data-key="Paper"]`);
      buttonP.classList.add('playing');
     setTimeout (timerP,600);
     
    }
    function timerP()
    {
      const buttonP = document.querySelector(`div[data-key="Paper"]`);
      buttonP.classList.remove('playing');
    }
    function playSoundS(e) {
      const buttonS = document.querySelector(`div[data-key="Scissors"]`);
      buttonS.classList.add('playing');
     setTimeout (timerS,600);
     
    }
    function timerS()
    {
      const buttonS = document.querySelector(`div[data-key="Scissors"]`);
      buttonS.classList.remove('playing');
    }
  
    function sound1(src) {
        this.sound = document.createElement("audio");
        this.sound.src = src;
        this.sound.setAttribute("preload", "auto");
        this.sound.setAttribute("controls", "none");
        this.sound.style.display = "none";
        document.body.appendChild(this.sound);
        this.play = function(){
          this.sound.play();
        }
        this.stop = function(){
          this.sound.pause();
        }
      }