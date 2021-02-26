onload = function startAnimation() { 

    // ANIMATION
    
    var frameHeight = **frameHeight**; 
    var frames = **nbFrames**+1; 
    var frame = 0; 
    var interval_ms = 100;
    var div = document.getElementById("div_animation");
    var playpause = document.getElementById("playpause");
    var slider = document.getElementById("slider");
    var output = document.getElementById("demo");
    playpause.onclick = playAnimation;
    
    function playAnimation() {
        // play
        if (playpause.innerHTML == "play") {
            playpause.innerHTML = "pause";
            setIntervalId = setInterval(function () { 
                frame = slider.value;
                i = ++frame
                var frameOffset = (i % frames) * -frameHeight; 
                div.style.backgroundPosition = "0px " + frameOffset + "px";
                slider.value = i % frames;
                output.innerHTML = i % frames;
            }, interval_ms);
        // pause
        } else {
            playpause.innerHTML = "play";
            clearInterval(setIntervalId);
        }
    }
    
    // SLIDER
    
    output.innerHTML = slider.value; // Display the default slider value
    // each time you drag the slider handle
    slider.oninput = function() {
        // Update the current slider value
        output.innerHTML = this.value;
        // Update the current image
        div.style.backgroundPosition = "0px " + (this.value * -frameHeight) + "px"; 
    } 
} 