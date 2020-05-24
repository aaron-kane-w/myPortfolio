// Onload run createKeys
window.onload = function() {
  createKeys()
}

// Create quick grab functions for creating elements & appending
function createNode(elem) {
  return document.createElement(elem)
}
function append(parent, child1, child2) {
  return parent.appendChild(child1, child2)
}

// Grab existing DOM Elements
const addItemsDiv = document.getElementById('addItems')
const main = document.querySelector('main')
const ul = document.getElementById('list')

// Function for Input & Add Button
function createKeys() {
  const input = createNode('input')
  append(addItemsDiv, input)

  const addBtn = createNode('button')
  addBtn.innerText = 'add'
  addBtn.classList.add('addBtn')
  append(addItemsDiv, addBtn)

  addBtn.addEventListener('click', addItem)

  input.addEventListener('keyup', (e) => {
    if (e.keyCode === 13) 
      addItem()
  })
}

// Function for items being added to the list
function addItem() {
  const input = document.querySelector('input')
  input.focus() 
  const item = input.value

  // As long as there's some data in input then run these steps
  if (item.length > 0) {
    const li = createNode('li')
    li.innerText = input.value
    const span = createNode('span')

    // Done Button
    const doneBtn = createNode('h6')
    doneBtn.innerHTML = '<i class="far fa-check-circle"></i>'
    doneBtn.classList.add('doneBtn')
    
    doneBtn.addEventListener('click', () => {
      li.classList.toggle('doneItem')
      deleteBtn.style.color = '#000'
    
      if (li.classList.length === 0) {
        doneBtn.style.color = '#000'
        li.style.color = '#000'
      }
      if (li.classList.length === 1) {
        doneBtn.style.color = 'rgba(39, 188, 9, 0.8)'
        li.style.color = '#777'
      }
    })

    // Delete Button
    const deleteBtn = createNode('h6')
    deleteBtn.innerHTML= '<i class="far fa-times-circle"></i>'
    deleteBtn.classList.add('deleteBtn')

    deleteBtn.addEventListener('click', () => {
      let parentLi = span.parentElement
      parentLi.remove()
    })

    // add item to the list with the done and delete button
    span.append(doneBtn, deleteBtn)
    li.append(span)
    ul.append(li)

    // clear input
    input.value = ''
  } 
}






