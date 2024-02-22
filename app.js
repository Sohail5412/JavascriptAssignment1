
/* Variables
-------------------------------------------------- */

// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak

//declaring variable for button 1
var speakButton1 = document.querySelector('.button1');

//declaring and assigning array for Noun button
var textToSpeakNoun = ['The turkey','Mom','Dad','The dog','My teacher','The elephant','The cat'];

//declaring variable for button 2
var speakButton2 = document.querySelector('.button2');

//declaring and assigning array for Verb button
var textToSpeakVerb = ['sat on','ate','danced with','saw','doesn\'t like','kissed'];

//declaring variable for button 3
var speakButton3 = document.querySelector('.button3');

//declaring and assigning array for Adjective button
var textToSpeakAdjective = ['a funny','a scary','a goofy','a slimy','a barking','a fat'];

//declaring variable for button 4
var speakButton4 = document.querySelector('.button4');

//declaring and assigning array for Noun2 button
var textToSpeakNoun2 = ['goat','monkey','fish','cow','frog','bug','worm'];

//declaring variable for button 5
var speakButton5 = document.querySelector('.button5');

//declaring and assigning array for the settings button 
var textToSpeakSettings = ['on the moom','on the chair','in my spaghetti','in my soup','on the grass','in my shoes'];

//declaring variable for read the story button
var speakButton6 = document.querySelector('.button6');

//declaring variable for random story button
var speakButton7 = document.querySelector('.button7');

var speakbuttona = document.querySelector('.buttona')
var speakbuttonb= document.querySelector('.buttonb')
var speakbuttonc = document.querySelector('.buttonc');


//declaring the sentence array for the Read the story button 
 var sentence =new Array(); 
 
 //text.textContent(sentence);

 var text = document.querySelector('p');

 


/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}


//this function takes an randon string from an array
function randomValueFromArray(array){
	return array[Math.floor(Math.random()*array.length)];
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton1.onclick = function() {
	//storing a random string from textToSpeakNoun array to value1 variable
	 var value1 = randomValueFromArray(textToSpeakNoun);
	 
	speakNow(value1);	
	
	 sentence[0] =  value1;    //storing value to sentence array
	 displayValueOnPage(value1)
		
}
speakbuttona.onclick = function(){
	var value = 'the turkey'
	speakNow(value);
}
speakbuttonb.onclick = function(){
	var mom = 'mom'
	speakNow(mom);
}
// For button c
var speakbuttonc = document.querySelector('.buttonc');
speakbuttonc.onclick = function () {
    var dad = 'dad';
    speakNow(dad);
};

// For button d
var speakbuttond = document.querySelector('.buttond');
speakbuttond.onclick = function () {
    var dog = 'the dog';
    speakNow(dog);
};

// For button e
var speakbuttone = document.querySelector('.buttone');
speakbuttone.onclick = function () {
    var teacher = 'my teacher';
    speakNow(teacher);
};

// For button f
var speakbuttonf = document.querySelector('.buttonf');
speakbuttonf.onclick = function () {
    var  elephent = 'the elephent';
    speakNow(elephent);
};

// For button g
var speakbuttong = document.querySelector('.buttong');
speakbuttong.onclick = function () {
    var cat = 'the cat';
    speakNow(cat);
};

// For button h
var speakbuttonh = document.querySelector('.buttonh');
speakbuttonh.onclick = function () {
    var sat = 'sat on';
    speakNow(sat);
};

// For button i
var speakbuttoni = document.querySelector('.buttoni');
speakbuttoni.onclick = function () {
    var ate = 'ate';
    speakNow(ate);
};

// For button j
var speakbuttonj = document.querySelector('.buttonj');
speakbuttonj.onclick = function () {
    var dancedwith  = 'danced with ';
    speakNow(dancedwith);
};

// For button k
var speakbuttonk = document.querySelector('.buttonk');
speakbuttonk.onclick = function () {
    var saw = 'saw';
    speakNow(saw);
};

// For button l
var speakbuttonl = document.querySelector('.buttonl');
speakbuttonl.onclick = function () {
    var dontlike = 'doesn\'t like';
    speakNow(dontlike);
};

// For button m
var speakbuttonm = document.querySelector('.buttonm');
speakbuttonm.onclick = function () {
    var kissed = 'kissed';
    speakNow(kissed);
};

// For button n
var speakbuttonn = document.querySelector('.buttonn');
speakbuttonn.onclick = function () {
	var funny 
	= 'a funny ';
    speakNow(funny);
};

// For button o
var speakbuttono = document.querySelector('.buttono');
speakbuttono.onclick = function () {
    var scary
	= 'a scary ';
    speakNow(scary);
};

// For button p
var speakbuttonp = document.querySelector('.buttonp');
speakbuttonp.onclick = function () {
    var goofy
	= 'a goofy ';
    speakNow(goofy);
};

// For button q
var speakbuttonq = document.querySelector('.buttonq');
speakbuttonq.onclick = function () {
	var aslimy
	= 'a slimy';
    speakNow(aslimy);
};

// For button r
var speakbuttonr = document.querySelector('.buttonr');
speakbuttonr.onclick = function () {
    var barking = 'a barking';
    speakNow(barking);
};

// For button s
var speakbuttons = document.querySelector('.buttons');
speakbuttons.onclick = function () {
    var fat
	= 'a fat';
    speakNow(fat);
};

// For button t
var speakbuttont = document.querySelector('.buttont');
speakbuttont.onclick = function () {
    var goat = 'goat';
    speakNow(goat);
};

// For button u
var speakbuttonu = document.querySelector('.buttonu');
speakbuttonu.onclick = function () {
    var monkey = 'monkey';
    speakNow(monkey);
};

// For button v
var speakbuttonv = document.querySelector('.buttonv');
speakbuttonv.onclick = function () {
    var fish = 'fish';
    speakNow(fish);
};

// For button w
var speakbuttonw = document.querySelector('.buttonw');
speakbuttonw.onclick = function () {
    var cow = 'cow';
    speakNow(cow);
};

// For button x
var speakbuttonx = document.querySelector('.buttonx');
speakbuttonx.onclick = function () {
    var frog = 'frog';
    speakNow(frog);
};

// For button y
var speakbuttony = document.querySelector('.buttony');
speakbuttony.onclick = function () {
    var bug = 'bug';
    speakNow(bug);
};

// For button z
var speakbuttonz = document.querySelector('.buttonz');
speakbuttonz.onclick = function () {
    var worm = 'worm';
    speakNow(worm);
};
var speakbuttonaa = document.querySelector('.buttonaa');
speakbuttonaa.onclick = function () {
    var moon = 'on the moon';
    speakNow(moon);
};
var speakbuttonbb = document.querySelector('.buttonbb');
speakbuttonbb.onclick = function () {
    var chair = 'on the chair';
    speakNow(chair);
};var speakbuttoncc = document.querySelector('.buttoncc');
speakbuttoncc.onclick = function () {
    var spg = 'on my spaghetti ';
    speakNow(spg);
};var speakbuttondd = document.querySelector('.buttondd');
speakbuttondd.onclick = function () {
    var sop = 'on my soup ';
    speakNow(sop);
};var speakbuttonee = document.querySelector('.buttonee');
speakbuttonee.onclick = function () {
    var gras = 'on the grass ';
    speakNow(gras);
};
var speakbuttonff = document.querySelector('.buttonff');
speakbuttonff.onclick = function () {
    var shoes = 'in my shoes ';
    speakNow(shoes);
};
speakButton2.onclick = function() {
	//storing a random string from textToSpeakVerb array to value2 variable
	var value2 = randomValueFromArray(textToSpeakVerb);   
	speakNow(value2);
	
	 sentence[1] = value2;    //storing value to sentence array
	 displayValueOnPage(value2)
}

speakButton3.onclick = function() {

	//storing a random string from textToSpeakAdjective array to value3 variable
	value3 = randomValueFromArray(textToSpeakAdjective);
	speakNow(value3);
	
    sentence[2] = value3;     //storing value to sentence array
	displayValueOnPage(value3)
 }

speakButton4.onclick = function() {
	//storing a random string from textToSpeakNoun2 array to value4 variable
    var value4 = randomValueFromArray(textToSpeakNoun2);
	speakNow(value4);

	 sentence[3] = (value4);    //storing value to sentence array
	 displayValueOnPage(value4)
}

speakButton5.onclick = function() {
	//storing a random string from textToSpeakSettings array to value5 variable
	var value5 = randomValueFromArray(textToSpeakSettings);
	
	speakNow(value5);
	 //dispalying to console
	 sentence[4] = value5;   //storing value to sentence array
	 displayValueOnPage(value5)
}

speakButton6.onclick = function() {
	speakNow(sentence);   
	displayValueOnPage(sentence)

	sentence = [];        //emptying the sentence array}
}

//declaring random sentance array
var randomSentence = new Array();

speakButton7.onclick = function() {

	//adding randon value from the texttoSpeak array to randomSentence array
randomSentence[0] = randomValueFromArray(textToSpeakNoun);
randomSentence[1] = randomValueFromArray(textToSpeakVerb);
randomSentence[2] = randomValueFromArray(textToSpeakAdjective);
randomSentence[3] = randomValueFromArray(textToSpeakNoun2);
randomSentence[4] = randomValueFromArray(textToSpeakSettings);
displayValueOnPage(randomSentence)

	speakNow(randomSentence);
	}
	
  randomSentence = [];     //emptying randomSentence array

  function displayValueOnPage(value) {
    // Get the container element (replace 'containerId' with the actual ID of your container)
    var container = document.getElementById('displayValue');

    // Remove existing child elements (clear old values)
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Create a paragraph element
    var paragraph = document.createElement('p');

    // Set the content of the paragraph to the value
    paragraph.textContent = value;

    // Append the paragraph to the container element
    container.appendChild(paragraph);
}
