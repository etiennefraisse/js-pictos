////////////////////////////////////////////////////////////////////////////////////////
//   Remplace tous les "o" dans les élement de classe "o" par une icone aléatoire     //
////////////////////////////////////////////////////////////////////////////////////////

const icons_codes = [
1, /*ampoule*/
2, /* boom*/
3, /* étoile*/
4, /* gribouille*/
5 /* boule à facettes*/
];

	
const random = function(){return Math.floor(Math.random() * icons_codes.length);	};
$('.o').each(function() {
	var thetext = $(this).html();
	thetext.match(/o/gi).forEach(function(){
		//thetext = thetext.replace(/o/i,'<i class="ican">'+icons_codes[random()]+'</i>');
		thetext = thetext.replace(/o/i,'<img class="underlined" src="svg/test-0'+icons_codes[random()]+'.svg" />');
	});
	$(this).html(thetext);
});
$('.o-cloche').each(function() {
	var thetext = $(this).html();
	thetext = thetext.replace(/o/i,'<img class="underlined" src="svg/test-05.svg" />');
	$(this).html(thetext);
});
$('.o-cal').each(function() {
	var thetext = $(this).html();
	thetext = thetext.replace(/o/i,'<img class="underlined" src="svg/test-03.svg" />');
	$(this).html(thetext);
});
