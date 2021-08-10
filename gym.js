

  
  //chest
  var chest_img = [ "gym/chest/bbb.jpg" , "gym/chest/pd.png" , "gym/chest/dcp.jpg" , "gym/chest/idf.jpg" , "gym/chest/dips.jpg" , "gym/chest/pu.jpg" ];
  
  var container = document.getElementById('imageContainer');

  function createImageNode(imgSrc) {
    var img = document.createElement('img');
    img.src = imgSrc;
    img.width = "300";
    img.style.margin = "15px";
    return img;
}

chest_img.forEach(img => {
  container.appendChild(createImageNode(img));
});


//shoulder
  var chest_img = [ "gym/shoulder/bo.jpg" , "gym/shoulder/fr.jpg" , "gym/shoulder/lr.jpg" , "gym/shoulder/ovh.jpg" , "gym/shoulder/rpd.jpg" , "gym/shoulder/sdsp.jpg" ];
  
  var container1 = document.getElementById('imageContainer1');


chest_img.forEach(img => {
  container1.appendChild(createImageNode(img));
});

//biceps
var chest_img = [ "gym/biceps/bc.jpg" , "gym/biceps/cc.jpg" , "gym/biceps/idc.jpg" , "gym/biceps/tdc.jpg" , "gym/biceps/sdc.jpg" , "gym/shoulder/sdsp.jpg" ];
  
var container2 = document.getElementById('imageContainer2');


chest_img.forEach(img => {
container2.appendChild(createImageNode(img));
});

//triceps
var chest_img = [ "gym/triceps/bbt.jpg" , "gym/triceps/bit.jpg" , "gym/triceps/ite.jpg" , "gym/triceps/pu.jpg" , "gym/triceps/rt.jpg"  ];
  
var container3 = document.getElementById('imageContainer3');


chest_img.forEach(img => {
container3.appendChild(createImageNode(img));
});

//back
var chest_img = [ "gym/back/bb.jpg" , "gym/back/dl.jpg" , "gym/back/dr.jpg" , "gym/back/lpd.jpg" , "gym/back/lr.jpg"  ];
  
var container4 = document.getElementById('imageContainer4');


chest_img.forEach(img => {
container4.appendChild(createImageNode(img));
});

//legs
var chest_img = [ "gym/legs/hs.jpg" , "gym/legs/lp.jpg" , "gym/legs/lungues.jpg" , "gym/legs/sl.jpg" , "gym/legs/squat.jpg"  ];
  
var container5 = document.getElementById('imageContainer5');


chest_img.forEach(img => {
container5.appendChild(createImageNode(img));
});