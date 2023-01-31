//your code here
let evaluatedText=document.getElementById("evaluatedText");
let wordCount=document.getElementById("wordCount");

evaluatedText.addEventListener("input",calculateWord)

	function calculateWord() {
		let word = evaluatedText.value;
		wordCount.innerHTML = word.split(" ").length;;
	}