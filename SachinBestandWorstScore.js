var seriesScores=[10,5,20,20,4,5,2,25,1];
var highestScore=seriesScores[0], lowestScore=seriesScores[0];
var mostRecordRuns=0, leastRecordRuns=0;


for (var i = 1; i <seriesScores.length; i++) {


	if(highestScore<seriesScores[i]){
       
	highestScore=seriesScores[i];
	mostRecordRuns++;
	
	}
	else if(lowestScore>seriesScores[i]){
        
	lowestScore=seriesScores[i];
 	leastRecordRuns++;
        	
	}

}
console.log(mostRecordRuns+" "+leastRecordRuns);

