export class autoSave {
    constructor(ID) {

        this.saveButton = document.createElement("button")
        this.saveButton.id = ID
        this.saveButtonName = this.saveButton.innerHTML = "Save"

        document.getElementById("content").appendChild(this.saveButton)
    }
}

export class autoLoad {
    constructor(ID) {
        this.buttonid = ID
        this.loadButton = document.createElement("button")
        this.loadButtonName = this.loadButton.innerHTML = "Load"
        document.getElementById("content").appendChild(this.resetButton)
    }
}