export const lambdaHandler = () => {
    console.log('HelloWorld v1.1');
    return 'Hello World!';
}

module.exports.handler = lambdaHandler;