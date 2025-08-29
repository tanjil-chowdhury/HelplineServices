// heart function
function heartNumber(id) {
  const heartValue = document.getElementById(id).innerText
  return parseInt(heartValue)
}

let hearts = document.getElementsByClassName('heart')

for (let i = 0; i < hearts.length; i++) {
  hearts[i].addEventListener('click', function () {
    let heartValue = heartNumber('heart-count')
    let heartUp = heartValue + 1
    document.getElementById('heart-count').innerText = heartUp
    alert('Number added...')
  })
}
// copy number function
function copyNumber(id) {
  let text = document.getElementById(id).innerText
  navigator.clipboard.writeText(text)
  alert('Copied ' + text)
  let copyCount = parseInt(document.getElementById('copy-count').innerText)
  document.getElementById('copy-count').innerText = copyCount + 1
}

// calling function

let coin = document.getElementById('coin').innerText
for (let i = 1; i <= 9; i++) {
  let btn = document.getElementById('call' + i)
  let title = document.getElementById('title' + i)
  let num = document.getElementById('num' + i)

  if (btn && title && num) {
    btn.addEventListener('click', function () {
      let name = title.innerText
      let number = num.innerText

      let now = new Date()
      let time = now.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })

      let coin = parseInt(document.getElementById('coin').innerText)

      if (coin >= 20) {
        alert('Calling ' + name + ' ' + number)

        let newCoin = coin - 20
        document.getElementById('coin').innerText = newCoin

        let entry = document.createElement('div')
        entry.className = 'bg-[#FAFAFA] w-[320px] mx-auto p-2 rounded-lg mt-4'

        entry.innerHTML = `
                <div class="flex justify-between">
                    <div>
                        <p class="font-semibold text-[18px]">${name}</p>
                        <p class="text-[18px]">${number}</p>
                    </div>
                    <div class="text-xs text-gray-500 ">Time: ${time}</div>
                </div>
                `

        document.getElementById('clearAll').appendChild(entry)
      } else {
        alert('You do not have efficient coin')
      }
    })
  }
}

document.getElementById('clearBtn').addEventListener('click', function () {
  document.getElementById('clearAll').innerHTML = ''
})
