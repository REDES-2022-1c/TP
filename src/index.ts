export const lambdaHandler = () => {
    console.log('HelloWorld v1.3');
    return 'Hello World!';
}

module.exports.handler = lambdaHandler;