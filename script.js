//your code here
let evaluatedText=document.getElementById("evaluatedText");
let wordCount=document.getElementById("wordCount");

evaluatedText.addEventListener("input",calculateWord)

	function calculateWord() {
		let word = evaluatedText.value.trim();
		if (word!=""){
			wordCount.innerHTML = word.split(" ").length;;
		}
		else{
			wordCount.innerHTML = "0";
		}
	}