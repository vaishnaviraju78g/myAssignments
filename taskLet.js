let browserVersion="Chrome"//It’s accessible anywhere in the file except where a local variable with the same name shadows it.
console.log(browserVersion)
function getBrowserVersion(){
    if(browserVersion=='Chrome')
    {
        let browserVersion='Edge'//local variable -block scope 
    }
    console.log(browserVersion)
}
getBrowserVersion()