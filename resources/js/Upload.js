$('.addBtn').on('click', function () {


    let newTableRow =

        "<tr>" +

           "<td><input type='file' class='fileInput form-control'></td> "  +
           "<td class='fileSize'>File Size</td> " +

           "<td> <button  class='btn cancelBtn btn-sm btn-danger'>Cancel</button> </td> " +

            "<td><button class='btn upBtn btn-sm btn-primary'>Upload</button></td> " +
            "<td class='fileUpMB'>Upload(MB)</td> " +
            "<td class='filePercentage'>Upload(%)</td>" +
            "<td class='fileStatus'>Status</td>" +
        "</tr>"



    $('.fileList').append(newTableRow);

    $('.fileInput').on('change',function (){
       let MyFile =  $(this).prop('files');
       let MyFileSize = ((MyFile[0].size)/(1024*1024)).toFixed(2);

       $(this).closest('tr').find('.fileSize').html(MyFileSize+ "MB" );
    })

    $('.upBtn').on('click',function (event){
        let MyFile = $(this).closest('tr').find('.fileInput').prop('files');
        let formData = new FormData();
        let fileUpMB = $(this).closest('tr').find('.fileUpMB');
        let fileUpPercentage = $(this).closest('tr').find('.filePercentage');
        let fileStatus = $(this).closest('tr').find('.fileStatus');

        let UpBtn = $(this);

        formData.append('FileKey',MyFile[0]);
        onFileUpload(formData,fileUpMB,fileUpPercentage,fileStatus,UpBtn)
        event.preventDefault();
        event.stopImmediatePropagation();
    })






    // Cancel Row
    $('.cancelBtn').on('click',function (){
        $(this).parents('tr').remove();
    })




})


function onFileUpload(formData,fileUpMB,fileUpPercentage,fileStatus,UpBtn){


    fileStatus.html('Uploading.....')
    UpBtn.prop('disabled',true);
    let url = '/fileUp'

    let config = {
        headers:{'content-type':'multipart/form-data'},
        onUploadProgress:function (progressEvent){
            let UpMB= (progressEvent.loaded/(1024*1024)).toFixed(2) +" MB";
            let UpPercentage= ((progressEvent.loaded*100)/progressEvent.total).toFixed(2) +" %";
          fileUpMB.html(UpMB)
            fileUpPercentage.html(UpPercentage)
        }
    }

    axios.post(url,formData,config).then(function (response){

        if(response.status == 200)
        {
            fileStatus.html('Upload Complete');
            UpBtn.prop('disabled',false);
        }
        else
        {
            fileStatus.html('Upload Failed');
            UpBtn.prop('disabled',false);
        }

    }).catch(function (){
        fileStatus.html('Upload Failed');
        UpBtn.prop('disabled',false);
    })

}
