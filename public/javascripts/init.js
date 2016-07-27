    // ------------------------- Authentication & Loading ----------------------------
    function init() {
        console.log('init');

        checkAuth(); // tries to authenticate the user during loading. See auth.js file

        document.getElementById('signinButton').onclick = function () {
            console.log('login button clicked');
            signin(); // more details in the auth.js file
        };

        document.getElementById('signoutButton').onclick = function () {
            console.log('logout button clicked');
            signout(); // more details in the auth.js file
        };

        // ------------------------ Handles the submit event -------------------------
        document.getElementById('addCompany').onclick = function () {
            handleExecuteAction("addCompanySection");
            addCompany();
        };
        document.getElementById('deleteCompany').onclick = function () {
            handleExecuteAction("deleteCompanySection");
            deleteCompany();
        };
        document.getElementById('getCompany').onclick = function () {
            handleExecuteAction("getCompanySection");
            getCompany();
        };
        document.getElementById('listCompany').onclick = function () {
            handleExecuteAction("listCompanySection");
            listCompany();
        };
        document.getElementById('lookupCompany').onclick = function () {
            handleExecuteAction("lookupCompanySection");
            lookupCompany();
        };
        document.getElementById('moveCompany').onclick = function () {
            handleExecuteAction("moveCompanySection");
            moveCompany();
        };
        document.getElementById('patchCompany').onclick = function () {
            handleExecuteAction("patchCompanySection");
            patchCompany();
        };
        document.getElementById('regenerateFieldCompany').onclick = function () {
            handleExecuteAction("regenerateFieldCompanySection");
            regenerateFieldCompany();
        };
        document.getElementById('addDisplay').onclick = function () {
            handleExecuteAction("addDisplaySection");
            addDisplay();
        };
        document.getElementById('deleteDisplay').onclick = function () {
            handleExecuteAction("deleteDisplaySection");
            deleteDisplay();
        };
        document.getElementById('getDisplay').onclick = function () {
            handleExecuteAction("getDisplaySection");
            getDisplay();
        };
        document.getElementById('listDisplay').onclick = function () {
            handleExecuteAction("listDisplaySection");
            listDisplay();
        };
        document.getElementById('patchDisplay').onclick = function () {
            handleExecuteAction("patchDisplaySection");
            patchDisplay();
        };
        document.getElementById('rebootDisplay').onclick = function () {
            handleExecuteAction("rebootDisplaySection");
            rebootDisplay();
        };
        document.getElementById('restartDisplay').onclick = function () {
            handleExecuteAction("restartDisplaySection");
            restartDisplay();
        };
        document.getElementById('addSchedule').onclick = function () {
            handleExecuteAction("addScheduleSection");
            addSchedule();
        };
        document.getElementById('deleteSchedule').onclick = function () {
            handleExecuteAction("deleteScheduleSection");
            deleteSchedule();
        };
        document.getElementById('getSchedule').onclick = function () {
            handleExecuteAction("getScheduleSection");
            getSchedule();
        };
        document.getElementById('listSchedule').onclick = function () {
            handleExecuteAction("listScheduleSection");
            listSchedule();
        };
        document.getElementById('patchSchedule').onclick = function () {
            handleExecuteAction("patchScheduleSection");
            patchSchedule();
        };
        document.getElementById('listSystemmessage').onclick = function () {
            handleExecuteAction("listSystemmessageSection");
            listSystemmessage();
        };
        document.getElementById('addUser').onclick = function () {
            handleExecuteAction("addUserSection");
            addUser();
        };
        document.getElementById('deleteUser').onclick = function () {
            handleExecuteAction("deleteUserSection");
            deleteUser();
        };
        document.getElementById('getUser').onclick = function () {
            handleExecuteAction("getUserSection");
            getUser();
        };
        document.getElementById('listUser').onclick = function () {
            handleExecuteAction("listUserSection");
            listUser();
        };
        document.getElementById('patchUser').onclick = function () {
            handleExecuteAction("patchUserSection");
            patchUser();
        };
        document.getElementById('listCountry').onclick = function () {
            handleExecuteAction("listCountrySection");
            listCountry();
        };
        document.getElementById('addPresentation').onclick = function () {
            handleExecuteAction("addPresentationSection");
            addPresentation();
        };
        document.getElementById('deletePresentation').onclick = function () {
            handleExecuteAction("deletePresentationSection");
            deletePresentation();
        };
        document.getElementById('getPresentation').onclick = function () {
            handleExecuteAction("getPresentationSection");
            getPresentation();
        };
        document.getElementById('listPresentation').onclick = function () {
            handleExecuteAction("listPresentationSection");
            listPresentation();
        };
        document.getElementById('patchPresentation').onclick = function () {
            handleExecuteAction("patchPresentationSection");
            patchPresentation();
        };
        document.getElementById('publishPresentation').onclick = function () {
            handleExecuteAction("publishPresentationSection");
            publishPresentation();
        };
        document.getElementById('restorePresentation').onclick = function () {
            handleExecuteAction("restorePresentationSection");
            restorePresentation();
        };
        document.getElementById('listTemplate').onclick = function () {
            handleExecuteAction("listTemplateSection");
            listTemplate();
        };
        document.getElementById('listTimezone').onclick = function () {
            handleExecuteAction("listTimezoneSection");
            listTimezone();
        };
    }

    /**
     * This functions handles the response of the api call
     * It checks if there is a valida result and
     * sends the json to the output function
     *
     * @param jsonResp
     * @param rawResp
     * @param type
     */
    function handlesResponse(jsonResp, rawResp, type) {
        console.log(jsonResp);
        // Because of the way the GAPI works the jsonResp object has got
        // a duplication of the data which comes under result element
        // So here we will output the result to avoid it if there is one.
        // There is the error case so result element would not exist on the json responce
        var resultJson = (jsonResp.result) ? jsonResp.result : jsonResp;
        var jsonData = JSON.stringify(resultJson, undefined, 2);
        output(syntaxHighlight(jsonData), type); // see output.js
    }