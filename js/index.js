// getting all the required elements
const searchWrapper = document.querySelector('.input-box');
const inputBox = searchWrapper.querySelector('input');
const suggBox = searchWrapper.querySelector('.autocom-box');



//if user press any key and release
inputBox.onkeyup = (e)=>{
    // console.log(e.target.value);
    let userData = e.target.value;
    let emptyArray = [];
    if(userData){
        emptyArray = suggestions.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            return data = '<li>'+ data +'</li>';
        })
        searchWrapper.classList.add('active');//show auto-complete
        showSuggetions(emptyArray);
        let allList = suggBox.querySelectorAll('li');
        for(let i=0;i<allList.length;i++){
            allList[i].setAttribute("onclick","select(this)");
        }
    }else{
        searchWrapper.classList.remove('active');//show hide-complete
        
    }
    
}

function select(element){
    inputBox.value = element.textContent;
}

function showSuggetions(list){
    let listData=undefined;
    if(!list.length){
        listData = '<li>'+ inputBox.value +'</li>'
    }else{
        listData = list.join('');
        console.log(listData);
    }
    suggBox.innerHTML = listData;
    
}