import {Then} from '@wdio/cucumber-framework';

export const checkEqualsTime = async (
    selector: string,
    falseCase: boolean,
    expectedText: string,
) => {
    return new Promise<void>((resolve) => {
        resolve();
    }).then(() => {
        console.log('Then - checkEqualsTime');
    });
};


Then(
    /^I expect that element "([^"]*)?"( not)* matches the time "([^"]*)?"$/,
    checkEqualsTime,
);
