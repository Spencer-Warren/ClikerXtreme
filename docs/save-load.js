export class autoSave{
    constructor(ID){
    this.buttonid = ID
    this.saveButton = document.createElement("button")
    
    this.saveButtonName = this.saveButton.innerHTML = "Save"
    
    document.getElementById("content").appendChild(this.saveButton)
    
    
    }
}
export class autoLoad{
constructor(ID){
    this.buttonid = ID
    this.loadButton = document.createElement("button")
    this.loadButtonName = this.resetButton.innerHTML = "Load"
    document.getElementById("content").appendChild(this.resetButton)
    }
}