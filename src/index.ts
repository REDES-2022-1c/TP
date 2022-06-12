export const lambdaHandler = () => {
    console.log('HelloWorld v1.2');
    return 'Hello World!';
}

module.exports.handler = lambdaHandler;