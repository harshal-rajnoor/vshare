
const vscode = require('vscode');



/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	
	console.log('Congratulations, your extension "vshare" is now active!');


	let disposable = vscode.commands.registerCommand('vshare.vshare', function () {
		

	
		vscode.window.showInformationMessage('Vshare!', "Generate Link");
	});

	context.subscriptions.push(disposable);

	let readme ="Readme.md"
	context.subscriptions.push(
		vscode.commands.registerCommand('vshare.Vsask',()=>{

			vscode.window.showInformationMessage('AnyThing Wrong Vshare !',readme,"Ask")
			.then(selection=>{
				if(selection===readme){
					vscode.env.openExternal(vscode.Uri.parse('https://github.com/adityasimant/vshare/blob/main/README.md'))
				}
			})
		})
	)
}


function deactivate() {}

module.exports = {
	activate,
	deactivate
}
