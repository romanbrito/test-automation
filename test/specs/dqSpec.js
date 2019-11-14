const { userName, password, serverUrl } = require('../../config/config');

describe("Smoke Test", () => {
    it("Confirm user can Upload Image", () => {
        browser.url( serverUrl );
        $("#user_login").waitForEnabled(3000);
        $("#user_pass").waitForEnabled(3000);
        $("#wp-submit").waitForEnabled(3000);
        // $("#comments").waitForEnabled(3000);

        $("#user_login").setValue( userName );
        $("#user_pass").setValue( password );
        // $("#state").selectByVisibleText("Texas");

        // var backpack = $("#backpack");
        var submit_button = $("#wp-submit");
        browser.execute("arguments[0].scrollIntoView();", submit_button);
        submit_button.click();

        browser.url( serverUrl );


        $("//button[text()='Create New Sign']").waitForEnabled(10000);
        var create_sign_button = $("//button[text()='Create New Sign']");
        create_sign_button.click();

        $("#newSignName").waitForEnabled(10000);
        var signName = "test";
        $("#newSignName").setValue( signName );

        $("#newPresentationName").waitForEnabled(10000);
        $("#newPresentationName").setValue( "first" );

        // var element = $("//button[text()='Create']");
        // element.click();

        // $("#fileupload").waitForEnabled(3000);
        // $("#fileupload").setValue("~/Workspace/test-automation/media/BlackBoardLandscape.jpeg");

        // $("button:contains('Create')").waitForEnabled(3000);
        // $("button:contains('Create')").click();

        // $("#newsletter_yes").click();

        // $("#user_login").getValue().should.equal("Roman");
        // $("#state").getValue().should.equal("TX");
        // backpack.isSelected().should.equal(true);
        // $("#newsletter_yes").isSelected().should.equal(true);
    });
});

