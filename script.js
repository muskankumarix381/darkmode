const FullDarkModeCheckBox = document.querySelector('#Full-Dark-Mode');
const containedDarkModeCheckBox =document.querySelector('#contained-Dark-Mode');
const container = document.querySelector('.container')

const isFullDarkMode = JSON.parse(localStorage.getItem('FullDarkModeCheckBox'))
const iscontainedDarkMode = JSON.parse(localStorage.getItem('containedDarkModeCheckBox'))



if(isFullDarkMode){
    FullDarkModeCheckBox.checked=true;
}
if(iscontainedDarkMode){
    containedDarkModeCheckBox.checked=true;
}

changeFulllDarkMide();
changeContainerDarkMode();

FullDarkModeCheckBox.addEventListener('change',()=>{
    changeFulllDarkMide();
    changeContainerDarkMode();
}) 

function changeFulllDarkMide (){
    // if(FullDarkModeCheckBox.checked){
    //     document.body.classList.add('dark')
    //     localStorage.setItem('FullDarkModeCheckBox',true)
    // }
    // else{
    //     document.body.classList.remove('dark')
    //     localStorage.setItem('FullDarkModeCheckBox',false)
    // }

   // containedDarkModeCheckBox.checked = FullDarkModeCheckBox.checked
   changeTheme(FullDarkModeCheckBox,document.body,'FullDarkModeCheckBox')
}

function changeContainerDarkMode(){
    // if(containedDarkModeCheckBox.checked){
    //     container.classList.add('dark')
    //     localStorage.setItem('containedDarkModeCheckBox',true)
    // }
    // else{
    //     container.classList.remove('dark')
    //     localStorage.setItem('containedDarkModeCheckBox',false)
    // }
    changeTheme(containedDarkModeCheckBox,container,'containedDarkModeCheckBox')
}

function changeTheme(checkbox,element,localStorageKey){
    if(checkbox.checked){
        element.classList.add('dark')
        localStorage.setItem(localStorageKey,true)
    }
    else{
        element.classList.remove('dark')
        localStorage.setItem(localStorageKey,false)
    }
}

containedDarkModeCheckBox.addEventListener('change',changeContainerDarkMode);

