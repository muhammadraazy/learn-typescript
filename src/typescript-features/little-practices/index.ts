interface TableData {
    readonly no: number;
    name: string;
    level: boolean;
    usage: [string]
}[]

const tableData: TableData[] = [
    { no: 1, name: "Javascript", level: true, usage: ["web development"] },
    { no: 2, name: "Python", level: false, usage: ["web development"] },
    { no: 3, name: "Java", level: true, usage: ["web development"] },
    { no: 4, name: "Dart", level: true, usage: ["web development"] },
    { no: 5, name: "Rust", level: true, usage: ["smart contract"] },
    { no: 6, name: "Solidity", level: true, usage: ["smart contract"] },
    { no: 7, name: "C#", level: true, usage: ["web development"] },
    { no: 8, name: "Golang", level: true, usage: ["web development"] },
    { no: 9, name: "C++", level: true, usage: ["web development"] },
    { no: 10, name: "Typescript", level: true, usage: ["web development"] },
]

const makeTable = (tables: TableData[]): void => {
    const table = document.querySelector(".table") as HTMLTableElement
    const tableBody = table!.children[1]
    
    tables.map(tab => {
         const tr = document.createElement("tr");
         tr.innerHTML = `
              <td> ${tab.no} </td>
              <td> ${tab.name} </td>
              <td> ${tab.level} </td>
              <td> ${tab.usage.map(use => use)}</td>
         `

         if(tableBody) {
              tableBody.append(tr)
         }
    })
}

makeTable(tableData)

const workingWithVideo = () => {
    const video = document.querySelector(".video-tutorial") as HTMLVideoElement
    const buttons = document.querySelectorAll('.tutorial .btn')

    buttons.forEach(btn => {
         btn.addEventListener("click", () => {
              btn.classList.contains('play') ? video.play()
              : btn.classList.contains("stop") ? video.pause()
              : btn.classList.contains("mute") ? video.muted = true
              : console.log('nothing')
              if(btn.classList.contains("fullscreen")) {
                   if(video.requestFullscreen) {
                        video.requestFullscreen()
                   }
              }

         })
    })
   
}

workingWithVideo()

