const tree = { 
	name : "home", 
	files : ["notes.txt","todo.txt"], 
	subFolders: [	
		{ name : "payroll", 
		  files : ["paper.pdf","funds.csv"], 
		  subFolders: [] 
		}, 
		{ name: "misc", 
		  files : ["summer1.jpg","summer2.jpg", "summer3.jpg"], 
		  subFolders: [
			{ name : "logs", 
			  files : ["logs1","logs2","logs3","logs4"], 
			  subFolders: [] 
		  }] 
	}] 
}; 
const find=(name)=>(tree)=>{
    for(let file of tree.files)
    {
        //console.log(file);
        if(file==name) return true;
    }
    for(let subFolder of tree.subFolders)
    {
        if(find(name)(subFolder)) return true;
    }
    return false;
}
console.log(find("paper.pdf")(tree)); // true 
console.log(find("randomfile")(tree)); // false