const asciiName = document.getElementById('ascii-name');
const projectsNavBtn = document.getElementById('projects');
const skillsNavBtn = document.getElementById('skills');
const contactNavBtn = document.getElementById('contact');
const projectWindows = document.querySelectorAll('.project-section');

projectsNavBtn.addEventListener('click', ()=> {
    document.getElementById("projects-section").scrollIntoView();
});

skillsNavBtn.addEventListener('click', ()=> {
    document.getElementById("skills-section").scrollIntoView();
});

contactNavBtn.addEventListener('click', ()=> {
    document.getElementById("contact-section").scrollIntoView();
});


for(let window of projectWindows){
    window.childNodes[1].childNodes[1].childNodes[1].childNodes[3].addEventListener('click', ()=>{ // min
        window.style.animation = "shrink 2s";
        setTimeout(()=> {
            window.style.animation = "";
        },2000);
    });
    window.childNodes[1].childNodes[1].childNodes[1].childNodes[5].addEventListener('click', ()=>{ // max
        let beforeGrid = window.style.gridArea;
        let beforeIcon = window.childNodes[1].childNodes[1].childNodes[1].childNodes[5].innerHTML;
        window.style.gridArea = "1 / 1 / span 2 / span 2 ";
        window.childNodes[1].childNodes[1].childNodes[1].childNodes[5].innerHTML = `<div><i class="fa-sharp fa-regular fa-window-restore" style="color: #cccccc;padding: 4px 0px;"></i></div>`;
        document.getElementById("projects-section").scrollIntoView();
        window.childNodes[1].childNodes[1].childNodes[1].childNodes[5].addEventListener('click', ()=>{
            window.style.gridArea = beforeGrid;
            window.childNodes[1].childNodes[1].childNodes[1].childNodes[5].innerHTML = beforeIcon;
        });
    });
    window.childNodes[1].childNodes[1].childNodes[1].childNodes[7].addEventListener('click', ()=>{ // close
        window.style.opacity = 0;
        setTimeout(()=> {
            window.style.opacity = 1
        },2000);
    });
}


const nameBanner = () => {
    if(window.innerWidth < 1050) {
        asciiName.textContent = `   
    mmm                       #
      #   mmm    mmm    mmm   #mmm
      #  "   #  #"  "  #" "#  #" "#
      #  m"""#  #      #   #  #   #
  "mmm"  "mm"#  "#mm"  "#m#"  ##m#"`;
        return;
    }

    if(window.innerWidth < 1800){
        asciiName.textContent = `    
    mmmmm                                mm
    """##                                ##
       ##   m#####m   m#####m   m####m   ##m###m
       ##   " mmm##  ##"    "  ##"  "##  ##"  "##
       ##  m##"""##  ##        ##    ##  ##    ##
 #mmmmm##  ##mmm###  "##mmmm#  "##mm##"  ###mm##"
  """""     """" ""    """""     """"    "" """"`;
      return;
    }
    if(window.innerWidth >= 1800){
        asciiName.textContent = `
    mmmmm                                mm                  mmmmmm
    """##                                ##                  ##""""##
       ##   m#####m   m#####m   m####m   ##m###m             ##    ##   m####m    m####m
       ##   " mmm##  ##"    "  ##"  "##  ##"  "##            #######   ##"  "##  ##mmmm##
       ##  m##"""##  ##        ##    ##  ##    ##            ##  "##m  ##    ##  ##""""""
 #mmmmm##  ##mmm###  "##mmmm#  "##mm##"  ###mm##"            ##    ##  "##mm##"  "##mmmm#
  """""     """" ""    """""     """"    "" """              ""    """   """"      """""`
      return;
    }
}

window.addEventListener('resize',()=> {
    nameBanner();
})