export const lambdaHandler = () => {
    console.log('HelloWorld v1.5');
    return 'Hello World!';
}

module.exports.handler = lambdaHandler;