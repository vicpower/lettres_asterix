//I guess I feel a little lost in how to use the command line functions to have the code spell out the words for me 
//I made it be able to reproduce a given string but I have to manually enter each letter 
//hope to continue working on this this week, after some clarifications in class
//designing this was fun though and I reall just want to get better!! 
//I know it took me way to many hours just to figure this out...mais voila

var a = [" ^ " , " * ", "* *"];

var b = ["* >", " * ", "* >"];

var c = [" **", "*  ", " **"];

var d = ["*  ", "* >", "*  "];

var e = ["***", "** ", "***"];

var f = ["***", "** ", "*  "];

var g = ["***", "* >", "** "];

var h = ["* *", "***", "* *"];

var i = [" * ", " * ", " * "];

var jiim = ["***", " * ", "** "];

var k = ["* *", "*< ", "* *"];

var l = ["*  ", "*  ", "***"];

var m = ["***", "***", "* *"];

var n = ["< *", "***", "* <"];

var o = ["***", "* *", "***"];

var p = ["***", "***", "*  "];

var q = ["***", "* *", "**<"];

var r = ["**>", "***", "* *"];

var s = [" **", "<* ", "**>"];

var t = ["***", " * ", " * "];

var u = ["* *", "* *", "***"];

var v = ["* *", "* *", " * "];

var w = ["* *", "***", "***"];

var x = ["*  *", " >< ", "*  *"];

var y = ["* *", " * ", " * "];

var z = ["***", " < ", "***"];

var space = [" . ", " . ", " . "];

var em_spacer = ["  ", "  ", "  "];

var big_space = ["							", "							","							"];
 

for (var j=0; j<3; j++) {

	var starry_alphabet = a[j] + space[j] + b[j] + space[j] + c[j] + space[j] + d[j] + space[j] + e[j] + space[j] + g[j] + space[j] + h[j] + space[j] + i[j] + space[j] + jiim[j] + space[j] + k[j] + space[j] + l[j] + space[j] + m[j] + space[j] + n[j] + space[j] + o[j] + space[j] + p[j] + space[j] + q[j] + space[j] + r[j] + space[j] + s[j] + space[j] + t[j] + space[j] + u[j] + space[j] + v[j] + space[j] + w[j] + space[j] + x[j] + space[j] + y[j] + space[j] + z[j];
	console.log(starry_alphabet);

}


for (var jo=0; jo<3; jo++) {

    var you_did_it = big_space[jo] + y[jo] + em_spacer[jo] + o[jo] + em_spacer[jo] + u[jo] + space[jo] + d[jo] + em_spacer[jo] + i[jo] + em_spacer[jo] + d[jo] + space[jo] + i[jo] + em_spacer[jo] + t[jo];

   // setTimeout(function(){
	console.log(you_did_it);
   // }, 2500);
}
//I want to assemble all of my variables into a separate array of letters so that when called they can create the text in desired font
//var letters = [a, b, c, d, e, f, g, h, i, jiim, k, l, m, n, o, p, q, r, s, t, u, v, x, z];

// for (var rock=0; rock <24; rock++){

  // setTimeout(function(){
 // console.log(letters);
 // }, 2000);    

//}; 
//for now this one list all of the the individual arrays at after a 2 second delay, not what I want (one by one)





//console.log(letters);

//also set up a for loop that can automatically add the spacing to the letters WAAAh NO WORKING
//letters.forEach(function, value){
//	var single_letter = space[j]+ value + space[j];
//	console.log(single_letter);
//}
