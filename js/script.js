/**
 * @author Vinit Shahdeo <vinitshahdeo@gmail.com>
 */
(function ($) {
    "use strict";
      $('.sakura-falling').sakura();
})(jQuery);

/**
 *
 * Despite so many new Bollywood and English song options, I prefered to use two-decade-old song, Din Shagna Da!
 *
 * Ever attended a North Indian Wedding? As soon as the DJ plays Din Shagna Da song, it means that the much-awaited moment is here
 * and the bride is all set to put her first foot forward to the wedding venue under a breathtaking phoolon ki chaadar.
 * Let's keep the sky-high status of this song untouched!
 *
 * When the website is backed up with a soul-stirring track, the feeling becomes absolutely surreal. 
 * Choose a heart-touching track! 🎵 ❤️
 *
 * Listen here: https://youtu.be/X0MDALpV29s
 *
 */
$(document).on('click', function(){
    document.getElementById("my_audio").play();
    console.log('Shaadi me zaroor aana');
});

// Set the date we're counting down to
// Set the date we're counting down to
var countDownDate = new Date("Feb 09, 2025 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    var now = new Date().getTime();
    
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes, and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="time"
    document.getElementById("time").innerHTML = `
        <div class='container'>
            <div class='days block'>${days}<br>Days</div>
            <div class='hours block'>${hours}<br>Hours</div>
            <div class='minutes block'>${minutes}<br>Minutes</div>
            <div class='seconds block'>${seconds}<br>Seconds</div>
        </div>`;
    
    // If the countdown is over, display a message
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "Bless the married couple for a happy life!";
    }
}, 1000);

// Cool console logs for added effect
console.log('%cSAVE THE DATE: 9th Feb, 2025!', 'background: linear-gradient(#D33106, #571402); border: 4px solid #3E0E02; color: white; text-align: center; font-weight: bold; font-size: 32px; line-height: 40px;');
console.log('%cYour presence is requested!', 'color: #FF6C37; text-shadow: 0 2px 0 rgba(0, 0, 0, 1); font-size: 32px; font-weight: bold;');
console.log('%cShaadi me zaroor aana!', 'color: yellow; background: tomato; font-size: 24pt; font-weight: bold;');


// being a bit cool :p  
var styles = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 4px solid #3E0E02'
    , 'color: white'
    , 'display: flex'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37'
    , 'display: flex'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal'
    , 'display: flex'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

console.log('\n\n%c SAVE THE DATE: 29th Nov, 2020!', styles);

console.log('%cYour presence is requested!%c\n\nRegards: Vinit Shahdeo', styles1, styles2);

console.log(
    `%cShaadi me zaroor aana!\n\n`,
    'color: yellow; background:tomato; font-size: 24pt; font-weight: bold',
)
