var browserVersion="Chrome"
console.log(browserVersion)
function getBrowserVersion(){
    if(browserVersion=='Chrome')
    {
        var browserVersion='Edge'//local variable -function scope 
    }
    console.log(browserVersion)
}
getBrowserVersion()

// var is function-scoped, not block-scoped.
// Declarations are hoisted to the top of the function, but assignments stay in place.
// Even though you didn’t write var browserVersion; explicitly, JavaScript inserts it at the top of the function during compilation.
// That’s why the global "Chrome" is shadowed by a local browserVersion that starts as undefined.
// The condition if (browserVersion == 'Chrome') fails because undefined == 'Chrome' is false.
// So the assignment never happens, and the final console.log prints undefined.