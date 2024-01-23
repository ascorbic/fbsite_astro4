 
 export const d = document;

  window.onload = function(){

    var links = document.querySelector( '.content' )?.getElementsByTagName('a');  
    for (var i = 0, length = links?.length; i < length; i++) {  
        if (links[i].hostname !== window.location.hostname) {
          links[i].setAttribute('target', '_blank')
        }
    }
  }