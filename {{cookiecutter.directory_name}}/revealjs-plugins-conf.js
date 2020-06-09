menu: {
    side: 'left',
    width: 'wide',
    themes: false,
    numbers: true, // Add slide numbers to the titles in the slide list.
	titleSelector: 'h1, h2, div.title, caption.title, #toctitle', // Specifies which slide elements will be used for generating the slide titles in the menu. 
	transitions: true, // Specifies if the transitions menu panel will be shown.
	openButton: true, // Adds a menu button to the slides to open the menu panel.
	openSlideNumber: false, // If 'true' allows the slide number in the presentation to open the menu panel
	loadIcons: true, // By default the menu will load it's own font-awesome library icons
    sticky: true, // If 'true', the sticky option will leave the menu open until it is explicitly closed
    custom: [ { title: 'Keys', icon: '<i class="fa fa-keyboard">', content: `
		<ul class="slide-menu-items">
		<li class="slide-menu-item">
			<h3>Core</h3>
			<p>? : Show core keys</p>
		</li>
		<li class="slide-menu-item">
			<h3>Zoom</h3>
			<p>ALT+CLICK : Zoom-in</p>
		</li>
		<li class="slide-menu-item">
			<h3>Chalkboard</h3>
			<p>C : Canvas for notes on/off</p>
			<p>B : Blackboard on/off</p>
			<p>DEL : Clear Blackboard/Canvas on/off</p>
			<p>BASCKSPACE : Reset chalkboard data on current slide</p>
			<p>D : Download drawing as JSON</p>
		</li>
		<li class="slide-menu-item">
			<h3>Menu</h3>
			<p>M : Toggle menu</p>
			<p>F : Full screen</p>
			<p>B or . : Pause</p>
			<p>H or LEFT : Next left panel</p>
			<p>L or RIGHT : Next right panel</p>
			<p>K or UP : Up</p>
			<p>J or DOWN : Down</p>
			<p>PAGE UP : Next slide</p>
			<p>PAGE DOWN : Previous slide</p>
			<p>HOME or Shift ← : First slide</p>
			<p>END or Shift →: Last slide</p>
			<p>N , SPACE : Next slide</p>
			<p>ESC or O : Slide overview</p>
			<p>S : Speaker notes view</p>
		</li>
		<li class="slide-menu-item">
			<h3>Custom</h3>
			<p>I : ../index.html</p>
		</li></ul>` }]
},
keyboard: {
    67: function() { RevealChalkboard.toggleNotesCanvas() },	// toggle notes canvas when 'c' is pressed
    66: function() { RevealChalkboard.toggleChalkboard() },	// toggle chalkboard when 'b' is pressed
    46: function() { RevealChalkboard.clear() },	// clear chalkboard when 'DEL' is pressed
     8: function() { RevealChalkboard.reset() },	// reset chalkboard data on current slide when 'BACKSPACE' is pressed
    68: function() { RevealChalkboard.download() },	// download recorded chalkboard drawing when 'd' is pressed
    90: function() { RevealChalkboard.colorNext() }, // 'Z' : cycle colors forward
	65: function() { RevealChalkboard.colorPrev() }, // 'A' : cycle colors backward
},

//
// CHALKBOARD PLUGIN https://github.com/rajgoel/reveal.js-plugins/tree/master/chalkboard
//
chalkboard: { 
	penWidth: 3,
    chalkWidth: 4,
    chalkEffect: 0.1,
    erasorDiameter: 20,
	readOnly: false, // Configuation option allowing to prevent changes to existing drawings.
	transition: 800, // Gives the duration (in milliseconds) of the transition for a slide change, so that the notes canvas is drawn after the transition is completed.
    theme: "chalkboard", // Can be set to either "chalkboard" or "whiteboard".
    toggleChalkboardButton: { left: "30px", bottom: "90px", top: "auto", right: "auto" },
    toggleNotesButton: { left: "30px", bottom: "60px", top: "auto", right: "auto" },
	color: [ 'rgba(150,150,150,1)', 'rgba(255,255,255,0.5)' ], // The first value gives the pen color, the second value gives the color of the chalk.
	background: [ 'rgba(141,191,68,.1)', 'revealjs-plugins/chalkboard/img/blackboard.png' ], // The first value expects a (semi-)transparent color which is used to provide visual feedback that the notes canvas is enabled, the second value expects a filename to a background image for the chalkboard.
	grid: false, // This pattern can be modified by setting the color, the distance between lines, and the line width, e.g. { color: 'rgb(127,127,255,0.1)', distance: 40, width: 2}
},