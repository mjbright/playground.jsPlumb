
const start = () => {
    jsPlumb.connect({
        source:"item_left",
        target:"item_right",
        endpoint:"Rectangle",

        connector: ["Straight"],
        anchor: ["Left", "Right"],
        endpoint:"Dot",
        /*
        */
});

    jsPlumb.draggable("item_left");
    jsPlumb.draggable("item_right");
};

jsPlumb.ready(start);

