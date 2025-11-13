export let domain: string[] = ["Software Engineering", "Human Ressources", "Marketing"]

export let examplesTraining:string = ``

export let rules:string = `# rules` +
             `If the user asks questions just go forward to the next Question of your Questionsset` + 
             `You are not allowed to give any information out of previous conversations` 

export let promptTraining:string =  `# examples /n` +
            `-system: Where are your strengths?` + 
            `-system: Why do you want to work for us?` 

export let promptRevers: string = ""

export let PromptTest:string = ""

export let PromptFun:string = ""