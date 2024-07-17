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

export {activeBooleanValue, activeDefaultValue};
