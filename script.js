const answers = document.querySelectorAll(".toggle-panel");
const plusIcons = document.querySelectorAll(".plus-icon");


for (let i = 0; i < plusIcons.length; i++) {
  plusIcons[i].addEventListener('click', function () {
  

    if(answers[i].classList.contains('hidden')) {
          answers[i].classList.remove('hidden');
    plusIcons[i].src = "/assets/images/icon-minus.svg";
    } else {
          answers[i].classList.add('hidden');
            plusIcons[i].src = "/assets/images/icon-plus.svg";
    }


  });
}


