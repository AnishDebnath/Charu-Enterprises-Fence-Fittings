import { Layers, Cpu, Droplets, Sparkles, CheckCircle2, PackageCheck } from 'lucide-react';

export interface ImprovementItem {
  number: string;
  title: string;
  description: string;
  icon: typeof Layers;
}

export const defaultImprovements: ImprovementItem[] = [
  { number: '01', title: 'Raw Steel Testing', description: 'Carbon steel tested for tensile strength and gauge thickness before stamping.', icon: Layers },
  { number: '02', title: 'Precision Die Stamping', description: 'High-tonnage stamping presses ensure clean edges and exact bolt hole spacing.', icon: Cpu },
  { number: '03', title: 'Chemical Surface Pickling', description: 'Acid cleaning and flux treatment remove scale for permanent zinc bonding.', icon: Droplets },
  { number: '04', title: 'ASTM A153 Galvanizing', description: 'Molten zinc bath provides a thick 85+ micron coating for high corrosion resistance.', icon: Sparkles },
  { number: '05', title: 'Fitment & Load Testing', description: 'Calibrated testing ensures perfect pipe fit and mechanical shear strength.', icon: CheckCircle2 },
  { number: '06', title: 'Export Pallet Packing', description: 'Weather-tight bags and banded pallets packed securely for ocean container transit.', icon: PackageCheck },
];
