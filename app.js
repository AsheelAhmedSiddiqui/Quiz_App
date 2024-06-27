const quiz = [
	{
		question: "1) What is the capital of France?",
		a: "Paris",
		b: "London",
		c: "Berlin",
		d: "Rome",
		correct: "a",
	},
	{
		question: "2) What is the capital of Germany?",
		a: "Berlin",
		b: "Munich",
		c: "Hamburg",
		d: "Frankfurt",
		correct: "a",
	},
	{
		question: "3) What is the capital of India?",
		a: "Mumbai",
		b: "Dehli",
		c: "Bareli",
		d: "Multan",
		correct: "b",
	},
	{
		question: "4) What is the capital of England?",
		a: "New York",
		b: "Texas",
		c: "London",
		d: "Manchester",
		correct: "c",
	},
	{
		question: "5)What is the capital of USA?",
		a: "Texas",
		b: "New York",
		c: "Austin",
		d: "San Jose",
		correct: "b",
	},
	{
		question: "6) What is the capital of Iran?",
		a: "Qods",
		b: "Tehran",
		c: "Malard",
		d: "Marand",
		correct: "b",
	},
	{
		question: "7) What is the capital of Afghanistan?",
		a: "Kabdahar",
		b: "Taleqan",
		c: "Ghazni",
		d: "Kabul",
		correct: "d",
	},
	{
		question: "8) What is the capital of Pakistan?",
		a: "Karachi",
		b: "Islamabad",
		c: "Lahore",
		d: "Quetta",
		correct: "b",
	},
	{
		question: "9) What is the capital of Turkey?",
		a: "Istanbol",
		b: "Munich",
		c: "Ankara",
		d: "Bursa",
		correct: "c",
	},
];

// question.innerText = quiz[0].question;
// opiton1.innerText = quiz[0].option1;
// opiton2.innerText = quiz[0].option2;
// opiton3.innerText = quiz[0].option3;
// opiton4.innerText = quiz[0].option4;

// next.addEventListener("click", () => {
//   count++;
//   question.innerText = quiz[count].question;
//   opiton1.innerText = quiz[count].option1;
//   opiton2.innerText = quiz[count].option2;
//   opiton3.innerText = quiz[count].option3;
//   option4.innerText = quiz[count].option4;
// });

let count = 0;
const questionDisplay = document.getElementById("question");
const optionsInput = document.querySelectorAll(".options");
const button = document.getElementById("button");
let total = quiz.length;
let right = 0,
	wrong = 0;
// for display next question
const showNextQuestion = () => {
	if (count === total) {
		return endQuiz();
	} else if (count == total - 1) {
		button.innerText = "Submit";
	} else {
		reset();
	}
	const obj = quiz[count];
	questionDisplay.innerText = obj.question;
	optionsInput[0].nextElementSibling.innerText = obj.a;
	optionsInput[1].nextElementSibling.innerText = obj.b;
	optionsInput[2].nextElementSibling.innerText = obj.c;
	optionsInput[3].nextElementSibling.innerText = obj.d;
};

// for next question and increment right or wrong question
button.addEventListener("click", () => {
	const obj = quiz[count];
	const ans = getAnswer();
	if (ans == obj.correct) {
		right++;
	} else {
		wrong++;
	}
	count++;
	showNextQuestion();
	return;
});

// get the quiz answer by user
const getAnswer = () => {
	let answer;
	optionsInput.forEach((input) => {
		if (input.checked) {
			answer = input.value;
		}
	});
	return answer;
};

// input checked value again reset or clear
const reset = () => {
	optionsInput.forEach((input) => {
		input.checked = false;
	});
};

// For show result of quiz
const endQuiz = () => {
	if (right > 4) {
		Swal.fire({
			title: `You got ${Math.round((right / total) * 100)}%`,
			text: `🥳 Congratulations you gain full marks ${right} out of ${total}`,
			icon: "success",
		});
		setInterval(() => {
			location.reload();
		}, 5000);
	} else {
		Swal.fire({
			title: `You got ${Math.round((right / total) * 100)}%`,
			text: `😟 Sorry you gain ${right} out of ${total}`,
			icon: "error",
		});
		setInterval(() => {
			location.reload();
		}, 5000);
	}
};

// inital Question
showNextQuestion();
