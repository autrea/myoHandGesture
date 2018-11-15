// check to see that Myo is connected
Myo.connect()


// run function when hand gesture is detected
Myo.on('fist', function(){  
        console.log('Fist!');
        this.vibrate();
        gestureFist();
});

Myo.on('fingers_spread', function(){  
        console.log('Fingers Spread!');
        this.vibrate();
        gestureSpread();
});

Myo.on('wave_in', function(){  
        console.log('Wave In!');
        this.vibrate();
        gestureWaveIn();
});

Myo.on('wave_out', function(){  
        console.log('Wave Out!');
        this.vibrate();
        gestureWaveAway();
});


// test morph without Myo
document.addEventListener('keypress', function (e) {
        var key = e.which || e.keyCode;
        if (key === 122) {
                gestureSpread();
        } else if (key === 120) {
                gestureWaveAway();
        } else if (key === 99) {
                gestureFist();
        } else if (key === 118) {
                gestureWaveIn();
        } 
        console.log(key);
});


// functions to morphSVG using CustomeEase
function gestureSpread() {
        TweenMax.to("#limp", 1, {
                ease: CustomEase.create("custom", "M0,0 C0.29,0 0.363,-0.025 0.436,0.058 0.498,0.13 0.5,0.336 0.5,0.5 0.5,0.7 0.507,0.827 0.58,0.914 0.652,1 0.704,1 1,1"),
                morphSVG:{ shape:"#spread", shapeIndex: 19}
        });
}

function gestureWaveAway() {
        TweenMax.to("#limp", 1, {
                ease: CustomEase.create("custom", "M0,0 C0.29,0 0.363,-0.025 0.436,0.058 0.498,0.13 0.5,0.336 0.5,0.5 0.5,0.7 0.507,0.827 0.58,0.914 0.652,1 0.704,1 1,1"),
                morphSVG:{ shape:"#waveAway", shapeIndex: 20}
        });
}

function gestureFist() {
        TweenMax.to("#limp", 1, {
                ease: CustomEase.create("custom", "M0,0 C0.29,0 0.363,-0.025 0.436,0.058 0.498,0.13 0.5,0.336 0.5,0.5 0.5,0.7 0.507,0.827 0.58,0.914 0.652,1 0.704,1 1,1"),
                morphSVG:{ shape:"#fist", shapeIndex: 40}
        });
}

function gestureWaveIn() {
        TweenMax.to("#limp", 1, {
                ease: CustomEase.create("custom", "M0,0 C0.29,0 0.363,-0.025 0.436,0.058 0.498,0.13 0.5,0.336 0.5,0.5 0.5,0.7 0.507,0.827 0.58,0.914 0.652,1 0.704,1 1,1"),
                morphSVG:{ shape:"#waveIn", shapeIndex: 19}
        });
}