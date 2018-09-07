
var common = {
    connector: ["Straight"],
    anchor: ["Left", "Right"],
    endpoint:"Dot",

    paintStyle:{ stroke:"lightgray", strokeWidth:3,  },
    endpointStyle:{ fill:"lightgray", outlineStroke:"darkgray", outlineWidth:10 },

    overlays:[ ["Arrow" , { width:12, length:12, location:0.67 }] ],

};

const start = () => {
    jsPlumb.connect({
        source:"item_left",
        target:"item_right",
        endpoint:"Rectangle",

        /*connector: ["Straight"],
        anchor: ["Left", "Right"],
        endpoint:"Dot",*/
        
}, common);

    jsPlumb.draggable("item_left", {containment:"parent"});
    jsPlumb.draggable("item_right", {containment:"parent"});

};



jsPlumb.ready(start);

