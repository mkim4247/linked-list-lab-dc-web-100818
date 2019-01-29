function getName(node){
  return node.name
}

function headNode(linkedList, collection){
  return collection[linkedList]
}

function next(node, collection){
  let next = node.next
  return collection[next]
}

function nodeAt(index, linkedList, collection){
  let current = headNode(linkedList, collection)

  for(let i = 0; i < index; i++){
    current = next(current, collection)
  }
  return current
}

function addressAt(index, linkedList, collection){
  let current = headNode(linkedList, collection)

  if(index === 0){
    return linkedList
  } else {
    for(let i = 0; i < index - 1; i++){
      current = next(current, collection)
    }
  }
  return current.next
}

function indexAt(node, collection, linkedList){
  let current = headNode(linkedList, collection)
  let count = 0

  while(current !== node){
    current = next(current, collection)
    count++
  }
  return count
}

function insertNodeAt(index, address, linkedList, collection){
  let prevNode = nodeAt(index - 1, linkedList, collection)
  let newNode = collection[address]
  newNode.next = prevNode.next
  prevNode.next = address
}

function deleteNodeAt(index, linkedList, collection){
  let prevNode = nodeAt(index - 1, linkedList, collection)
  let deletingNode = nodeAt(index, linkedList, collection)

  prevNode.next = deletingNode.next
}
