var start=function(){

    const playScrn=document.getElementById("start-screen");

    const playBtn=document.getElementById("btn1");
    const htpBtn=document.getElementById("btn2");

    let funnyAudio = new Audio('./assets/funnysound.mp3');
    

    playScrn.addEventListener('click',function(event){
        if(event.target.nodeName === 'BUTTON'){
            if(event.target.classList.contains("fadeStartScreenOut")){ //if theres a button click, and the button should be changing the screen:
                playScrn.classList.add('fadeOut');
                setTimeout(function(){
                playScrn.style.display="none"; //leave the start screen
                playScrn.classList.remove("fadeOut");
                event.target.id==="btn1" ? play(): howToPlay(); //go to button function according to the click
                },1500);

        }}else{ // if there's a click on the screen itself
            funnyAudio.currentTime=2;
            funnyAudio.play();
            console.log("Played audio")//play funny sound
        }
    })

}
    
var play=function(){
    //actual game
    const idName="rockimg";
    let idNum=1;
    let playScrn=document.getElementById("play");
    let rockArr=[];
    for(i=1;i<6;i++){
        rockArr.push(document.createElement("img"))
        rockArr[i-1].src=`./assets/therock/rock${i}.jpg`; //insert customer images as elements to the array

    }
    let intro=new Audio('./assets/chinaintro.mp3');
    intro.play();//play funny music

    let playerImg=document.getElementById("playerrock"); //get the user's image
    playScrn.style.display="grid"; //display the play screen (as a grid)
    let currentCustomers=[]; 
    currentCustomers.push(newCustomer());//push a new customer into the current customers array
    
    /* 
    Game loop ideas:
    Buttons:
        {
            Serve Order
            Dump Order
            (optional- Take Order- if used, orders will not show next to customers as they wait. could be difficulty-related)
            Menu items- broccoli, soy sauce, noodles, rice, chicken, beef, shrimp, sesame seeds.
            Exit
            Pause
        }
    immidiate customer is the first one in the array- so when his order is completed, just shift to remove first array element.
    when customer's order is satisfied, player gets points according to the time it took him to make the order (maybe).
    if the player did not make the correct order, he can throw it away. if he tries to serve it to the customer, the customer will get more impatient instantly.
    if player finishes order, current customer will disappear and next customers will get closer and close the gap.
    customers will randomly join the line as time passes, but there must at least be 2 at a time.
    maybe set a score needed, or number of customers per wave/level, or maybe not- just save highest score to scoreboard
    maybe make each order button that you press make a sound?
    have a "current order" info while making an order, to keep track of mistakes and to know when to dump/server order
    under each image, there will be the customer's order- {howmanytimes}x {menuitem} (Ex: 3x RICE 1x BROCCOLI etc)
    as customers wait, their timer runs and (with a bit of random values) they get more impatient. this will show in the css stuff as changing their color.
    once a customer has reached max impatience, the yooo sound will play, and all the images will be replaced with wok.jpg.
    if the player has failed, after the wok appears, the game changes to a different game- maybe space racing or something
    Liron's idea- Make a song (with one instrument) or a melody/solo and play a different part/note of it every time a button is clicked, so it's playing in order and the bpm is defined by how fast the user is clicking.
    */
  
    function newCustomer(){ //function clones one of the rockArr img elements, adds it to play screen and returns it
        randImgNum=Math.floor(Math.random()*5);
        //console.log(`%c ${randImgNum}`,"color:green;" )
        newCus=rockArr[randImgNum].cloneNode(true);
        newCus.id=idName+toString(idNum); //define a new id for it. maybe save the id somewhere? leaving it for now
        idNum++;
        playScrn.appendChild(newCus);
        return newCus;
    }

    }

var howToPlay=function(){
    const htpScrn=document.getElementById("htpscreen");
    htpScrn.style.display="grid";
    const backBtn=document.getElementById("backbtn");
    backBtn.addEventListener('click',()=>{
        htpScrn.style.display="none";
        document.getElementById("start-screen").style.display="block"; //when back button is clicked, switch from how to play screen to start screen
    });

}

start();