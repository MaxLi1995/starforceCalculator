document.getElementById("myButton").onclick = function(){
    var myStars = parseInt(document.getElementById("myStars").value);
    var myScrolls = parseInt(document.getElementById("myScrolls").value);
    var myLevel = parseInt(document.getElementById("myLevel").value);
    var myBAttack = parseInt(document.getElementById("myBAttack").value);
    var myTAttack = parseInt(document.getElementById("myTAttack").value);

    if(myBAttack >= myTAttack){
        document.getElementById("stuff").innerHTML = "invalid parameters was entered";
        return;
    }
    else{
        for (;myStars>0;myStars--){
            if (myBAttack > myTAttack){
                document.getElementById("stuff").innerHTML = "invalid parameters was entered";
                return;
            }
            else{        
                switch(myLevel){
                    case 200:
                        switch(myStars){
                            case 22:
                                myTAttack = myTAttack - 17;
                                break;
                            case 21:
                                myTAttack = myTAttack - 16;
                                break;
                            case 20:
                                myTAttack = myTAttack - 15;
                                break;
                            case 19:
                                myTAttack = myTAttack - 14;
                                break;
                            case 18:
                                myTAttack = myTAttack - 14;
                                break;
                            case 17:
                                myTAttack = myTAttack - 13;
                                break;
                            case 16:
                                myTAttack = myTAttack - 13;
                                break;
                            default:
                                myTAttack = Math.ceil(myTAttack/1.02);
                                break;
                        }
                        break;
                    case 160,170,180,190:
                        switch(myStars){
                            case 22:
                                myTAttack = myTAttack - 14;
                                break;
                            case 21:
                                myTAttack = myTAttack - 13;
                                break;
                            case 20:
                                myTAttack = myTAttack - 12;
                                break;
                            case 19:
                                myTAttack = myTAttack - 11;
                                break;
                            case 18:
                                myTAttack = myTAttack - 10;
                                break;
                            case 17:
                                myTAttack = myTAttack - 9;
                                break;
                            case 16:
                                myTAttack = myTAttack - 9;
                                break;
                            default:
                                myTAttack = myTAttack - Math.floor(myTAttack/1.02);
                                break;
                        }
                        break;
                    case 150:
                        switch(myStars){
                            case 22:
                                myTAttack = myTAttack - 13;
                                break;
                            case 21:
                                myTAttack = myTAttack - 12;
                                break;
                            case 20:
                                myTAttack = myTAttack - 11;
                                break;
                            case 19:
                                myTAttack = myTAttack - 10;
                                break;
                            case 18:
                                myTAttack = myTAttack - 9;
                                break;
                            case 17:
                                myTAttack = myTAttack - 9;
                                break;
                            case 16:
                                myTAttack = myTAttack - 8;
                                break;
                            default:
                                myTAttack = myTAttack - Math.floor(myTAttack/1.02);
                                break;
                        }
                        break;
                    
                }
            }
        }
        var difference = (myTAttack-myBAttack)/myScrolls;
    }
    document.getElementById("stuff").innerHTML = difference;
}