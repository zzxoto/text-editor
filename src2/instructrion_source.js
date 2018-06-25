

var $ta = $("textarea");

$(function(){

	$ta.focus();
	$ta.keydown(function(e){
	  var lineIndex = caret.getCaretPosition()[0];
	  var letterIndex = caret.getCaretPosition()[1];

	  /**
	  *TODO: FootprintToken
	  */
	  switch(e.key){
	    case "Enter":
	    	strucChange.enter(lineIndex, letterIndex);
	    break;
	    case "Backspace":
	    	strucChange.backsSpace(lineIndex, letterIndex);
	    break;  
	    case "ArrowUp":
	    case "ArrowLeft":
	    case "ArrowDown":
	    case "ArrowRight":
	    	caretChange.arrow(e.key);
	    break;
	    default:
	    	if (e.key.length === 1) {//alpha-numerics-symbols
	      	strucChange.character(lineIndex, letterIndex, e.key);
	    	}	
	  }
	  
	  $ta.val("");
	});

 	$("#editor").click(function(){
 		$ta.focus(); 
	 	var clickX = e.clientX - $(this).offset().left;
	  var clickY = e.clientY - $(this).offset().top;
	  var lineIndex = Math.floor(clickY / globals.line_height);
	  var letterIndex = Math.round(clickX / globals.letter_width);
	  caretChange.mouseClick(lineIndex, letterIndex);
 	})

}); 
