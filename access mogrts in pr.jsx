// access mogrts in pr

var sequence = app.project.activeSequence;
var videoTrack = sequence.videoTracks[0];
var clipWithMogrt = videoTrack.clips[0];

var mogrtComponent = clipWithMogrt.getMGTComponent();

$.writeln(mogrtComponent.displayName);

for(var i = 0; i < mogrtComponent.properties.numItems; i++) {
    $.writeln(mogrtComponent.properties[i].displayName);
    $.writeln(mogrtComponent.properties[i].getValue().toString());
    }