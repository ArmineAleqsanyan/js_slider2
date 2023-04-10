let data={
    currentIndex:0,
    photos:[
        "Images/1.jpg",
        "Images/2.jpg",
        "Images/3.jpg",
        "Images/4.jpg",
        "Images/5.jpg",
        "Images/6.jpg",
        "Images/7.jpg",
        "Images/8.jpg",
        "Images/9.jpg",
        "Images/10.jpg",

    ]
}
let timelinePhotos=[...document.querySelectorAll("#timeline img")]
function nextBtn(){
    data.currentIndex++
    if(data.currentIndex>9){
        data.currentIndex=0
    }
    main.src=data.photos[data.currentIndex]
    updateTimeline()
}
function prevBtn(){
    data.currentIndex--
    if(data.currentIndex<0){
        data.currentIndex=9
    }
    main.src=data.photos[data.currentIndex]
    updateTimeline()
}
function  updateTimeline(){
    timelinePhotos.map(el=>el.className="")
    timelinePhotos[data.currentIndex].className="active"
    
}
function changePhoto(){
    data.currentIndex=index;
    main.src=data.photos[data.currentIndex]
    updateTimeline()
}
setInterval(()=>nextBtn(), 5000)
