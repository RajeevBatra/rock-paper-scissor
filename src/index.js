var pScore = 0;
var cScore = 0;

for (let i = 0; i < document.querySelectorAll("button").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    var pInput = this.innerHTML;

    const cOptions = ["Rock","Paper","Scissor"];
    const cInput = cOptions.[Math.floor(Math.random() * 3)];
    
    // console.log(cInput);
    // console.log(pInput);

    compareInputs(pInput,cInput);
    updateScore();
    if(checkWinner()){
      pScore = cScore = 0;
      updateScore();
    }
    
  });
}

function compareInputs(pInput,cInput){
  const currentMatch = `${pInput} vs ${cInput}`;

  if (pInput === cInput) {
    alert(`${currentMatch} is a tie`);
    return;
  }

  if (pInput === "Rock") {
    if (cInput === "Scissor") {
      alert(`${currentMatch} = You Win`);
      pScore++;
    }else{
      alert(`${currentMatch} = Computer Wins`);
      cScore++;
    }
  }

  else if (pInput === "Scissor") {
    if (cInput === "Paper") {
      alert(`${currentMatch} = You Win`);
      pScore++;
    } else {
      alert(`${currentMatch} = Computer Wins`);
      cScore++;
    }
  }

  else if (pInput === "Paper") {
    if (cInput === "Rock") {
      alert(`${currentMatch} = You Win`);
      pScore++;
    } else {
      alert(`${currentMatch} = Computer Win`);
      cScore++;
    }
  }

}

function updateScore(){
  document.getElementById("p-score").innerText = pScore;
  document.getElementById("c-score").innerText = cScore;
}

function checkWinner(){
  if (pScore === 5 || cScore === 5) {
    const winner =
    pScore === 5
    ? "You Win The Game! congo"
    : "Computer Wins! Try Again";
    alert(winner);
    return true;
  }
  return false;
}