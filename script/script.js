$(document).ready(function () {
    if ($(".bobble").width() < 600 || $(".bobble").height() < 600) {
        let interval = setInterval(minusBobbleSize, 200);
        function minusBobbleSize() {
            if ($(".bobble").width() > 20 || $(".bobble").height() > 20) {
                $(".bobble").animate({ width: "-=5", height: "-=5" }, 100);
            }
        }
        $('body').keyup(function (e) {
            if ($(".bobble").width() >= 600 || $(".bobble").height() >= 600) {
                $('body').keyup(function (e) {
                    clearInterval(interval);
                    if (e.keyCode == 32) {
                        // user has pressed space
                        $(".bobble").animate({ width: 0, height: 0 }, 10);
                        startConfetti();
                    }
                });
            } else {
                if (e.keyCode == 32) {
                    // user has pressed space
                    $(".text-how-start").css("display", "none");
                    $(".bobble").animate({ width: "+=10", height: "+=10" }, 100);
                }
            }
        });

    }
});
function startConfetti() {
    var duration = 2000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 10, spread: 500, ticks: 300, zIndex: 0 };

    function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function () {
        var timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            return clearInterval(interval);
        }

        var particleCount = 50 * (timeLeft / duration);
        // since particles fall down, start a bit higher than random
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
        confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
    resetGame();
}
function resetGame() {
    setInterval(reset, 7000);
    function reset() {
        window.location.reload();
    }
}