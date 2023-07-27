jQuery(function ($) {

var Promise = window.Promise;
if (!Promise) {
    Promise = JSZip.external.Promise;
}

/**
 * Fetch the content and return the associated promise.
 * @param {String} url the url of the content to fetch.
 * @return {Promise} the promise containing the data.
 */
function urlToPromise(url) {
    return new Promise(function(resolve, reject) {
        JSZipUtils.getBinaryContent(url, function (err, data) {
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

$("#btn_seldown").on("click", function () {
	$("#download_form").submit();
});	

var $form = $("#download_form").on("submit", function () {
	//resetMessage();

	var chkitem = 0;
    var zip = new JSZip();

    // find every checked item
    
    $(this).find(":checked").each(function () {
    	$this = $(this);
    	var tgs1_url = $(this).parent().parent('.item').find('.download > div:eq(0) > a ').attr('href');
        var filename1 = tgs1_url.replace(/.*\//g, "");
        var filename1FirstIndex = filename1.indexOf("&dfnm=");
        filename1 = filename1.substring(filename1FirstIndex + 6);
        zip.file(filename1, urlToPromise(tgs1_url), {binary:true});
    	
        var tgs2_url = $(this).parent().parent('.item').find('.download > div:eq(1) > a ').attr('href');
        var filename2 = tgs2_url.replace(/.*\//g, "");
        var filename2FirstIndex = filename2.indexOf("&dfnm=");
        filename2 = filename2.substring(filename2FirstIndex + 6);
        zip.file(filename2, urlToPromise(tgs2_url), {binary:true});

        var tgs3_url = $(this).parent().parent('.item').find('.download > div:eq(2) > a ').attr('href');
        if(tgs3_url) {
	        var filename3 = tgs3_url.replace(/.*\//g, "");
	        var filename3FirstIndex = filename3.indexOf("&dfnm=");
	        filename3 = filename3.substring(filename3FirstIndex + 6);
	        zip.file(filename3, urlToPromise(tgs3_url), {binary:true});
        }
        chkitem = 1;
    });

    if(chkitem == 1) {
	    // when everything has been downloaded, we can trigger the dl
	    zip.generateAsync({type:"blob"}, function updateCallback(metadata) {
	        var msg = "progression : " + metadata.percent.toFixed(2) + " %";
	        if(metadata.currentFile) {
	            msg += ", current file = " + metadata.currentFile;
	        }
	        //showMessage(msg);
	        //updatePercent(metadata.percent|0);
	    })
	    .then(function callback(blob) {
	
	        // see FileSaver.js
	        saveAs(blob, $("#saveFilenm").val());
	
	        //showMessage("done !");
	    }, function (e) {
	        showError(e);
	    });
    } else {
    	alert("다운로드를 원하는 파일을 선택하세요.")
    }
    
    return false;
});

    /**
 * Reset the message.
 */
function resetMessage () {
    $("#result")
    .removeClass()
    .text("");
}
/**
 * show a successful message.
 * @param {String} text the text to show.
 */
function showMessage(text) {
    resetMessage();
    $("#result")
    .addClass("alert alert-success")
    .text(text);
}
/**
 * show an error message.
 * @param {String} text the text to show.
 */
function showError(text) {
    resetMessage();
    $("#result")
    .addClass("alert alert-danger")
    .text(text);
}
/**
 * Update the progress bar.
 * @param {Integer} percent the current percent
 */
function updatePercent(percent) {
    $("#progress_bar").removeClass("hide")
    .find(".progress-bar")
    .attr("aria-valuenow", percent)
    .css({
        width : percent + "%"
    });
}

if(!JSZip.support.blob) {
    showError("This demo works only with a recent browser !");
    return;
}
});
