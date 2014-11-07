function wordvalue(string)
{
	var letters = string.split(/\s+/).join("").toLowerCase();
    
    var totalWordValue = 0;
    var totalValue = 0;
    
    for (i=0; i < letters.length; i++){
        
        var characterCode = letters.charCodeAt(i);
        
        if(characterCode > 96 && characterCode < 123){
            var value = characterCode - 96;
            totalWordValue = totalWordValue + value;
        }
        
        if(characterCode > 48 && characterCode < 58){
            var value = characterCode - 48;
            totalValue = totalValue + value;
        }
    }
    
    var results = [];
    
    if (totalWordValue > 0){
        var reducedWordValue = totalWordValue;
        do {
            reducedWordValue = eval(reducedWordValue.toString().replace(/(\d)(?=\d)/g, '$1+'))
        }
        while (reducedWordValue > 9);

        results.push({title: "Word value = " + totalWordValue, icon: "at.obdev.LaunchBar:InfoTemplate"});
        results.push({title: "Reduced word value = " + reducedWordValue, icon: "at.obdev.LaunchBar:InfoTemplate"});
    }
    
    if(totalValue > 0){
        var reducedValue = totalValue;
        do {
            reducedValue = eval(reducedValue.toString().replace(/(\d)(?=\d)/g, '$1+'))
        }
        while (reducedValue > 9);

        results.push({title: "Digit sum = " + totalValue, icon: "at.obdev.LaunchBar:InfoTemplate"});
        results.push({title: "Reduced digit sum = " + reducedValue, icon: "at.obdev.LaunchBar:InfoTemplate"});
    }
    
    if(totalWordValue > 0 && totalValue > 0){
        var reducedTotalValue = totalValue + totalWordValue;
        do {
            reducedTotalValue = eval(reducedTotalValue.toString().replace(/(\d)(?=\d)/g, '$1+'))
        }
        while (reducedTotalValue > 9);

        results.push({title: "Word value (including digits) = " + parseInt(totalWordValue + totalValue), icon: "at.obdev.LaunchBar:InfoTemplate"});
        results.push({title: "Reduced word value (including digits) = " + reducedTotalValue, icon: "at.obdev.LaunchBar:InfoTemplate"});
    }

    return results;
}