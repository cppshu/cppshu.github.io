


// reference: https://github.com/VincentGarreau/particles.js/issues/30

var width = $(document).width();
if (width > 768) {
    num_nb = Math.round(Math.sqrt(width * 0.3));
} else {
    num_nb = Math.round(Math.sqrt(width * 0.13));
}
console.log(num_nb);

   particlesJS(

   "particles-js-slider", {
        "particles": {
            "number": {
                "value": num_nb,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": "#FBF8EF"
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 6
                },
            },
            "opacity": {
                "value": 0.1,
                "random": false,
                "anim": {
                    "enable": true,
                    "speed": 0.1,
                    "opacity_min": 0.01,
                    "sync": false
                }
            },
            "size": {
                "value": 70,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 30,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 250,
                "color": "#E1F5A9",
                "opacity": 0.1,
                "width": 1
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "right",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": true,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "",
            "events": {
                "onhover": {
                    "enable": false,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": false,
                    "mode": "push"
                },
                "resize": false
            },
            "modes": {
                "grab": {
                    "distance": 100,
                    "line_linked": {
                        "opacity": 0.3
                    }
                },

            }
        },
        "retina_detect": true
    }
	
	);
