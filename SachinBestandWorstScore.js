var seriesScores=[10,5,20,20,4,5,2,25,1];
var highestScore=seriesScores[0], lowestScore=seriesScores[0];
var highestScoreCount=0, lowestScoreCount=0;


for (var i = 1; i <seriesScores.length; i++) {

if(highestScore==0&&lowestScore==0){
highestScore=seriesScores[i];
lowestScore=seriesScores[i];
}
else{


	if(highestScore<seriesScores[i]){
       
	highestScore=seriesScores[i];
	highestScoreCount++;
	
	}
	else if(lowestScore>seriesScores[i]){
        
        if(seriesScores[i]>0){
lowestScore=seriesScores[i];
 	lowestScoreCount++;
        }
	
 	
	}
}
	
}


