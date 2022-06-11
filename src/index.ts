export const lambdaHandler = () => {
    console.log('HelloWorld');
    return 'Hello World!';
}

module.exports.handler = lambdaHandler;