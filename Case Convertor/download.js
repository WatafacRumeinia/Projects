function download(filename, textInput){
    let element=document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,'+encodeURIComponent(textInput));
    element.setAttribute('download', filename);
    document.body.appendChild(element);
    element.click();
}
document.getElementById('save-text-file')
    .addEventListener('click', function (){
        let text=document.querySelector('textarea').value;
        let filename="text.txt";
        download(filename,text);
    },false)

