import 'jest';
import { lambdaHandler } from '../src';

describe('Unit Tests', () => {
    it('should return successfully', async () => {
        const value = lambdaHandler();
        expect(value).toBe('Hello World!');
    });
});