const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const main = $('.main')
const form = document.querySelector("form"),
fileInput = document.querySelector(".file-input"),
progressArea = document.querySelector(".progress-area"),
uploadedArea = document.querySelector(".uploaded-area");

form.addEventListener("click", () => {
  fileInput.click();
});

fileInput.onchange = ({target}) =>{
  let file = target.files[0];
  if(file) {
    let fileName = file.name;
    if(fileName.length >= 12){
      let splitName = fileName.split('.');
      // fileName = splitName[0].substring(0, 13) + "... ." + splitName[1];
    }
    uploadFile(fileName);
  }
}

function uploadFile(name){
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "php/upload.php");
  xhr.upload.addEventListener("progress", ({loaded, total}) =>{
    console.log(loaded, total);
    let fileLoaded = Math.floor((loaded / total) * 100);
    console.log(fileLoaded)
    // trả về kích thước hiện tại theo kb
    let fileTotal = Math.floor(total / 1000);
    console.log(fileTotal)
    let fileSize;
    (fileTotal < 1024) ? fileSize = fileTotal + " KB" : fileSize = (loaded / (1024*1024)).toFixed(2) + " MB";
    main.classList.add('inactives')
    // quyết định cái thanh chạy %
    let progressHTML = `<li class="row">
                          <div class="content">
                            <div class="details">
                              <span class="name name-upload">${name} 
                                <span class = "uploading-text">• Uploading</span>
                              </span>
                              <span class="percent">${fileLoaded}%</span>
                            </div>
                            <div class="progress-bar">
                              <div class="progress" style="width: ${fileLoaded}%"></div>
                            </div>
                          </div>
                        </li>`;                
    uploadedArea.classList.add("onprogress");
    progressArea.innerHTML = progressHTML;
    if(loaded == total){
      progressArea.innerHTML = "";
      let uploadedHTML = `<li class="row">
                            <div class="content">
                              <i class="fas fa-file-alt"></i>
                              <div class="details">
                              <span class="name name-upload">${name} 
                                <span class = "uploading-text">• Uploaded</span>
                              </span>
                                <span class="percent">${fileLoaded}%</span>
                                <span class="size">${fileSize}</span>
                              </div>
                            </div> 
                            <i class="icon-check fas fa-check"></i>
                          </li>

                          <li class="ahihi">
                            <span>Ahihi</span>
                          </li>
                          <li class="ahihi">
                          <span>Ahihi</span>
                        </li>
                          
                          `
                          ;
      uploadedArea.classList.remove("onprogress");  
      uploadedArea.insertAdjacentHTML("afterbegin", uploadedHTML);
    }
  });
  let data = new FormData(form);
  xhr.send(data);
}