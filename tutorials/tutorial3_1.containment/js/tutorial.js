
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
        source:"item1_l",
        target:"item1_r",
        endpoint:"Rectangle",        
        }, common);
    jsPlumb.draggable("item1_l", {containment:true});
    jsPlumb.draggable("item1_r", {containment:true});

    jsPlumb.connect({
        source:"item2_l",
        target:"item2_r",
        endpoint:"Rectangle",        
        }, common);
    jsPlumb.draggable("item2_l", {containment:true});
    jsPlumb.draggable("item2_r", {containment:true});
    
};



jsPlumb.ready(start);

