var builddate, buildtime, buttonmenu, editbutton,
    delbutton, hashchanger,
    pn, PouchNotesObj, showview, svhandler, viewnotes, searchnotes;

viewnotes = document.querySelector('[data-show="#allnotes"]');
buttonmenu = document.getElementById('buttonwrapper');
editbutton = document.querySelector('button[type=button].edit');
delbutton = document.querySelector('button[type=button].delete');
showview = document.querySelectorAll('button.clicktarget');

function onLoad() {
    document.addEventListener("deviceready", onDeviceReady, false);
}

window.onload = function() {
    document.getElementById("ReportEntry").style.display = "none";
};
var local = new PouchDB('servicereport');
var remote = new PouchDB('http://54.193.43.138:5984/servicereport');

function saveReport() {
    var tech = window.document.reportform.TechName.value;
    var company = window.document.reportform.Company.value;
    var Project = window.document.reportform.Project.value;
    var DateFirst = window.document.reportform.DateFirst.value;
    var DateLast = window.document.reportform.DateLast.value;
    var NoteStatus = window.document.reportform.NoteStatus.value;
    var Block = window.document.reportform.Block.value;
    var Equipment = window.document.reportform.Equipment.value;
    var Description = window.document.reportform.Description.value;
    var Details = window.document.reportform.Details.value;
    var Repairs = window.document.reportform.Repairs.value;
    var Recommendations = window.document.reportform.Recommendations.value;
    var Longitude = window.document.reportform.Longitude.value;
    var Latitude = window.document.reportform.Latitude.value;
    var Accuracy = window.document.reportform.Accuracy.value;
    var AdditionalService = window.document.reportform.AdditionalService.value;
    var addServiceImgNotes = window.document.reportform.addServiceImgNotes.value;
    var addServiceImgNotes2 = window.document.reportform.addServiceImgNotes2.value;
    /*    var addServiceImgNotes3 = window.document.reportform.addServiceImgNotes3.value;
        var addServiceImgNotes4 = window.document.reportform.addServiceImgNotes4.value;
        var addServiceImgNotes5 = window.document.reportform.addServiceImgNotes5.value;
        var addServiceImgNotes6 = window.document.reportform.addServiceImgNotes6.value;
        var addServiceImgNotes7 = window.document.reportform.addServiceImgNotes7.value;
        var addServiceImgNotes8 = window.document.reportform.addServiceImgNotes8.value;*/
    /*    var inputFile = document.querySelector("#inputFile");*/
    /*    var imgs2 = document.images.picsUpload2;*/
    /*    var inputFile2 = document.querySelector("#inputFile2");*/
    /*    var inputFile3 = document.querySelector("#inputFile3");
        var inputFile4 = document.querySelector("#inputFile4");
        var inputFile5 = document.querySelector("#inputFile5");
        var inputFile6 = document.querySelector("#inputFile6");
        var inputFile7 = document.querySelector("#inputFile7");
        var inputFile8 = document.querySelector("#inputFile8");*/

    /*    getFile = inputFile.files[0];*/
    /*    getFile2 = imgs2*/
    /*    getFile2 = inputFile2.files[0];*/
    /*    getFile3 = inputFile3.files[0];*/


    /*    $.fn.serializeObject = function() // serializeObject form => json
            {
                var o = {}; // json object
                var a = this.serializeArray(); // form object as array
                $.each(a, function() { // for each array item
                    if (o[this.name] !== undefined) { // if the value of this form field is undefined aka does not exist
                        if (!o[this.name].push) { // push this form field into the json object
                            o[this.name] = [o[this.name]];
                        }
                        o[this.name].push(this.value || ''); // push the value into the json object
                    } else {
                        o[this.name] = this.value || '';
                    }
                });
                return o; // return json object
            };
        var doc = JSON.stringify($('imagesForm').serializeObject()); // change the form into a json object */

    var report = {
      _id: new Date().toISOString(),
      tech: tech,
      company: company,
      Project: Project,
      DateFirst: DateFirst,
      DateLast: DateLast,
      NoteStatus: NoteStatus,
      Block: Block,
      Equipment: Equipment,
      Description: Description,
      Details: Details,
      Repairs: Repairs,
      Recommendations: Recommendations,
      Longitude: Longitude,
      Latitude: Latitude,
      Accuracy: Accuracy,
      AdditionalService: AdditionalService,
      addServiceImgNotes: addServiceImgNotes,
      addServiceImgNotes2: addServiceImgNotes2,
    };
    local.put(report).then(function (response) {
      return Promise.all(storedFiles.map(function(storedFile) {
        return local.putAttachment(response.id, storedFile.name, response.rev, storedFile, storedFile.type);
      }));
    }).then(function () {
      console.log("done");
    }).catch(function (err) {
      console.log("error", err);
    });

    // local.put({
    //         _id: new Date().toISOString(),
    //         tech: tech,
    //         company: company,
    //         Project: Project,
    //         DateFirst: DateFirst,
    //         DateLast: DateLast,
    //         NoteStatus: NoteStatus,
    //         Block: Block,
    //         Equipment: Equipment,
    //         Description: Description,
    //         Details: Details,
    //         Repairs: Repairs,
    //         Recommendations: Recommendations,
    //         Longitude: Longitude,
    //         Latitude: Latitude,
    //         Accuracy: Accuracy,
    //         AdditionalService: AdditionalService,
    //         addServiceImgNotes: addServiceImgNotes,
    //         addServiceImgNotes2: addServiceImgNotes2,
    //     },
        /*function(err, response) {
               if (err) { return console.log(err); }
               if (response && response.ok) {
                   if (getFile2.length) {
                       var images2 = getFile2.value;
                       var ext = url.substring(url.lastIndexOf('.') + 1).toLowerCase();
                       if (inputFile.files && getFile2.files[0] && (ext == "gif" || ext == "png" || ext == "jpeg" || ext == "jpg")) {
                           var reader = new FileReader();

                           reader.onload = function(e) {
                               db.putAttachment(response.id, file.name, response.rev, new Blob([reader.result]), file.type, function(err, res) {
                                       console.log("attachment saved");
                                   })
                                   /*$('#img').attr('src', e.target.result);
                           };
                           // db.putAttachment(response.id, file.name, response.rev, e.target.result, file.type);
                           reader.readAsDataURL(getFile2.files[0]);
                       } else {
                           $('#img').attr('src', '/assets/no_preview.png');
                       }
                   }*/



        local.replicate.to(remote, {
            live: true,
            retry: true,
            back_off_function: function(delay) {
                if (delay === 0) {
                    return 1000;
                }
                return delay * 3;
            }
        });
  clearFields();
}

/*function forceSync() {
    db.replicate.to(remote, {
        heartbeat: true,
        retry: true
    });
}*/
function forceSync() {
    local.replicate.to(remote, {
        live: true,
        retry: true,
        back_off_function: function(delay) {
            if (delay === 0) {
                return 1000;
            }
            return delay * 3;
        }
    });
}

function clearFields() {
    window.document.reportform.TechName.value = "";
    window.document.reportform.Company.value = "";
    window.document.reportform.Project.value = "";
    window.document.reportform.DateFirst.value = "";
    window.document.reportform.DateLast.value = "";
    window.document.reportform.NoteStatus.value = "";
    window.document.reportform.Block.value = "";
    window.document.reportform.Equipment.value = "";
    window.document.reportform.Description.value = "";
    window.document.reportform.Details.value = "";
    window.document.reportform.Repairs.value = "";
    window.document.reportform.Recommendations.value = "";
    window.document.reportform.Longitude.value = "";
    window.document.reportform.Latitude.value = "";
    window.document.reportform.Accuracy.value = "";
    window.document.reportform.AdditionalService.value = "";
    window.document.reportform.addServiceImgNotes.value = "";
    // window.document.reportform.inputFile.value = "";
    window.document.reportform.addServiceImgNotes2.value = "";
    //window.document.reportform.inputFile2.value = "";
    window.document.reportform.files.value = "";
    window.document.reportform.files2.value = "";
    $("#selectedFiles").empty();
    $("#selectedFiles2").empty();
}
