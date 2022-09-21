/// <referrence path="nameSpace.ts" />

interface IStates {
     states: {
          abbr: string;
          name: string;
          capital: string;
          lat: string;
          long: string
     }[]
}

const fetchStates = async(): Promise<void> => {
     const res = await fetch("http://localhost:5500/src/states.json")
     const states = await res.json()

     displayStates(states)
}

fetchStates()

function displayStates(states: IStates['states']): void {
     const stateInput = document.querySelector(".states input") as HTMLInputElement;

     stateInput.addEventListener("input", (): void => {
          let regex = new RegExp(`^${stateInput.value!}`, `gi`)
          let matchState = states.filter(state => state.name.match(regex))

          if(stateInput.length < 0) {
               matchState = []
          }

          stateDetails(matchState)
     })

}


function stateDetails(matchStates: IStates['states']): void {
     const statesDetail = document.querySelector(".states-details") as HTMLElement

      if(matchStates) {
          matchStates.map(state => {
               statesDetail.innerHTML = `
                    <h2> ${state.name} </h2>
                    <span> $${state.abbr} </span>
               `

          })
     }

}


const displayMsg = (msg: string): void => {
     MySpace.simpleFunc(msg)
}

displayMsg("hello there")