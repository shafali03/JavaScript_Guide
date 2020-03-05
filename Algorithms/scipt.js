
// input: (2 -> 4 -> 3) + (5 -> 6 -> 4)

// output: 7 -> 0 -> 8

// Explanation: 342 + 465 = 807



var addTwoNumber = function(l1, l2) {
  // const a = []
  let result = new ListNode(0)
  let currentNode = result
  let carryOver = 0

  while (l1 != null || l2 != null) {
    let v1 = 0
    let v2 = 0
    if (l1 != null) v1 = l1.val 
    if (l2 != null) v2 = l2.val 

    let sum = val + v2 + carryOver
    carryOver = Math.floor(sum / 10)
    sum = sum % 10
    currentNode.next = new ListNode(sum)
    // a.push(sum)

    currentNode = currentNode.next
    if (l1 != null) l1 = l1.next
    if (l2 != null) l2 = l2.next
  }
  // console.log(a)

  if (carryOver > 0) {
    currentNode.next = new ListNode(carry)
  } 

  return result.next
}


// Input: [2,4,3]
//        [5,6,4]


// stdout [7, 10, 7]