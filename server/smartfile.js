var sf = new SmartFile();

sf.configure({
    key: "XXXXXXXXXXXXX",
    password: "XXXXXXXXXXXXX",
    basePath: "uploads"
});

sf.onUpload = function (result, options) {
    //result is the smartfile api JSON response
    console.log("File uploaded to " + result[0].path);
};

sf.onUploadFail = function (error, options) {
    console.log("SmartFile returned error", error.statusCode, error.detail);
};