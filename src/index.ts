export const lambdaHandler = () => {
    console.log('HelloWorld v1.4');
    return 'Hello World!';
}

module.exports.handler = lambdaHandler;