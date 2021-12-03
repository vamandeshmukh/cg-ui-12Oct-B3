
const functionWithFunctionAsArgument = (argToFunction) => {
    console.log(`functionWithFunctionAsArgument`);
    argToFunction();
}

const functionToBePassedAsArg = () => {
    console.log(`functionToBePassedAsArg`);
}

functionWithFunctionAsArgument(functionToBePassedAsArg);
