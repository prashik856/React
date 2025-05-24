import Config from '../config/config.json';

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

export {activeBooleanValue, activeDefaultValue, getStartsDirectory, getConfig};
