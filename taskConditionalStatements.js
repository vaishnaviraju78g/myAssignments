function launchBrowser(browserName){
    if(browserName=='chrome'){
        console.log("Launched browser is chrome")
    }
    else{
        console.log("Launched browser is not chrome")
    }
}
function testType(type){
    switch(type){
        case "smoke":
            console.log("Smoke testing")
            break
        case "sanity":
            console.log("Sanity testing")
            break
        case "regression":
            console.log("Regression testing")
            break
        default:
            console.log("default testing")
            break
    }
}
launchBrowser("chrome")
testType("sanity")