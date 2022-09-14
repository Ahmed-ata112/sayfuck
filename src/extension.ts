// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';


export async function command(context: vscode.ExtensionContext) {
	// get the language of the active editor and log it to the console
	const editor = vscode.window.activeTextEditor;
	if (editor) {
		const document = editor.document;
		const languageId = document.languageId;
		vscode.window.showInformationMessage(`Fuck ${languageId}!`);
	}

  }


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "sayfuck" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('sayfuck.SayIt', () => {
		command(context);
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
