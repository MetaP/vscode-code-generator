// import path = require('path');
// import * as fs from 'fs';
// import * as vscode from 'vscode';
// import * as path from 'path';

import { TextWriter} from '../extension/TextWriter';
import { TextElement } from '../model/TextElement';
import { TextFragment } from '../model/TextFragment';
import { NewLine } from '../model/NewLine';

export function testGenerate() {
    // const workspaceFolders = vscode.workspace.workspaceFolders;
    // if (workspaceFolders) {
    //     const folder = w
    // }

    // const folder = vscode.workspace.workspaceFolders![0].uri.path;
    
    //const filePath = path.join(folder, 'generated.txt');
 
    const content: TextElement[] = [ 
        new TextFragment('This is the first line.'), new NewLine(),
        new TextFragment('This is the second line.'), new NewLine(),
        new TextFragment('This is the third line.')
    ];
 
    const path = 'C:/Paul/Try/Test/generated.txt';
    const writer = new TextWriter(path);
 
    writer.write(content);
}