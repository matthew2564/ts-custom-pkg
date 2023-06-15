import {binding, then} from "cucumber-tsflow";

const checkEqualsTime = async (
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

@binding()
class ThenSteps {
    /**
     *  @then(/^I expect that element "([^"]*)?"( not)* matches the time "([^"]*)?"$/)
     */
    @then(/^I expect that element "([^"]*)?"( not)* matches the time "([^"]*)?"$/)
    public checkEqualsTime(action: string, falseCase: boolean, expectedText: string) {
        return checkEqualsTime(action, falseCase, expectedText);
    }
}

export = ThenSteps;
