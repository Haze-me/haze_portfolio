import {
  AppWindow, BriefcaseBusiness, Building2, Cloud, Layers, LayoutDashboard, ReceiptText,
  RefreshCw, Rocket, Server, Smartphone, Target, Wrench,
} from 'lucide-react';

const icons = {
  briefcase: BriefcaseBusiness,
  building: Building2,
  refresh: RefreshCw,
  rocket: Rocket,
  app: AppWindow,
  server: Server,
  cloud: Cloud,
  wrench: Wrench,
  layout: LayoutDashboard,
  target: Target,
  phone: Smartphone,
  layers: Layers,
  receipt: ReceiptText,
};

export default function ServiceIcon({ name, className = 'size-6' }) {
  const Icon = icons[name] ?? AppWindow;
  return <Icon className={className} aria-hidden="true" />;
}
