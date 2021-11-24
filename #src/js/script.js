// $(window).on('load', function() {

// })

jQuery(document).ready(function () {
   //----Format Webp---------
   function testWebP(callback) {
      let webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src =
         'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
   }
   testWebP(function (support) {
      if (support == true) {
         document.querySelector('body').classList.add('webp');
      }
   });

   // const dateSpan = document.querySelector('#date');
   let dateSpan = $('#date')
   const monthsAll = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

   const date = new Date();
   let day = date.getDate();
   let year = date.getFullYear();
   let months = date.getMonth();

   monthsAll.map((m, i) => (months === i) ? months = m : null)

   const today = `${months} ${day}, ${year}`

   // dateSpan.innerHTML = today;
   dateSpan.html(today);

   const body = $('.survey__body');

   data = {
      email: '',
      question_1: '',
      question_2: '',
   }

   const step_1 = `
   <form action="" class="survey-form">
      <div class="survey-form__wrapper">
         <label for="radio1" class='survey-form__label'>
            <input type="radio" name="radio1" id="radio1">
            <span>Daily1</span>
         </label>
         <label for="radio2" class='survey-form__label'>
            <input type="radio" name="radio1" id="radio2">
            <span>Daily2</span>
         </label>
         <label for="radio3" class='survey-form__label'>
            <input type="radio" name="radio1" id="radio3">
            <span>Daily3</span>
         </label>
         <label for="radio4" class='survey-form__label'>
            <input type="radio" name="radio1" id="radio4">
            <span>Daily4</span>
         </label>
         <label for="radio5" class='survey-form__label'>
            <input type="radio" name="radio1" id="radio5">
            <span>Daily5</span>
         </label>
         <label for="radio6" class='survey-form__label'>
            <input type="radio" name="radio1" id="radio6">
            <span>Daily6</span>
         </label>
      </div>
      <button class="survey-form" id='surveyButton'>Next</button>
   </form>
   `

   const step_2 = `
   <form action="" class="survey-form">
      <div class="survey-form__wrapper">
         <label for="radio1" class='survey-form__label'>
            <input type="radio" name="radio1" id="radio1">
            <span>Daily7</span>
         </label>
         <label for="radio2" class='survey-form__label'>
            <input type="radio" name="radio1" id="radio2">
            <span>Daily8</span>
         </label>
         <label for="radio3" class='survey-form__label'>
            <input type="radio" name="radio1" id="radio3">
            <span>Daily9</span>
         </label>
         <label for="radio4" class='survey-form__label'>
            <input type="radio" name="radio1" id="radio4">
            <span>Daily10</span>
         </label>
         <label for="radio5" class='survey-form__label'>
            <input type="radio" name="radio1" id="radio5">
            <span>Daily11</span>
         </label>
         <label for="radio6" class='survey-form__label'>
            <input type="radio" name="radio1" id="radio6">
            <span>Daily12</span>
         </label>
      </div>
      <button class="survey-form" id='surveyButton'>Next</button>
   </form>
`

   const step_3 = ` <h1>Step 3</h1> `

   function checkedRadio(step, key, class1, class2) {
      $.each($('input[type="radio"]'), function () {
         if ($(this).is(':checked')) {
            data[`${key}`] = $(this).next().text()
            body.html(step);
            body.removeClass(`${class1}`).addClass(`${class2}`)
         }
      })
   }

   function changeStep() {
      if (body.is('.previewStep')) {
         data.email = $('input[name="email"]').val();

         if (data.email.length !== 0) {
            body.html(step_1);
            body.removeClass('previewStep').addClass('firstStep')
         }
      } else if (body.is('.firstStep')) {
         checkedRadio(step_2, 'question_1', 'firstStep', 'secondStep')
      } else if (body.is('.secondStep')) {
         checkedRadio(step_3, 'question_2', 'secondStep', 'thirdStep')
      }
   }

   body.on('click', 'button', function (e) {
      e.preventDefault();
      changeStep()
      console.log(data);
   })
});
