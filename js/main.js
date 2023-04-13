
const IPY_KEY='0fe10344832ae3cd0c6982487f4504e8';
const URL_Asos='https://api.themoviedb.org';
const URL_IMG =` https://image.tmdb.org/t/p/original`
let elMoviList=document.querySelector('.movi_list')
let eltemplate_kino=document.querySelector('.eltemplate_kino').content

async function answer (url ,options )
{
    let request=await fetch(url,options)
    let malumot =await request.json()
    return malumot 
}

async function kino_list(){

    let  url= URL_Asos+"/3/list/1?api_key="+IPY_KEY; 
    let movies_list= await answer(url,{method:"GET"})
    rendrKino(movies_list.items)
}

function rendrKino (kino) {
    kino.forEach( (element) =>{ 
        let elKino=eltemplate_kino.cloneNode(true);
        let kino_img=elKino.querySelector('.img');
        let kino_name =elKino.querySelector('.head');
        let primyera=elKino.querySelector('.release_date');
        let kino_language=elKino.querySelector('.language');


        kino_img.src=URL_IMG+element.poster_path
        kino_name.textContent=element.original_title;
        primyera.textContent='Release date: '+element.release_date;
        kino_language.textContent="Language: "+element.original_language
        console.log(element ,elKino);
        elMoviList.append(elKino)

        
    })
}
kino_list() 