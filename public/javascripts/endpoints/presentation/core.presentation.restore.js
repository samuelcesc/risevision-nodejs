/**
 * Created by rodrigopavezi on 11/14/14.
 */
function restorePresentation() {
    console.log('restorePresentation');
    // getting parameter values
    var _id = document.getElementById('restorePresentation_id').value;
    var _fields = document.getElementById('restorePresentation_fields').value;

    // create a javascript object which will be converted to Json
    var parameters = {};
    if (_id) {
        parameters['id'] = _id;
    }
    if (_fields) {
        parameters['fields'] = _fields;
    }

    // loading and calling the api passing the parameter object
    gapi.client.load(API_NAME, API_VER, function () {
        var request = gapi.client.core.presentation.restore(parameters);

        request.execute(function (jsonResp, rawResp) {
            handlesResponse(jsonResp, rawResp, 'restorePresentationResult');
        });
    }, ROOT);
}