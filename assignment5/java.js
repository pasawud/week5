var text = 0;
function post()
{
    if(text == 0 )
    {
        var textforpost = document.getElementById("text1").value;
        document.getElementById("topic1").innerText= textforpost;
        text++;
    }
    else if(text == 1 )
    {
        var textforpost = document.getElementById("text1").value;
        document.getElementById("topic2").innerText= textforpost;
        text++;
    }
    else if(text == 2 )
    {
        var textforpost = document.getElementById("text1").value;
        document.getElementById("topic3").innerText= textforpost;
        text++;
    }
}
function clearFuntion()
{
    document.getElementById("text1").innerText = (" ");
    document.getElementById("topic1").innerText = (" ");
    document.getElementById("topic2").innerText = (" ");
    document.getElementById("topic3").innerText = (" ");
    clearbox();
}
function clearbox()
{
    const textarea = document.getElementById('text1');
    textarea.value =' ';
    text = 0;
}
