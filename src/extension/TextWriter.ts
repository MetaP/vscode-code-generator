import * as fs from 'fs';
import { TextElement } from '../model/TextElement';
import { TextFragment } from '../model/TextFragment';
import { NewLine } from '../model/NewLine';
import { getConfiguredEolSequence } from './vscode-utilities';

export class TextWriter {

    constructor(
        private path: fs.PathLike
    ) {

    }

    write(elements: TextElement[]) {
        const eol = getConfiguredEolSequence();

        const writer = fs.createWriteStream(this.path);
        for(const element of elements) {
            if (element instanceof TextFragment) {
                writer.write(element.text);
            } else if (element instanceof NewLine) {
                writer.write(eol);
            }
        }
        writer.close();
    }
}