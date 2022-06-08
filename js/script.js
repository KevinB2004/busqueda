
var users = [
	{
		name: 'Lucy',
		gender: 'F',
		hobby: 'Pets',
		avatar: 'avatar.png'
	},
	{
		name: 'Marcos',
		gender: 'M',
		hobby: 'Sports',
		avatar: 'avatar.png'
	},
	{
		name: 'Nicole',
		gender: 'F',
		hobby: 'Music',
		avatar: 'avatar.png'
	},
	{
		name: 'Astrid',
		gender: 'F',
		hobby: 'Pets',
		avatar: 'avatar.png'
	},
	{
		name: 'Estuardo',
		gender: 'M',
		hobby: 'Read',
		avatar: 'avatar.png'
	},
	{
		name: 'Ronal',
		gender: 'M',
		hobby: 'Pets',
		avatar: 'avatar.png'
	},
	{
		name: 'Angie',
		gender: 'F',
		hobby: 'Pets',
		avatar: 'avatar.png'
	},
		{
		name: 'Lucas',
		gender: 'M',
		hobby: 'Music',
		avatar: 'avatar.png'
	},
		{
		name: 'Andrea',
		gender: 'F',
		hobby: 'Sports',
		avatar: 'avatar.png'
	},
		{
		name: 'Rafael',
		gender: 'M',
		hobby: 'Sports',
		avatar: 'avatar.png'
	}
];

window.addEventListener('load', function(){

	function search(){

		//GET HOBBY
		var hobbyField = document.getElementById('hobby');
		var hobby = hobbyField.value;

		// GET GENDER
		var genderfield = document.getElementById('gender');
		var selected = genderfield.selectedIndex;
		var gender = genderfield.options[selected].value;
		console.log(gender);

		var resultsHTML = '';
		var numUsers = users.length;

		for (var i = 0; i < numUsers ; i++){

			if (gender == 'A' || gender == users[i].gender){

				if (hobby == '' || hobby == users[i].hobby){

					resultsHTML += '<div class="person-row">\
									<img src="img/' + users[i].avatar + '">\
									<div class="person-ingo">\
										<div>'+ users[i].name +'</div>\
										<div>' + users[i].hobby +'</div></div>\
									<button>Add as friend</button></div>';

				}
			}
		}
		// console.log(results)
		// console.log(resultsHTML);
		results.innerHTML = resultsHTML;
	};

	var results = document.getElementById('results');
	var searchBtn = document.getElementById('searchBtn');
	searchBtn.addEventListener('click', search);
	search();
});