export * from './contract.service';
import { ContractService } from './contract.service';
export * from './finance.service';
import { FinanceService } from './finance.service';
export * from './material.service';
import { MaterialService } from './material.service';
export * from './purchase.service';
import { PurchaseService } from './purchase.service';
export * from './warehouse.service';
import { WarehouseService } from './warehouse.service';
export const APIS = [ContractService, FinanceService, MaterialService, PurchaseService, WarehouseService];