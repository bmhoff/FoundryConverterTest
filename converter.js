class Converter {
    static ready() {
        console.log("This code runs when foundry is ready and game data is available");
    }

}



console.log("Hello World, test converter");

Hooks.on("init", function() {
    console.log("This code runs Foundry Initializes");
})

Hooks.on("ready", Converter.ready)