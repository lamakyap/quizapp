var questions =[
	{
		question: "who is your first childhood name? ",
		answer: "rinchen"
	},
	{
		question: "who is the best soccer player of the world? ",
		answer: "lionel messi"
	},
	{
		question: "what is 2 + 2 is equal to? ",
		answer: "4"
	},
	{
		question: "who is the first person to landed on the moon? ",
		answer: "lance armstrong"
	},
	{
		question: "who is founder of the facebook? ",
		answer: "mark zukerberg"
	},
	{
		question: "who is Co-Founder of apple? ",
		answer: "steve job"
	},
	{
		question: "who invented the pasta? ",
		answer: "marco polo"
	},
	{
		question: "who is the legend of rasta? ",
		answer: "bob marley"
	},
	{
		question: "which planet is nearest to the sun? ",
		answer: "mars"
	},
	{
		question: "how many planets in our solar system? ",
		answer: "9"
	},


]

for(i = 0; i < questions.length; i++) {
	q = questions[i].question
	document.getElementById('question' + [i]).textContent = q
}

function testResult() {
	var correct = 0;
	var incorrect = 0;
	for(i = 0; i < questions.length; i++) {
		var answer = questions[i].answer
		var guess = document.getElementById('answer' + [i]).value
		var questionSpot = document.getElementById('question' + [i])
		if(answer == guess) {
			questionSpot.className = 'correct'
			correct++

		}else {
			questionSpot.className = 'incorrect'
			incorrect++
		}
	}
	document.getElementById('correct').textContent = correct
	document.getElementById('incorrect').textContent = incorrect



}



