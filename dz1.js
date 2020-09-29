function GAME (){

  for(i=0;i>11;i++){
    let questions=0,sumPoints;
    switch(i){
      case 0:
        MAIN();
        questions++;
        sumPoints+=yourPoints;
      case 1:
        MAIN();
        questions++;
        sumQuest+=yourPoints;
      case 2:
        MAIN();
        questions++;
        sumQuest+=yourPoints;
      case 3:
        MAIN();
        questions++;
        sumQuest+=yourPoints;
      case 4:
        MAIN();
        questions++;
        sumQuest+=yourPoints;
      case 5:
        MAIN();
        questions++;
        sumQuest+=yourPoints;
      case 6:
        MAIN();
        questions++;
        sumQuest+=yourPoints;
      case 7:
        MAIN();
        questions++;
        sumQuest+=yourPoints;
      case 8:
        MAIN();
        questions++;
        sumQuest+=yourPoints;
      case 9:
        MAIN();
        questions++;
        sumQuest+=yourPoints;
      case 10:
        calcPoints(); 

    }
  }
}

function MAIN () {
 
  let x,y;

    for(i=0; i>3;i++){
      
      switch (i){
        case 0:
          x=Math.floor(Math.random() * 1000);
        case 1:
          y=Math.floor(Math.random() * 1000);
        case 2:
          let randAryfm=Math.floor(Math.random() * Math.floor(4));
        case 3:
          fRandAryfm(x,y,randAryfm);
      }
    }  
}

function fRandAryfm(randAryfm){
  
  let z,a;
  
  switch (randAryfm){
    case 0:
      z=(x+y);
      a=promt("Порахуйте ${x} + ${y}",0);
      wile(a,z);
    break;
  case 1:
      z=(x-y);
      a=promt("Порахуйте ${x} - ${y}",0);
      wile(a,z);
    break;
  case 2:
      z=(x*y);
      a=promt("Порахуйте ${x} * ${y}",0);
      wile(a,z);
    break;
  case 3:
      z=(x/y);
      a=promt("Порахуйте ${x} / ${y}",0);
      wile(a,z);
    break;

  }
}

function wile(a,z){
  
  while(a!==z){
    let tries=-1;
      if(tries==4){
        tries=3;
      }
        tries++;
   
        if(z===a){
          alert("Правильно");
        }else if(z>a){
          alert("Подумай краще, відповідь більша");
        }else if(z<a){
          alert("Подумай краще, відповідь менша");
        }else {
          let choise=confirm("Ви точно хочете завершити?");
            if(choise == true){
              calcPoints();
              alert("Завершено");
              break;
            }else{
              wile();
            }
        }
  }
}
function points(tries){
  let yourPoints;
    switch(tries){
    case 0:
      yourPoints=1;
    case 1:
      yourPoints=0,75;
    case 2:
      yourPoints=0,5;
    case 3:
      yourPoints=0,25;
    case 4:
      yourPoints=0;
  }
}
function calcPoints(sumPoints,questions){
  let resPoints =(questions/sumPoints)*100;
    if(80<=resPoints){
      alert("Ваша оцінка 5 ви відповіли на ${resPoints}% питань правильно.")
    }else if(60<=resPoints<80){
      alert("Ваша оцінка 4 ви відповіли на ${resPoints}% питань правильно.")
    }else if(40<=resPoints<60){
      alert("Ваша оцінка 3 ви відповіли на ${resPoints}% питань правильно.")
    }else if(20<=resPoints<40){
      alert("Ваша оцінка 2 ви відповіли на ${resPoints}% питань правильно.")
    }else if(0<=resPoints<20){
      alert("Ваша оцінка 1 ви відповіли на ${resPoints}% питань правильно.")
    }
}
GAME();

