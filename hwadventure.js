//HW Create a "choose your own adventure" story

/*
Have the user make choices and then have each outcome run through conditional statements and 
fire off a couple of functions. For example:

var hero = 'Warrior';
if(hero === 'Mage') { console.log('Hello, powerful ' + hero); }
else if (hero === 'Warrior') { console.log('Hello, great ' + hero); }
else { console.log('You did not choose!'); }

/*
var hero = 'Warrior';
if(hero === 'Mage') 
{console.log('Hello, powerful ' + hero); }

else if (hero === 'Warrior') 
{console.log('Hello, great ' + hero);}
else 
{ console.log('You did not choose!'); }

//or

var hero = 'Mage';
if(hero === 'Mage') 
{console.log('Hello, powerful ' + hero); }

else if (hero === 'Warrior') 
{console.log('Hello, great ' + hero);}
else 
{ console.log('You did not choose!'); }
*/

//TRAVEL TO NATIONAL PARKS. IMAGINE A CONVERSATION ABOUT HIKING 
//ASK THE PERSON IF THEY HAVE TRAVELED & HIKED THE NATONAL PARKS BEFORE
var travelHikeParks = 'No' //IF ANSWER IS YES, NO, OR NOT INTERESTED
if (travelHikeParks === 'Yes') 
    {console.log('Which National Park have you traveled to and hiked? My first experience traveling to National Parks was in 2016 on a week long toured trip with Golda Meir school. In preparation for the trip, myself, teachers and students we trained by hiking on park trails such as Kettle Moraine');}   //WHEN ANSWER IS YES

else if (travelHikeParks === 'No')    //WHEN ANSWER IS NO
    {console.log('These are the National Parks I have traveled to and hiked. They are, Zion Canyon, Bryce Canyon, Antelope Canyon, and The Grand Canyon. If you ever have the chance to go to these places, I suggest really embracing the experience whether you are hiking alone or hiking with a group. When hiking, it is best to prepare by having practice hikes, and drinking water. Water is very important, and if you DO NOT consume enough water, you will get sick. Drink Water! Water! Water! When determining water consumption, it is best to drink .5(1/2) liter of water per 1 hour of hiking');}
    else  //WHEN ANSWER IS NOT INTERESTED
    {console.log('Not Interested? If you ever have a later interest in the National Parks, I have traveling video series on Youtube that you can check out');}

//FUNCTION FOR WATER/HIKE
    function waterConsumption(liter, hiketimehours)
    {  
        var totalWaterConsumption = liter * hiketimehours;
        console.log(totalWaterConsumption + '' + ' liter of water');
    
    }
    waterConsumption(.5, 1); //HALF LITER PER EVERY 1 HOUR OF HIKETIME

    