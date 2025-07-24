const sction_Number = document.getElementsByTagName('section');
const total_Section = sction_Number.length;

for(let i = 1 ; i <= total_Section ; i++){
    const list_Item = document.createElement('li')
    const link_Item = document.createElement('a')
    link_Item.href = '#section'+i
    const list_Name = document.createTextNode('Section'+i)
    link_Item.appendChild(list_Name)  
    list_Item.appendChild(link_Item)
    const list = document.getElementById('navbar__list')
    list.appendChild(list_Item).style.color = "black"
}   


