/* This file is intented to contain VSCode-related utilities */

import os = require('os');
import * as vscode from 'vscode';

/**
 * Determins the configured end-of-line (EOL) sequence.  
 * Can be set via File | Preferences | Settings [User | Workspace] Text Editor | Files | Eol
 * or settings.json { "files.eol": "auto" | "\n" | "\r\n" } 
 * @returns 
 */
export function getConfiguredEolSequence(): string {

    // Get the 'files.eol' configuration.
    // It is either '/n', '/r/n' or 'auto'
    const configuration = vscode.workspace.getConfiguration('files');
    const eol = <string>configuration.get('eol');

    // If 'auto', use the operating system's default.
    return eol === 'auto' ? os.EOL : eol;
}