import * as vscode from 'vscode';
import { testGenerate } from '../test/try';

/**
 * The method that is called when this extensiuon is activated.
 * @param context
 */
export function activate(context: vscode.ExtensionContext) {

	console.log('** MetaP.CodeGenerator activated **');

	let disposable = vscode.commands.registerCommand('MetaP.CodeGenerator.Test', () => {

		// Display a message box to the user
		vscode.window.showInformationMessage('Command \'MetaP.CodeGenerator.Test\' succesful !');

		testGenerate();
	});

	context.subscriptions.push(disposable);
}

/**
 * The method that is callec when the extension is deactivated.
 */
export function deactivate() {
	console.log('** MetaP.CodeGenerator deactivated **');
}

