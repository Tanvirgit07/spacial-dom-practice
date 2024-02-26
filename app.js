const addCartButtons = document.getElementsByClassName('add-btn');
let count = 0;
let sum = 0;
let budget = 2500;
let left = 8;
for(const btn of addCartButtons){
    btn.addEventListener('click',function(event){
        const playerName = event.target.parentNode.parentNode.childNodes[1].innerText;

        const playerPrice = event.target.parentNode.parentNode.childNodes[3].childNodes[1].innerText;

        const playerCategory = event.target.parentNode.parentNode.childNodes[5].childNodes[1].innerText;

        const findLeft = document.getElementById('left_number').innerText
        

        const div = document.createElement('div')
        const p1 = document.createElement('p')
        const p2 = document.createElement('p')
        const p3 = document.createElement('p')

        p1.innerText = playerName;
        p2.innerText = playerPrice;
        p3.innerText = playerCategory;
        
        
        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(p3)
        const newDiv = document.getElementById('new_div');
        newDiv.appendChild(div);

        div.classList.add('flex')
        
        changeInnerText('total_tk',parseInt(playerPrice))
        upDateCount('count_number')
        changeBudget(playerPrice,'total_budget')
        leftChange('left_number',parseInt(findLeft));
        
    })
}

function changeInnerText(id,price){
    const findId = document.getElementById(id);
    sum = sum + price;
    findId.innerText = sum;
    changGrandTotal(sum);
}

function upDateCount(element){
    const countCart = document.getElementById(element)
    count = count + 1;
    countCart.innerText = count;

}

function changeBudget(price,element){
    const budgetChange = document.getElementById(element);
    budget = budget - price;
    budgetChange.innerText = budget;
    if(budget < 300 || budget < 0){
       tapButton();
    }
    // return budget;
}

function leftChange(element,number){
    const leftNumber = document.getElementById(element);
    number = number - 1;
    leftNumber.innerText = number;
}

function tapButton(){
    const allBtn = document.getElementsByClassName('add-btn')
    for(const singleBtn of allBtn){
        singleBtn.disabled = true;
    }
    
}

function changGrandTotal(element){
    const grandTotal = document.getElementById('grand_total')
    grandTotal.innerText = element;
    
    const applyBtn = document.getElementById('apply_btn');
    applyBtn.addEventListener('click',function(){
    
    const inputValue = document.getElementById('input_value').value.toLowerCase()
    if(inputValue === 'tanvir20'){
        const confirmBtn = document.getElementById('Confirm');
        confirmBtn.classList.remove('btn-disabled')
        element = element - (element * (20/100));
        grandTotal.innerText = element;
    }
    else{
        
    }
    
})
    
}

function hideOption(){
    const hidePart = document.getElementById('calculation_part')
    hidePart.classList.add('hidden')
    const blockPart = document.getElementById('modal')
    blockPart.classList.remove('hidden');
}

function backAgain(){
    const successPart = document.getElementById('modal')
    successPart.classList.add('hidden');
    const calculationPart = document.getElementById('calculation_part')
    calculationPart.classList.remove('hidden');
}


