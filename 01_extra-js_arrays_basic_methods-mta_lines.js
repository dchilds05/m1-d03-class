const nLine = [
    "Times Square", 
    "34th", 
    "28th", 
    "23rd", 
    "Union Square",
    "8th"
];

const lLine = [
    "8th", 
    "6th", 
    "Union Square", 
    "3rd", 
    "1st"
];

const sixLine = [
    "Grand Central", 
    "33rd", 
    "28th", 
    "23rd", 
    "Union Square", 
    "Astor Place"
];

let planTrip = function(startLine, startPlace, endLine, endPlace){
    //Convert string entry into one of the array values
    switch (startLine){
        case "N": 
            startLine = nLine;
            break;
        case "L": 
            startLine = lLine;
            break;
        case "six": 
            startLine = sixLine;
            break;
        default: return console.log("I don't recognise the station.");
    }
    switch (endLine){
        case "N": 
            endLine = nLine;
            break;
        case "L": 
            endLine = lLine;
            break;
        case "six": 
            endLine = sixLine;
            break;
        default: return console.log("I don't recognise the station.");
    }
     
    let firstLineStops = [];
    let startInd = startLine.indexOf(startPlace);
    //let endInd = endLine.indexOf(endPlace);

    if(startInd < startLine.indexOf("Union Square") && startLine.includes(endPlace) === false){
        for (let i = startInd; startLine.indexOf(i) < startLine.indexOf("Union Square"); i++){
            firstLineStops.push(startLine[i]);
        }
    }
    console.log(firstLineStops);
}

planTrip("N", "Times Square", "six", "33rd");