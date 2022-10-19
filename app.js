let h1 = document.querySelector(".count")

setTimeout(()=>{
    h1.innerHTML= "9"
    console.log("9")
    setTimeout(()=>{
        h1.innerHTML="8"
        console.log("8")
        setTimeout(()=>{
            h1.innerHTML="7"
            console.log("7")
            setTimeout(()=>{
                h1.innerHTML="6"
                console.log("6")
                setTimeout(()=>{
                    h1.innerHTML="5"
                    console.log("5")
                    setTimeout(()=>{
                        h1.innerHTML="4"
                        console.log("4")
                        setTimeout(()=>{
                            h1.innerHTML="3"
                            console.log("3")
                            setTimeout(()=>{
                                h1.innerHTML="2"
                                console.log("2")
                                setTimeout(()=>{
                                    h1.innerHTML="1"
                                    console.log("1")
                                    setTimeout(()=>{
                                        h1.innerHTML="Happy New Year"
                                        console.log("new year")
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)