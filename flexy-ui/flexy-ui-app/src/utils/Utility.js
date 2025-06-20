import UserConfig from '../config/config.json';
import Config from '../config/config-user.json';

function activeDefaultValue(booleanValue){
    var returnValue = "";
    if(booleanValue !== "true") {
        returnValue = "false";
    } else {
        returnValue = booleanValue;
    }

    return returnValue;
}

function activeBooleanValue(stringValue) {
    var returnValue = false;
    if(stringValue === "true") {
        returnValue = true;
    }
    return returnValue;
}

function getConfig() {
    // reads the config.json file from config directory
    return Config
}

function getStartsDirectory() {
    return Config["starsDirectory"];
}

function getAllModels() {
    let allModels = Config["models"]
    // console.log("All Models: " + allModels)
    return allModels;
}

function getModelVideos(model) {
    return Config[model]["videos"];
}

function getRandomVideos() {
    let randomModels = getRandomModels()
    let randomVideos = []
    randomModels.map((model) => {
        let modelVideos = getModelVideos(model);
        let max = modelVideos.length
        let min = 0
        let index = Math.floor((min + Math.random() * (max - min)))
        randomVideos.push(modelVideos[index])
    })
    console.log("Random Videos: " + randomVideos);
    return randomVideos;
}

function getRandomModels() {
    let allModels = getAllModels()
    let min = 0;
    let max = allModels.length;
    let randomModels = []
    while(randomModels.length < 5) {
        let index = Math.floor((min + Math.random() * (max - min)))
        let randomModel = allModels[index];
        if(!(randomModel in randomModels)) {
            randomModels.push(randomModel)
        }
    }
    console.log("Random Models: " + randomModels)
    return randomModels;
}

export {activeBooleanValue, activeDefaultValue, getStartsDirectory, getConfig, 
    getRandomModels, getRandomVideos};
