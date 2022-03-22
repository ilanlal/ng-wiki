export interface NgWikiInterface {
    languge_code:string;
    setLanguageCode(code:string):NgWikiInterface;
    list(slug:string,limit:number):Promise<WikiResponse>;
}

export interface WikiResponse {
    pages:WikiPageInterface[];
}


export interface WikiPageInterface {
    id:number;
    key:string;
    excerpt?:string;
    description?:string;
    matched_title?:string;
    thumbnail?:WikiThumbnail;
    title?:string;
    latest?:{id:number,timestamp:Date};
    content_model?:string;
    license?:{url:string,title:string};
    html_url?:string;
    source?:string;
    html?:string;
}

export interface WikiThumbnail {
    duration?:number;
    height?:number;
    mimetype?:string;
    size?:number;
    url?:string;
    width?:number;
}

export interface WikiPageLanguage {
    code:string;
    key:string;
    name:string;
    title:string;
}
