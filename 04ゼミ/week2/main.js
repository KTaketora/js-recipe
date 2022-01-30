const addButton = document.getElementById("add-button")
const container = document.getElementById("memo-container")
const memoInput = document.getElementById("memo-input")

//追加ボタンを押したときの処理
addButton.onclick = function () {
  const text = memoInput.value

  const card = document.createElement("div")
  card.className = "card"

  const memo = document.createElement("div")
  memo.className = "memo"
  memo.textContent = text

  card.append(memo)

  const deleteButton = document.createElement("button")
  deleteButton.className = "delete"
  deleteButton.textContent = "削除"

  deleteButton.onclick = function () {
    card.remove()
  }
  card.append(deleteButton)

  container.append(card)

  memoInput.value = ""

  console.log(memo.textContent)
}
