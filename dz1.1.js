function GAME (){
const numOfQuest=10;
  for(i=0;i<numOfQuest;i++){
    fRandom();
  }
  calcPoints();
}

function fRandom () {
  let diap={
    x:{
      min:0,
      max:10
    },
    y:{
      min:0,
      max:10
    }
  }
  let randomX,randomY,randAryfm;
  randomX=randomInteger(diap.x.min,diap.x.max);
  randomY=randomInteger(diap.y.min,diap.y.max);
  randAryfm=randomInteger(0,4);
  fRandAryfm(randomX,randomY,randAryfm);

}

function fRandAryfm(randomX,randomY,randAryfm){
  
  let rightAnswer,userAnswer,randomAryfm;
  
  switch (randAryfm){
    case 0:
      randomAryfm="+";
      rightAnswer=(randomX+randomY);
      userAnswer=promt(`Питання № ${1}/${numOfQuest}:Порахуйте ${randomX} ${randomAryfm} ${randomY}`);
      fAnswer(userAnswer,rightAnswer);
    break;
  case 1:
    randomAryfm="-";
    rightAnswer=(randomX-randomY);
    userAnswer=promt(`Питання № ${1}/${numOfQuest}:Порахуйте ${randomX} ${randomAryfm} ${randomY}`);
    fAnswer(userAnswer,rightAnswer);
    break;
  case 2:
    randomAryfm="*";
    rightAnswer=(randomX*randomY);
    userAnswer=promt(`Питання № ${1}/${numOfQuest}:Порахуйте ${randomX} ${randomAryfm} ${randomY}`);
    fAnswer(userAnswer,rightAnswer);
    break;
  case 3:
    randomAryfm="/";
    rightAnswer=(randomX/randomY);
    userAnswer=promt(`Питання № ${1}/${numOfQuest}:Порахуйте ${randomX} ${randomAryfm} ${randomY}`);
    fAnswer(userAnswer,rightAnswer);
    break;

  }
}

function fAnswer(userAnswer,rightAnswer,numOfQuest){
    let userRightAnswers=0,userNumOfQuest=0,userNeo;   
        if(userAnswer===rightAnswer){
          userRightAnswers++;
          userNumOfQuest++;
          alert(`Правильно ${randomX} ${randomAryfm} ${randomY} = ${userAnswer} `);
        }else if(userAnswer>rightAnswer||userAnswer<rightAnswer){
          userNumOfQuest++;
          alert(`Неправильно ${randomX} ${randomAryfm} ${randomY} = ${userAnswer} `);
        }else if(userAnswer==null){
          userNeo=confirm(`Вам залишилось відповісти ще на ${numOfQuest} питань. Якщо ви перервете тест зараз, результат не буде враховано. Ви дійсно хочете зупинитися?`);
          if(userNeo==true){
            break;
          }
          // else{
          //   calcPoints();
          // }
        }
      
}




function calcPoints(userNumOfQuest,userRightAnswers){
  let resPoints =(userRightAnswers/userNumOfQuest)*100;
    if(80<=resPoints){
      alert(`Ваша оцінка 5 ви відповіли на ${resPoints}% питань правильно.`)
    }else if(60<=resPoints&&resPoints<80){
      alert(`Ваша оцінка 4 ви відповіли на ${resPoints}% питань правильно.`)
    }else if(40<=resPoints&&resPoints<60){
      alert(`Ваша оцінка 3 ви відповіли на ${resPoints}% питань правильно.`)
    }else if(20<=resPoints&&resPoints<40){
      alert(`Ваша оцінка 2 ви відповіли на ${resPoints}% питань правильно.`)
    }else if(0<=resPoints&&resPoints<20){
      alert(`Ваша оцінка 1 ви відповіли на ${resPoints}% питань правильно.`)
    }
}
