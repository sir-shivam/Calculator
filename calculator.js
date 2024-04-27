let string="";
let count= 2;
let count1=0;
let count2=0;
let arr=[];
let ansArr=[];
let newDiv;
let newDiv1;
let p;
const wideScreen= document.querySelector(".screen2");
const digits= document.querySelectorAll(".digit");
const del= document.querySelector(".cut");
const recent=document.querySelector(".recent");
const del_his=document.querySelector(".del-his");
const recent1=document.querySelector(".recent1");
const display = () => {
    wideScreen.innerText=string;
    if(string == "error" || string == "undefined"){
        string="";
    }
}

const show= ()=> {
    if(count1==1){
        recent1.style.visibility= "hidden";
        recent1.style.left="-900%";
    }
}

wideScreen.addEventListener("click" , () => {
    show();
})

const bracket = () => {
    if ((count%2 == 0)) {
        string=string+"(";
        lastStep="(";
    }
    else {
        string=string+")";
        lastStep=")";
    }
    count ++;
}

const create= () => {
    p = document.createElement("p");
    p.className=`p${count2}`;
    newDiv = document.createElement("div");
    newDiv.className= `ans1`;
    newDiv.classList.add(`div${count2}`);
    newDiv1=document.createElement("div");
    newDiv1.className = "ans";
    newDiv1.id = `div${count2}`;
    recent1.appendChild(p);
    (document.querySelector(`.p${count2}`)).appendChild(newDiv);
    (document.querySelector(`.p${count2}`)).appendChild(newDiv1);


}
let lastStep ;
let prevString;

Array.from(digits).forEach((button) => {
    button.addEventListener("click", (e) => {
        show();
        if(e.target.innerHTML == "="){
            try{
                arr[count2]=string;  
                string= eval(string);
                ansArr[count2]=string;
            } catch {
               string = "error";
            }
            
            display();
            create();
            document.querySelector(`.div${count2}`).innerText=`${arr[count2]}`;
            document.querySelector(`#div${count2}`).innerText=`= ${ansArr[count2]}`;
            count2++;
            document.querySelector(".del-his").style.display="block";
            document.querySelector(".empty").style.display= "none";
        }

        else if (e.target.innerHTML == "C"){
            string="";
            count=0;
            prevString="";
            lastStep="";
            display();
        }

        else if (e.target.id == "bracket") {
            bracket();
            display();
        }

        else if (e.target.id == "both") {
            if(lastStep>0) {
                    string= prevString+"(-" + lastStep + ")";
                    lastStep = ")";
            display();
        }}

        else if (e.target.id == "divide") {
            if(lastStep%1 == 0 ){
            string=string+"/";
            lastStep= "/";
            display();
            }
            else if (string==""){}
            else if (lastStep=="(" ||  lastStep==")"){}
            else {
                string = string.slice(0,-1);
                string = string+ "/";
                lastStep= "/";
                display();
            }
        }
        else if (e.target.id == "add" ) {
            if(lastStep%1==0){
                string=string+"+";
            lastStep= "+";
            display();}
            else if (lastStep=="(" ||  lastStep==")"){
                string=string+"+";
            lastStep= "+";
            display();
            }
            else {
                string = string.slice(0,-1);
                string = string+ "+";
                lastStep= "+";
                display();
            }
        }

        else if (e.target.id == "sub" ) {
            if(lastStep%1==0){
                string=string+ "-";
            lastStep= "-";
            display();}
            else if (lastStep=="(" ||  lastStep==")"){
                string=string+ "-";
                lastStep= "-";
                display();
            }
            else {
                string = string.slice(0,-1);
                string = string+ "-";
                lastStep= "-";
                display();
            }
        }
        else if (e.target.innerHTML == "X") {
            if(lastStep%1 == 0 ){
            string = string+ "*";
            lastStep= "*";
            display();}
            else if (string==""){}
            else if (lastStep=="(" ||  lastStep==")"){}
            else {
                string = string.slice(0,-1);
                string = string+ "*";
                lastStep= "*";
                display();
            }
        }
        else if (e.target.id == "bracket") {
            bracket();
            display();
        }
        else if (e.target.id == "mod") {
            if(lastStep%1 == 0 || string!= ""){
                string=string+"%";
                lastStep="%";
            display();}
        }

        else {
            prevString=string;                
                lastStep = e.target.innerHTML;
                string= string+ lastStep;
              display();
        }
    })
})

del.addEventListener("click" , ()=> {
    show();
    if(lastStep=="(" || lastStep==")" ){
        count++;
    }
    string = string.slice(0,-1);
    display();
})


recent.addEventListener("click" , () => {
    show();
    (document.querySelector(".recent1")).style.visibility = "visible";
    (document.querySelector(".recent1")).style.transition = "left 0.5s";
    (document.querySelector(".recent1")).style.left= "-500%";
    console.log("clicked clock");
    count1=1
})

del_his.addEventListener("click" , () => {
    for(count2--; count2 >=0 ; count2--) {
        document.querySelector(`.div${count2}`).innerText ="";
        document.querySelector(`#div${count2}`).innerText = "";
        document.querySelector(`.div${count2}`).remove;
        document.querySelector(`#div${count2}`).remove;
    }
    count2=0;
    document.querySelector(".del-his").style.display= "none";
    document.querySelector(".empty").style.display = "block";
    console.log(count2);
})