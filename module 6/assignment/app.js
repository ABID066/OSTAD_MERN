const hamburger_icon = document.querySelector('#nav-bar .nav-bar .nav-list .hamburger');
const nav_list = document.querySelector('#nav-bar .nav-bar .nav-list');

hamburger_icon.addEventListener('click', () => {
	nav_list.classList.toggle('open');
	hamburger_icon.classList.toggle('active');
});


  
function checkAge() {
	const ageInput = document.getElementById("ageInput");
	const age = parseInt(ageInput.value);

	const resultCardTitle = document.getElementById("resultCard").querySelector(".card-title");
	const resultCardText = document.getElementById("resultCard").querySelector(".card-text");

	if (!isNaN(age)) {
		resultCard.style.display = 'block';
		
		if (age >= 18) {
		resultCardTitle.textContent = "Welcome, You are an Adult!";
		resultCardText.textContent = "You have access to all features.";
		} else {
		resultCardTitle.textContent = "Hi there, Child!";
		resultCardText.textContent = "Some features may be restricted.";
		}}
	else
	{
		resultCard.style.display = 'none';
	}
}
