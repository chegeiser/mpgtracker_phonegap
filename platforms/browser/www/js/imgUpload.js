/* ------------------------ Before Images ------------------------------------------------ */
/* from: https://www.raymondcamden.com/2014/04/14/MultiFile-Uploads-and-Multiple-Selects-Part-2 */
var selDiv1 = "";
var storedFiles1 = [];

$(document).ready(function() {
    $("#files1").on("change", handleFileSelect1);

    selDiv1 = $("#selectedFiles1");
    $("#myForm").on("submit", handleForm1);

    $("body").on("click", ".selFile", removeFile1);
});

function handleFileSelect1(e) {
    var files = e.target.files;
    var filesArr = Array.prototype.slice.call(files);
    filesArr.forEach(function(f) {

        if(!f.type.match("image.*")) {
            return;
        }
        storedFiles1.push(f);

        var reader = new FileReader();
        reader.onload = function (e) {
            var html = "<div class='inline-block'><img src=\"" + e.target.result + "\" data-file='"+f.name+"' class='selFile' title='Click to remove'>" + "<br clear=\"left\"/>" + f.name + "</div>";
            selDiv1.append(html);

        }
        reader.readAsDataURL(f);
    });

}

function handleForm1(e) {
    e.preventDefault();
    var data = new FormData();

    for(var i=0, len=storedFiles.length; i<len; i++) {
        data.append('files', storedFiles[i]);
    }

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'handler.cfm', true);

    xhr.onload = function(e) {
        if(this.status == 200) {
            console.log(e.currentTarget.responseText);
            alert(e.currentTarget.responseText + ' items uploaded.');
        }
    }

    xhr.send(data);
}

function removeFile1(e) {
    var file = $(this).data("file");
    for(var i=0;i<storedFiles1.length;i++) {
        if(storedFiles1[i].name === file) {
            storedFiles1.splice(i,1);
            break;
        }
    }
    $(this).parent().remove();
}

/* ------------------------ After Images ------------------------------------------------ */
var selDiv2 = "";
var storedFiles2 = [];

$(document).ready(function() {
    $("#files2").on("change", handleFileSelect2);

    selDiv2 = $("#selectedFiles2");
    $("#myForm").on("submit", handleForm2);

    $("body").on("click", ".selFile", removeFile2);
});

function handleFileSelect2(e) {
    var files = e.target.files;
    var filesArr = Array.prototype.slice.call(files);
    filesArr.forEach(function(f) {

        if(!f.type.match("image.*")) {
            return;
        }
        storedFiles2.push(f);

        var reader = new FileReader();
        reader.onload = function (e) {
            var html = "<div class='inline-block'><img src=\"" + e.target.result + "\" data-file='"+f.name+"' class='selFile' title='Click to remove'>" + "<br clear=\"left\"/>" + f.name + "</div>";
            selDiv2.append(html);

        }
        reader.readAsDataURL(f);
    });

}

function handleForm2(e) {
    e.preventDefault();
    var data = new FormData();

    for(var i=0, len=storedFiles.length; i<len; i++) {
        data.append('files', storedFiles[i]);
    }

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'handler.cfm', true);

    xhr.onload = function(e) {
        if(this.status == 200) {
            console.log(e.currentTarget.responseText);
            alert(e.currentTarget.responseText + ' items uploaded.');
        }
    }

    xhr.send(data);
}

function removeFile2(e) {
    var file = $(this).data("file");
    for(var i=0;i<storedFiles2.length;i++) {
        if(storedFiles2[i].name === file) {
            storedFiles2.splice(i,1);
            break;
        }
    }
    $(this).parent().remove();
}
