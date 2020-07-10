
//we have to handle clicks on all anchor tags
var interval;
var TopLinks = $(".nav-menu a");
console.log(TopLinks);
for(var i =0; i< TopLinks.length; i++){
    TopLinks[i].addEventListener('click', function(event){
        //preventing the default way
        event.preventDefault(); 
        //trimming it to avoid spaces if present
        var tohit = this.textContent.trim();
        console.log(tohit);
        var targetSection=document.getElementById(tohit);


        interval = setInterval(scrollVertically,20,targetSection);
    });
}
        function scrollVertically(targetSection) {
            var targetSectionCoordinates = targetSection.getBoundingClientRect();
            console.log(targetSectionCoordinates.top);
            if (targetSectionCoordinates.top <=70){
                clearInterval(interval);
                console.log(targetSectionCoordinates.top);
                return;
            }
            window.scrollBy(0, 50);
        }
        
//auto fill section
var progress = document.querySelectorAll('.skill-progress > div');;
var skillsection = document.getElementById('skill-section');
window.addEventListener('scroll', checkScroll);
var autofill_animation = false; 

function initial_bars(){
    for(var bar of progress){
        bar.style.width = 0 + '%';
    }
}
//so here all bars in skill will be colorless beacuse we want it to fill
initial_bars();
function fill_bars(){

    for(let bar of progress){
        let targetwidth = bar.getAttribute('data-bar-width');
        let currentWidth = 0;
        //to increase width at every interval
        var interval = setInterval(function(){
            if(currentWidth>targetwidth){

                clearInterval(interval);
                return;
            }
            currentWidth++;
            bar.style.width = currentWidth + '%';


        },5);

    }

}
function checkScroll(){
    // to find if we reach skill seaction
    var cordinates = skillsection.getBoundingClientRect();
    if(!autofill_animation && cordinates.top < window.innerHeight){
        //ise autofill bar bar nhi chalega
        autofill_animation = true;
        //so here we have to fill animation
        fill_bars();
        console.log('r we reached');
    }else if(cordinates.top> window.innerHeight){
        autofill_animation = false;
        initial_bars();
    }

}