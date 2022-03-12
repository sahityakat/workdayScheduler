const dt = new Date();
document.getElementById("currentDay").innerHTML = dt.toDateString();
var eventP;
var saveA;
var saveDiv;

window.addEventListener('load', (event) => {
    console.log('page is fully loaded'+dt.getHours());
    
    var hourArr = [9,10,11,12,13,14,15,16,17];

    for(i=0;i<hourArr.length;i++) {

        storageItemVar = localStorage.getItem(hourArr[i]);

        var presentHour;
        console.log("hourArr[i]"+hourArr[i]);
        if(hourArr[i] > 12) {
            presentHour = hourArr[i] - 12;
        } else {
            presentHour = hourArr[i];
        }
        var amorpm = (presentHour >= 9 && presentHour < 12) ? 'AM' : 'PM';
        var test = presentHour + ' ' + amorpm;
 
        //Create main div
        var mainDiv = document.createElement("div");
        mainDiv.className = "row";

        //Create div for hour
        var hourDiv = document.createElement('div');
        hourDiv.textContent = test;
        hourDiv.className = "hourDiv col-1";
        mainDiv.appendChild(hourDiv);

        //Create div for event
        var eventDiv = document.createElement("div");
        eventDiv.className = "eventDiv col-9";
    
        eventP = document.createElement("textarea");
        eventP.style.width = "100%";
        eventP.style.height = "100%";
        eventP.id = "hour"+hourArr[i];
        if(storageItemVar != null) {
            eventP.value = storageItemVar;
        }

       
        if(dt.getHours() == hourArr[i]) {
            eventDiv.style = "background-color: #ff6961";
        } else if(dt.getHours() < hourArr[i]) {
            eventDiv.style = "background-color: #77dd77";
        } 
        
        eventDiv.appendChild(eventP);
        mainDiv.appendChild(eventDiv);

        //Create div for save
        saveDiv = document.createElement("div");
        saveDiv.className = "btn btn-info btn-lg";
        saveA = document.createElement("button");
        saveA.className = "btn btn-light";
        saveA.innerHTML = "<i class='fa-solid fa-floppy-disk'></i>";
        saveA.setAttribute("id",hourArr[i]);

        saveDiv.appendChild(saveA);
        mainDiv.appendChild(saveDiv);

        document.getElementById("schedDiv").appendChild(mainDiv);
        something(hourArr[i]);
    }

  });

   function something(idVar) {
        saveA.addEventListener("click",function(){
           var someVar = document.getElementById("hour"+idVar).value;
            localStorage.setItem(idVar,someVar);
       })
   }
