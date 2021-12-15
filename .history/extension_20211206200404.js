// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

const validate = (name) => {
	if (!name) {
	  return 'Name is required';
	}
	if (name.includes(' ')) {
	  return 'Spaces are not allowed';
	}
	// no errors
	return null;
}

/**
 * @param {vscode.ExtensionContext} context
 */
 function activate (context) {

	let disposable = vscode.commands.registerCommand('react-stateless-components.reactStatelessComponent', async function () {

		const name = await vscode.window.showInputBox({prompt: 'Component Name', ignoreFocusOut: true, validateInput: validate})

		vscode.window.showInformationMessage(`--->${name}`);



		vscode.workspace.updateWorkspaceFolders(0,
			undefined,
			{uri: vscode.Uri.parse(`${this.workspaceRoot}/src/`),name:'components'});
	});
	const wsedit = new vscode.WorkspaceEdit();
	console.log('CONSOLC CONSOLE4', vscode.workspace.workspaceFolders[0]);
	vscode.window.showInformationMessage(`ttttt${vscode.workspace.workspaceFolders[0].uri}`);
const wsPath = vscode.workspace.workspaceFolders[0].uri.fsPath; // gets the path of the first workspace folder
vscode.window.showInformationMessage(`--ccc->${wsPath}`);
const filePath = vscode.Uri.file(wsPath + '/hello/world.md');

wsedit.createFile(filePath, { ignoreIfExists: true });
vscode.workspace.applyEdit(wsedit);
vscode.window.showInformationMessage('Created a new file: hello/world.md');

	context.subscriptions.push(disposable);
}

// const create = (absoluteDuckPath) => {
// 	if (fs.existsSync(absoluteDuckPath)) {
// 	  const duck: string = path.basename(absoluteDuckPath);
	  
// 	  throw new DuckExistError(`'${duck}' already exists`);
// 	}
  
// 	try {
// 	  // create the directory
// 	  fs.mkdirSync(absoluteDuckPath);
	  
// 	  this.duckFiles.forEach((file: string) => {
// 		const filename = `${file}${this.extension}`;
// 		const fullpath = path.join(absoluteDuckPath, filename);
  
// 		fs.writeFileSync(fullpath, `/* ${filename} */`);
// 	  });
// 	} catch (err) {
// 	  // log?
// 	  console.log('Error', err.message);
  
// 	  throw err;
// 	}
//   }

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
