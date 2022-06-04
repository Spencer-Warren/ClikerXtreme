import { createEl } from '../HelperMethods.js'

export class saveIO {
    constructor(items) {
        this.items = items;
        // init Saving
        this.saveButton = saveIO.SaveLoadButon("save");
        //loading
        this.loadButton = saveIO.SaveLoadButon("load");
    }

    static SaveLoadButon(name) {
        var saveButton = createEl("button");
        saveButton.innerHTML = name;
        saveButton.id = name;
        return saveButton;
    }
    //actually saving
   save() {
        for (const item of this.items) {
            console.log(item)
            item.save();
        }
    }

    //load button
    load() {console.log("load")
        for (const item of this.items) {
            
            item.load();
        }
    }
}