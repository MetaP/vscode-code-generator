import { TextElement } from "./TextElement";

export class TextFragment implements TextElement {
    constructor(
        public readonly text: string
    ) {}
}