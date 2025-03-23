// Business Logic Tier - logic related to the presentation tier




function verifyInput(){
	var countmana = document.getElementById('countmana').value;
	var counthalfmana = document.getElementById('counthalfmana').value;
	var countfries = document.getElementById('countfries').value;
	var countcola = document.getElementById('countcola').value;
	var countzero = document.getElementById('countzero').value;
	var countwater = document.getElementById('countwater').value;
	var countsoda = document.getElementById('countsoda').value;
	var countgrapes = document.getElementById('countgrapes').value;




	
	
	var totalprice = ((countmana*20) + (counthalfmana*15) + (countfries*15) + (countcola*10) + (countzero*10)
	+ (countwater*10)+ (countsoda*10)+ (countgrapes*10));
	

	

	var firstname = document.getElementById('fname').value;
	var lastName = document.getElementById('Lname').value;
	var street = document.getElementById('street').value;
	var city = document.getElementById('city').value;
	var apartment = document.getElementById('apartment').value;
	var floor = document.getElementById('floor').value;
    var phone=  document.getElementById('phone').value;
	var alertMsg = "";


	if(trim(phone).length != 10) {
        console.log(phone);
		alertMsg = alertMsg + "אנא הכנס מספר פלאפון תקין בעל 10 ספרות\n";
	}
	if((trim(firstname) == '') || (trim(lastName) == '')) {
		alertMsg = alertMsg + "אנא הכנס שם פרטי\n";
	}
	if(trim(street) == '') {
		alertMsg = alertMsg + "אנא הכנס שם רחוב\n";
	}
	if(trim(city) == '') {
		alertMsg = alertMsg + "אנא הכנס שם עיר\n";
	}
	if(trim(apartment) == '') {
		alertMsg = alertMsg + "אנא הכנס מספר בית\n";
	}
	if(trim(floor) == '') {
		alertMsg = alertMsg + "אנא הכנס מספר קומה\n";
	}
	if(alertMsg != '') {
		alert (alertMsg);
	}
	if(totalprice == 0){
		alert('אנא בחר מוצר\n');

	}
	else if(alertMsg==''){
		stopTimer();//stop the timer and return the time to make order
		placeOrder();//increase count order from localstorage
		document.getElementById('ordersuccess').innerHTML='!ההזמנה בוצעה בהצלחה';
		document.getElementById('totalpriceprint').innerHTML='₪' + totalprice + '  :סה"כ לתשלום' ;

		processInfo(phone,firstname, lastName, street, city,
			apartment, floor,totalprice);

		resetpage();

	}
}

function resetpage(){
	setTimeout(() => {
		location.reload();
	  }, 10000);
}

// remove spaces before and after str
function trim (str){
    return str.replace (/^\s+|\s+$/g, '');
}

// change pic 
function pictureChange() {
	var picChange = document.getElementById('picChange').innerHTML;
	if(picChange == 'picture1') {
		document.getElementById('picmove').src = "pic2.jpg";
		document.getElementById('picChange').innerHTML = 'picture2';
	
	}
	else if(picChange == 'picture2') {
		document.getElementById('picmove').src = "pic3.jpg";
		document.getElementById('picChange').innerHTML = 'picture3';

	}
	else if(picChange == 'picture3') {
		document.getElementById('picmove').src = "pic4.jpg";
		document.getElementById('picChange').innerHTML = 'picture4';
	}
	else if(picChange == 'picture4') {
		document.getElementById('picmove').src = "pic1.jpg";
		document.getElementById('picChange').innerHTML = 'picture1';

	}
}




  function validatelogin() {
	var pwd = document.getElementById("pwd");
	var username = document.getElementById("username");
	
	if(pwd.value !=207504952 || username.value!='Yovel'){
		document.getElementById("loginmsg").innerHTML = "Try Again";
		document.getElementById("loginform").reset();
		return
		}

	if(pwd.value ==207504952 && username.value=='Yovel'){
		document.getElementById("loginform").style.display='none';
		document.getElementById("loginmsg").innerHTML = "Login Succesful!" + "  Number of orders until now:" + localStorage.getItem('orderCount') ;

		
	}
	return
	}
	

	


//disable refresh when admin login
document.querySelector('form').addEventListener('submit', function(event) { 
	event.preventDefault(); // Prevents the form from submitting and the page from reloading 
	// Your custom logic here 
  });






var OrderCounter = (function() {
	var instance;
	var orderCount = parseInt(localStorage.getItem('orderCount')) || 0;

	function createInstance() {
		return {
			incrementOrderCount: function() {
				orderCount++;
				localStorage.setItem('orderCount', orderCount.toString());
			

			},
			getOrderCount: function() {
				return orderCount;
			}
		};
	}

	return {
		getInstance: function() {
			if (!instance) {
				instance = createInstance();
			}
			return instance;
		}
	};
})();

function placeOrder() {
	var counter = OrderCounter.getInstance();
	counter.incrementOrderCount();
}




var timerInterval;
        var startTime; // Declare startTime in the global scope
        var durationInSeconds = 0; // Timer will start immediately
        var displayElement = document.getElementById("timer-display");

        function startTimer(display) {
            startTime = Date.now(); // Assign the current time to startTime
            timerInterval = setInterval(function () {
                var currentTime = Date.now();
                var elapsedTime = Math.floor((currentTime - startTime) / 1000);

                var minutes = Math.floor(elapsedTime / 60);
                var seconds = elapsedTime % 60;

                var formattedTime = (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
                display.textContent = formattedTime;
            }, 1000);
        }
        function stopTimer() {

            clearInterval(timerInterval); // stop the timer
            var currentTime = Date.now();
            var elapsedTime = Math.floor((currentTime - startTime) / 1000);

            var minutes = Math.floor(elapsedTime / 60);
            var seconds = elapsedTime % 60;

            var formattedTime = (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
			document.getElementById('totaltimeprint').innerHTML=  'לקח לך ' + formattedTime +  ' זמן להחליט מה באלך לאכול' ;			

        }

        startTimer(durationInSeconds, displayElement);
		

