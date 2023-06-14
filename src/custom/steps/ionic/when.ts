import { When } from '@wdio/cucumber-framework';

export const ionicClickTabButtonWithText = async (
    selector: string,
    falseCase: boolean,
    expectedText: string,
) => {
    return new Promise<void>((resolve) => {
        resolve();
    }).then(() => {
        console.log('Then - ionicClickTabButtonWithText');
    });
};

// Ionic Tab Button
When(
  /^I (click|doubleClick) on the ionic-tab-button with the text "([^"]*)?"$/,
  ionicClickTabButtonWithText,
);
