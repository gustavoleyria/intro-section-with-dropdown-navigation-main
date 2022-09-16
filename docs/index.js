function ShowImg(){
    elementImgMenu = document.getElementById('imgmenu')
    elementImgX = document.getElementById('imgx')
    check = document.getElementById('menu')   
    if(check.checked){
        elementImgMenu.style.display = 'none'
        elementImgX.style.display = 'block'
    } else {
        elementImgMenu.style.display = 'block'
        elementImgX.style.display = 'none'
    }
}
