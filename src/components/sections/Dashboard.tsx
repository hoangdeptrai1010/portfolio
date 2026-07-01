"use client";

import { motion } from "framer-motion";
import { BarChart3, PieChart, TrendingUp, Filter, Database, ArrowUpRight } from "lucide-react";
import { Section } from "../shared/Section";

const DASHBOARDS = [
  {
    title: "Executive Sales Performance Dashboard",
    tool: "Power BI",
    description: "Built a centralized tracking solution for global sales, regional KPIs, and product category profit margins, replacing manual weekly reports.",
    metrics: ["1.8M+ Rows Processed", "Star Schema Design", "DAX Calculations"],
    icon: BarChart3,
    span: "md:col-span-2 md:row-span-2",
  },
  {
    title: "Customer Churn Analysis",
    tool: "Excel",
    description: "Analyzed subscriber retention rates using Power Query, Pivot Tables, and Pivot Charts to identify churn risk factors.",
    metrics: ["Power Query", "Pivot Tables"],
    icon: PieChart,
    span: "md:col-span-1 md:row-span-1",
  },
  {
    title: "Regional Profitability & Forecasting",
    tool: "Power BI",
    description: "Interactive report visualizing projected revenue streams and department budget allocation efficiency.",
    metrics: ["Time-Intelligence DAX", "Excel Integration"],
    icon: TrendingUp,
    span: "md:col-span-1 md:row-span-1",
  }
];

export function Dashboard() {
  return (
    <Section id="dashboard" title="Business Intelligence" subtitle="Transforming raw datasets into strategic dashboards using Power BI and Excel." className="bg-[#0C0C0C]">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 auto-rows-[300px]">
        {DASHBOARDS.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
            className={`glass-panel rounded-3xl overflow-hidden group relative flex flex-col hover-target border border-white/10 ${project.span}`}
          >


            {/* Content */}
            <div className="relative z-10 p-8 flex flex-col h-full justify-end">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 w-fit">
                  <project.icon size={16} className="text-[#38BDF8]" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider">{project.tool}</span>
                </div>
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all group-hover:rotate-45 duration-300">
                  <ArrowUpRight size={20} className="text-white" />
                </div>
              </div>

              <h3 className="text-3xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 text-base mb-6 line-clamp-2 max-w-[90%]">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-auto">
                {project.metrics.map((metric, i) => (
                  <span key={i} className="text-xs font-bold px-4 py-2 rounded-lg bg-[#2563EB]/20 text-[#38BDF8] border border-[#2563EB]/30">
                    {metric}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* KPI Stats */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { label: "Data Sources Integrated", value: "15+", suffix: "" },
          { label: "Rows Processed", value: "5", suffix: "M+" },
          { label: "Dashboards Delivered", value: "20+", suffix: "" },
          { label: "Query Optimization", value: "85", suffix: "%" },
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass p-8 rounded-3xl text-center border border-white/5"
          >
            <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#38BDF8] mb-2">
              {stat.value}{stat.suffix}
            </div>
            <div className="text-sm font-medium text-gray-500 uppercase tracking-widest">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
