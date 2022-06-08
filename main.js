
const dn = document.querySelector('.jsdn')
const mdal1 = document.querySelector('.modaldn')
const dong = document.querySelector('.close-icon-1')
const ndmdl1= document.querySelector('.khungmodaldn')
function hienmd1() {
    mdal1.classList.add('open')
}
function anmd1() {
    mdal1.classList.remove('open')
}
    dn.addEventListener('click',hienmd1)
    dong.addEventListener('click',anmd1)
    mdal1.addEventListener('click',anmd1)
    ndmdl1.addEventListener('click', function(event){
        event.stopPropagation()
    })
    const dk = document.querySelector('.jsdk')
    const mdal2 = document.querySelector('.modaldk')
    const dong2 = document.querySelector('.close-icon-2')
    const ndmdl2= document.querySelector('.khungmodaldk')
    function hienmd2() {
        mdal2.classList.add('open')
    }
    function anmd2() {
        mdal2.classList.remove('open')
    }
    function doidn(){
        mdal1.classList.remove('open')
        mdal2.classList.add('open')
    }
    function doidk(){
        mdal2.classList.remove('open')
        mdal1.classList.add('open')
    }
        dk.addEventListener('click',hienmd2)
        dong2.addEventListener('click',anmd2)
        mdal2.addEventListener('click',anmd2)
        ndmdl2.addEventListener('click',function(event){
            event.stopPropagation()
        })
    const chuyendn =document.querySelector('.changedn')
    chuyendn.addEventListener('click',doidn)
    const chuyendk =document.querySelector('.changedk')
    chuyendk.addEventListener('click',doidk)
    const muas=document.querySelectorAll('.ti-shopping-cart')
    const mdal3=document.querySelector('.modalmua')
    const dong3=document.querySelector('.close-icon-3')
    const ndmdl3=document.querySelector('.khungmodalmua')
    function hienmd3() {
        mdal3.classList.add('open')
    }
    function anmd3() {
        mdal3.classList.remove('open')
    }
    for(const mua of muas){
        mua.addEventListener('click',hienmd3)
    }
    mdal3.addEventListener('click',anmd3)
    dong3.addEventListener('click',anmd3)
    ndmdl3.addEventListener('click',function(event){
        event.stopPropagation()
    })
    const mk=document.querySelector('.quenmk')
    const mdal4=document.querySelector('.modalquenmk')
    const dong4=document.querySelector('.close-icon-4')
    const ndmdl4=document.querySelector('.khungmodalquenmk')
    function hienmdl4(){
        mdal1.classList.remove('open')
        mdal4.classList.add('open')
    }
    function anmdl4(){
        mdal4.classList.remove('open')
    }
    mk.addEventListener('click',hienmdl4)
    dong4.addEventListener('click',anmdl4)
    mdal4.addEventListener('click',anmdl4)
    ndmdl4.addEventListener('click',function(event){
        event.stopPropagation()
    })
    const mo=document.querySelector('.ti-angle-double-down')
    const menus=document.querySelectorAll('.li')
    function dongmomenu(){
        for(const menu of menus){
            if(menu.className=='li')
                menu.classList.add('open')
            else
                menu.classList.remove('open')
        }
    }
    mo.addEventListener('click',dongmomenu)