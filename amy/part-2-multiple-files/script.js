<!-- Fill in JavaScript code between the script tags -->
 <script>
    
    const buttons = document.getElementsByClassName("calculator-buttons");
    console.log(buttons);

    const button_color = buttons[0].style["color"];

    for (let i = 0; i < buttons.length; i++) {

       
        buttons[i].onclick = () => {

            
            const button_value = buttons[i].innerHTML;

            console.log(button_value);

            document.getElementById("input-area").innerHTML = button_value;
        }

        buttons[i].onmouseover = () => {
            console.log(buttons[i].innerHTML + "mouse over");
            buttons[i].style["color"] = "orange";
            buttons[i].style["cursor"] = "pointer";
        }

        buttons[i].onmouseout = () => {
            console.log(buttons[i].innerHTML + "mouse out")
            buttons[i].style["color"] = button_color;
        }
    }
</script>

</html>
