let audioElt = document.querySelector("audio"),
    rangeInput = document.querySelector(".range"),
    audioCtx = new AudioContext(),
    source = audioCtx.createMediaElementSource(audioElt),
    panNode = new StereoPannerNode(audioCtx);

source.connect(panNode);
panNode.connect(audioCtx.destination);

rangeInput.addEventListener("input", function () {
    panNode.pan.value = rangeInput.value/100;
})

