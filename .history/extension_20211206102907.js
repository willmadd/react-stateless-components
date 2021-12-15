// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
 function activate (context) {

	let disposable = vscode.commands.registerCommand('react-stateless-components.reactStatelessComponent', async function () {

		const name = await vscode.window.showInputBox({prompt: 'Component Name', ignoreFocusOut: true})

		vscode.window.showInformationMessage(`--->${name}`);

		vscode.workspace.updateWorkspaceFolders(0,
			undefined,
			{uri: vscode.Uri.parse(this.workspaceRoot),name:'src/hello'});
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
