function adduser()
{
    player_2_name=document.getElementById("player_2").value;
    player_1_name=document.getElementById("player_1").value;

    localStorage.setItem("player_1",player_1_name);
    localStorage.setItem("player_2",player_2_name);

    window.location="Screen2.html";
}