var sf = new SmartFile({
    publicRootUrl: "https://file.ac/XXXXXXX/"
});

Template.form.events({
    "submit": function(event, template){
        event.preventDefault();

        var form = template.find("form");
        var file = form.fileInput.files[0];

        sf.upload(file, function(err, result){
            form.reset();
            if (err) {
                console.log(err);
            } else {
                console.log("Upload public URL:" + sf.resolvePublic(result));
            }
        });
    }
});
