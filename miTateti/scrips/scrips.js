$(document).ready(function(){
   
    
    var imagen_1 = "<img class = \"imagen1\"src=\"kakashi.ico\">";
    var imagen_2 = "<img class = \"imagen2\"src=\"descarga.ico\">";
    
    var player_1 = true;
    var nombre_player_1;
    var nombre_player_2;
    console.log(nombre_player_1 == undefined);
    $('.button').click(function(){
        nombre_player_1 = $('#player_1').val();
        nombre_player_2 = $('#player_2').val();      

    if( nombre_player_1!= "" && nombre_player_2!= "" ){
            $('form').slideUp(); 
    } 
    else if(nombre_player_1 == "" && nombre_player_2 != "")
        alert("Ingrese Nombre de jugador 1");  
    
    else if(nombre_player_1 != "" && nombre_player_2 == "")
        alert("Ingrese Nombre de jugador 2");
    
    else
        alert("Debe Ingresar Jugadores");  
        
    });

        $('.hijo').click(function(){
            if(jugadorEstaSet(nombre_player_1) && jugadorEstaSet(nombre_player_2))
                alert("Debe Ingresar Jugadores");
          
            else if(player_1 && estaVacia(this)){
                $(this).html(imagen_1);
                console.log( $(this).attr('id'));
             
           }
            else if (!player_1 && estaVacia(this)){
                $(this).html(imagen_2);
            }

             if (gano()){
                if (player_1)    
                    $('#resultado').html("Gano " + nombre_player_1);
                
                else 
                    $('#resultado').html("Gano " + nombre_player_2);
                
                setTimeout(function(){
                    location.reload();
                },3000);
            }
            else if (empataron()){
                $('#resultado').html("Empate"); 
                setTimeout(function(){
                    location.reload();
                },3000);
              }  
                
            

            player_1 = !player_1;
        });



// -----Funciones-----

        function jugadorEstaSet(jugador){
            return jugador == "" || jugador == undefined;
        }
     
    function estaVacia(elem){
        return $(elem).html() == "";
    }

    function sonIguales(img1 , img2){

        return $(img1).children().attr('class') == $(img2).children().attr('class');         
    }

    function gano (){
        return ganoHorizontal() || ganoVertical() || ganoDiagonal(); 
    }

    function empataron(){
        var estaLLena = true;
        $('.hijo').each(function(){
            estaLLena = estaLLena && !estaVacia(this);
        });

        return estaLLena;
    }
    // FORMAS DE GANAR
    function ganoHorizontal(){
        return horizontal_1() || horizontal_2() || horizontal_3();
    }

    function ganoVertical(){
        return vertical_1() || vertical_2() || vertical_3();
    } 

    function ganoDiagonal(){
        return diagonal_1() || diagonal_2();
    }
    
    // SE GANA HORIZONTAL

    function horizontal_1(){
        return !estaVacia('#a') && sonIguales('#a','#b') && sonIguales('#a','#c');
    }

    function horizontal_2(){
        return !estaVacia('#d') && sonIguales('#d','#e') && sonIguales('#d','#f');
    }

    function horizontal_3(){
        return !estaVacia('#g') && sonIguales('#g','#h') && sonIguales('#g','#i');
    }
    
    // SE GANA VERTICAL

    function vertical_1(){
        return !estaVacia('#a') && sonIguales('#a','#d') && sonIguales('#a','#g');
    }

    function vertical_2(){
        return !estaVacia('#b') && sonIguales('#b','#e') && sonIguales('#b','#h');
    }

    function vertical_3(){
        return !estaVacia('#c') && sonIguales('#c','#f') && sonIguales('#c','#i');
    }

    // SE GANA DIAGONAL

    function diagonal_1(){
        return !estaVacia('#a') && sonIguales('#a','#e') && sonIguales('#a','#i');
    }

    function diagonal_2(){
        return !estaVacia('#c') && sonIguales('#c','#e') && sonIguales('#c','#g');
    }
});
