export interface Attachment {
  name: string,
  url?: string,
  seq?: number,
  bucket: string,
  region: string,
  path: string,
  hash: string,
  type?: string,
  size?: number,
  speed?:number,
  progress?:number,
  file?: File,

}
