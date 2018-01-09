/* global console */
var person = "0";
function week4() {
	"use strict";
	var names = ["Yaakov", "John", "Jen", "Jason", "pual", "Frank", "Larry", "Puala", "Laura", "Jim", "jery"];

	for (var i =0; i < names.length; i++) {
	if((names[i][0]=="J")){
											person =("GOODBYR " + names[i]);
	}else{
											person=("HELLO " + names[i]);
	}
		console.log(person);
}
	}
week4()


