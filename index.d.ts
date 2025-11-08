declare module '@apiverve/ifsclookup' {
  export interface ifsclookupOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface ifsclookupResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class ifsclookupWrapper {
    constructor(options: ifsclookupOptions);

    execute(callback: (error: any, data: ifsclookupResponse | null) => void): Promise<ifsclookupResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: ifsclookupResponse | null) => void): Promise<ifsclookupResponse>;
    execute(query?: Record<string, any>): Promise<ifsclookupResponse>;
  }
}
