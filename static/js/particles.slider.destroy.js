
var destroy = function (){
	window.pJSDom[0].pJS.fn.vendors.destroypJS();
	console.log("window.pJSDom[0].pJS.fn.vendors.destroypJS();");
}



var reload = function(){

	var num_nb = 10;
	var width = $(document).width();
	if (width > 1000) {
		num_nb = Math.round(Math.sqrt(width * 0.2));
	} else {
		num_nb = 10;
	}

	console.log("reload;");


	// reference: https://github.com/VincentGarreau/particles.js/issues/30


	window.pJSDom = [];
	window.particlesJS(

		"particles-js-slider", {
		"particles": {
			"number": {
				"value": num_nb,
				"density": {
					"enable": false,
					"value_area": 1000
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
					"speed": 0.05,
					"opacity_min": 0.01,
					"sync": false
				}
			},
			"size": {
				"value": 70,
				"random": false,
				"anim": {
					"enable": true,
					"speed": 10,
					"size_min": 30,
					"sync": false
				}
			},
			"line_linked": {
				"enable": true,
				"distance": 200,
				"color": "#E1F5A9",
				"opacity": 0.2,
				"width": 1.5
			},
			"move": {
				"enable": true,
				"speed": 2.5,
				"direction": "right",
				"random": false,
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
				
			}
		},
		"retina_detect": true
	}

	);

}

reload();


var prev_width = $(document).width();

window.addEventListener('resize', function () { // use ".addEventListener", not ".onresize"
	console.log("window.addEventListener;");
	var curr_width = $(document).width();
	if (curr_width < 1000 && prev_width < 1000){
	}
	else{
		destroy();
		reload();
	}
	prev_width = curr_width;
}, true);

