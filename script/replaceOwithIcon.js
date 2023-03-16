////////////////////////////////////////////////////////////////////////////////////////
//   Remplace tous les "o" dans les élement de classe "o" par une icone aléatoire     //
////////////////////////////////////////////////////////////////////////////////////////

const icons_codes = [
'&#xe800;',
'&#xe801;',
'&#xe802;',
'&#xe803;',
'&#xe804;', /*cloche*/
'&#xe805;',
'&#xe806;',
'&#xe807;',
'&#xe808;',
'&#xe809;', /*calendrier*/
'&#xf17d;',
'&#xf1b8;',
'&#xf323;'
];		
const random = function(){return Math.floor(Math.random() * icons_codes.length);	};
$('.o').each(function() {
	var thetext = $(this).html();
	thetext.match(/o/gi).forEach(function(){
		thetext = thetext.replace(/o/i,'<i class="ican">'+icons_codes[random()]+'</i>');
	});
	$(this).html(thetext);
});
$('.o-cloche').each(function() {
	var thetext = $(this).html();
	thetext = thetext.replace(/o/i,'<i class="ican">&#xe804;</i>');
	$(this).html(thetext);
});
$('.o-cal').each(function() {
	var thetext = $(this).html();
	thetext = thetext.replace(/o/i,'<i class="ican">&#xe809;</i>');
	$(this).html(thetext);
});