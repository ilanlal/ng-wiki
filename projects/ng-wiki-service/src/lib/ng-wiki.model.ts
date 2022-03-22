import { WikiThumbnail, WikiPageInterface } from "./ng-wiki.interfaces";

export class WikiPage implements WikiPageInterface {
    id: number;
    key: string;
    excerpt?: string;
    description?: string;
    matched_title?: string;
    thumbnail?: WikiThumbnail;
    title?: string;
    latest?: { id: number, timestamp: Date };
    content_model?: string;
    license?: { url: string, title: string };
    html_url?: string;
    source?: string;
    html?: string;

    constructor(id: number, key: string) {
        this.id = id;
        this.key = key;
    }
}