/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 't',
                type: 'image',
                rect: ['-1155px', '-120px','2440px','490px','auto', 'auto'],
                clip: ['rect(0px 2440px 593.2135009765625px 537.5px)'],
                fill: ["rgba(0,0,0,0)",im+"t.svg",'0px','0px'],
                transform: [[],[],[],['0.08','0.08']]
            },
            {
                id: 'd',
                type: 'image',
                rect: ['-1200px', '-81px','2820px','200px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"d.svg",'0px','0px'],
                transform: [[],[],[],['0.13','0.13']]
            },
            {
                id: 'ma',
                type: 'image',
                rect: ['173px', '-2px','277px','156px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"ma.jpg",'0px','0px']
            },
            {
                id: 'b',
                type: 'image',
                rect: ['251px', '37px','169px','112px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b.png",'0px','0px']
            },
            {
                id: 'a',
                type: 'image',
                rect: ['-785px', '-460px','1740px','1020px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"a.svg",'0px','0px'],
                transform: [[],[],[],['0.08','0.08']]
            },
            {
                id: 'b2',
                type: 'image',
                rect: ['-886px', '-104px','1940px','450px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"b.svg",'0px','0px'],
                transform: [[],[],[],['0.07','0.07']]
            },
            {
                id: 'l',
                type: 'image',
                rect: ['-1020px', '-456px','2294px','1098px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"l.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_l}": [
                ["style", "top", '-456px'],
                ["style", "clip", [0,2294,-140.53271484375,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "height", '1098px'],
                ["style", "opacity", '0'],
                ["style", "left", '-1020px'],
                ["style", "width", '2294px']
            ],
            "${_b}": [
                ["style", "top", '37px'],
                ["style", "height", '112px'],
                ["style", "opacity", '0'],
                ["style", "left", '251px'],
                ["style", "width", '169px']
            ],
            "${_b2}": [
                ["style", "top", '-78px'],
                ["transform", "scaleY", '0.07'],
                ["transform", "scaleX", '0.07'],
                ["style", "opacity", '0'],
                ["style", "left", '-886px']
            ],
            "${_a}": [
                ["style", "top", '-434px'],
                ["transform", "scaleY", '0.08'],
                ["transform", "scaleX", '0.08'],
                ["style", "opacity", '0'],
                ["style", "left", '-785px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "width", '420px'],
                ["style", "height", '150px'],
                ["style", "overflow", 'hidden']
            ],
            "${_t}": [
                ["style", "top", '-94px'],
                ["transform", "scaleY", '0.08'],
                ["transform", "scaleX", '0.08'],
                ["style", "opacity", '0'],
                ["style", "left", '-1155px'],
                ["style", "clip", [0,2440,593.2135009765625,537.5], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
            ],
            "${_d}": [
                ["style", "top", '-81px'],
                ["transform", "scaleY", '0.13'],
                ["transform", "scaleX", '0.13'],
                ["style", "opacity", '0'],
                ["style", "left", '-1200px']
            ],
            "${_ma}": [
                ["style", "top", '-2px'],
                ["style", "height", '156px'],
                ["style", "opacity", '0'],
                ["style", "left", '173px'],
                ["style", "width", '277px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 14000,
            autoPlay: true,
            timeline: [
                { id: "eid24", tween: [ "style", "${_l}", "clip", [0,2294,1098,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,2294,-140.53271484375,0]}], position: 6750, duration: 5250 },
                { id: "eid21", tween: [ "style", "${_l}", "opacity", '1', { fromValue: '0'}], position: 6750, duration: 250 },
                { id: "eid22", tween: [ "style", "${_b}", "opacity", '1', { fromValue: '0'}], position: 7000, duration: 250 },
                { id: "eid20", tween: [ "style", "${_d}", "opacity", '1', { fromValue: '0'}], position: 6500, duration: 250 },
                { id: "eid6", tween: [ "style", "${_a}", "top", '-460px', { fromValue: '-434px'}], position: 0, duration: 169 },
                { id: "eid14", tween: [ "style", "${_t}", "opacity", '1', { fromValue: '0'}], position: 4000, duration: 250 },
                { id: "eid16", tween: [ "style", "${_t}", "opacity", '0', { fromValue: '1'}], position: 5750, duration: 250 },
                { id: "eid8", tween: [ "style", "${_b2}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 250 },
                { id: "eid10", tween: [ "style", "${_b2}", "opacity", '0', { fromValue: '1'}], position: 3750, duration: 250 },
                { id: "eid2", tween: [ "style", "${_ma}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 817 },
                { id: "eid18", tween: [ "style", "${_ma}", "opacity", '0', { fromValue: '1'}], position: 6250, duration: 250 },
                { id: "eid7", tween: [ "style", "${_b2}", "top", '-104px', { fromValue: '-78px'}], position: 1500, duration: 108 },
                { id: "eid13", tween: [ "style", "${_t}", "top", '-122px', { fromValue: '-94px'}], position: 4000, duration: 108 },
                { id: "eid4", tween: [ "style", "${_a}", "opacity", '1', { fromValue: '0'}], position: 0, duration: 108 },
                { id: "eid17", tween: [ "style", "${_a}", "opacity", '0', { fromValue: '1'}], position: 6000, duration: 250 }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-13472912");
