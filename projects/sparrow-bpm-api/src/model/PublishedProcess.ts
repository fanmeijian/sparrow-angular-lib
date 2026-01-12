import { ProcessDefinition } from "./ProcessDefinition";
import { PublishedProcessCatalog } from "./PublishedProcessCatalog";

export interface PublishedProcess{
    id: string,
    name: string,
    catalog: PublishedProcessCatalog,
    processDefinition: ProcessDefinition
}