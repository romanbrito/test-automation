const { userName, password, serverUrl } = require('../../config/config');

describe("Smoke Test", () => {
    it("Can Upload Image", () => {
        browser.url( serverUrl );
        $("#user_login").waitForEnabled(3000);
        $("#user_pass").waitForEnabled(3000);
        $("#wp-submit").waitForEnabled(3000);

        $("#user_login").setValue( userName );
        $("#user_pass").setValue( password );
        
        var submit_button = $("#wp-submit");
        browser.execute("arguments[0].scrollIntoView();", submit_button);
        submit_button.click();

        browser.url( serverUrl );

        $("//button[text()='Create New Sign']").waitForEnabled(10000);
        var create_sign_button = $("//button[text()='Create New Sign']");
        create_sign_button.click();

        $(".modal-content").waitForEnabled(3000);

        $("#newSignName").waitForEnabled(3000);
        var signName = "Test/smoke" + Date.now();
        $("#newSignName").setValue( signName );

        $("#newPresentationName").waitForEnabled(10000);
        var presentationName = "allDay"
        $("#newPresentationName").setValue( presentationName );

        $("#createSignModal .modal-footer button.btn.btn-primary").waitForEnabled(10000);
        var create = $("#createSignModal .modal-footer button.btn.btn-primary");
        create.click();

        $("#fileupload").waitForEnabled(5000);
        $("#fileupload").setValue("/Users/romanbrito/Workspace/test-automation/media/BlackBoardLandscape.jpeg");

        $("//div[text()='Upload finished.']").waitForEnabled(10000);
        $("#message").getText().should.equal("Upload finished.");

    });
});

