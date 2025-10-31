"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Car, Bike, Truck, Search, Loader2 } from "lucide-react";
import CalculadoraPremio from "@/components/CalculadoraPremio";

type VehicleType = "cars" | "motorcycles" | "trucks";

interface Brand {
  code: string;
  name: string;
}

interface Model {
  code: string;
  name: string;
}

interface Year {
  code: string;
  name: string;
}

interface FipeResult {
  vehicleType: number;
  price: string;
  brand: string;
  model: string;
  modelYear: number;
  fuel: string;
  codeFipe: string;
  referenceMonth: string;
  fuelAcronym: string;
}

export default function FipeConsulta() {
  const [vehicleType, setVehicleType] = useState<VehicleType>("cars");
  const [brands, setBrands] = useState<Brand[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>("");
  const [models, setModels] = useState<Model[]>([]);
  const [selectedModel, setSelectedModel] = useState<string>("");
  const [years, setYears] = useState<Year[]>([]);
  const [selectedYear, setSelectedYear] = useState<string>("");
  const [result, setResult] = useState<FipeResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [loadingBrands, setLoadingBrands] = useState(false);
  const [loadingModels, setLoadingModels] = useState(false);
  const [loadingYears, setLoadingYears] = useState(false);

  // Fetch brands when vehicle type changes
  useEffect(() => {
    fetchBrands();
    // Reset selections
    setSelectedBrand("");
    setModels([]);
    setSelectedModel("");
    setYears([]);
    setSelectedYear("");
    setResult(null);
  }, [vehicleType]);

  // Fetch models when brand changes
  useEffect(() => {
    if (selectedBrand) {
      fetchModels();
      setSelectedModel("");
      setYears([]);
      setSelectedYear("");
      setResult(null);
    }
  }, [selectedBrand]);

  // Fetch years when model changes
  useEffect(() => {
    if (selectedModel) {
      fetchYears();
      setSelectedYear("");
      setResult(null);
    }
  }, [selectedModel]);

  async function fetchBrands() {
    setLoadingBrands(true);
    try {
      const res = await fetch(`/api/fipe?path=${vehicleType}/brands`);
      const data = await res.json();
      setBrands(data);
    } catch (error) {
      console.error("Error fetching brands:", error);
    } finally {
      setLoadingBrands(false);
    }
  }

  async function fetchModels() {
    setLoadingModels(true);
    try {
      const res = await fetch(`/api/fipe?path=${vehicleType}/brands/${selectedBrand}/models`);
      const data = await res.json();
      setModels(data);
    } catch (error) {
      console.error("Error fetching models:", error);
    } finally {
      setLoadingModels(false);
    }
  }

  async function fetchYears() {
    setLoadingYears(true);
    try {
      const res = await fetch(`/api/fipe?path=${vehicleType}/brands/${selectedBrand}/models/${selectedModel}/years`);
      const data = await res.json();
      setYears(data);
    } catch (error) {
      console.error("Error fetching years:", error);
    } finally {
      setLoadingYears(false);
    }
  }

  async function fetchPrice() {
    setLoading(true);
    try {
      const res = await fetch(`/api/fipe?path=${vehicleType}/brands/${selectedBrand}/models/${selectedModel}/years/${selectedYear}`);
      const data = await res.json();
      setResult(data);
    } catch (error) {
      console.error("Error fetching price:", error);
    } finally {
      setLoading(false);
    }
  }

  const vehicleTypes = [
    { value: "cars" as VehicleType, label: "Carros", icon: Car },
    { value: "motorcycles" as VehicleType, label: "Motos", icon: Bike },
    { value: "trucks" as VehicleType, label: "Caminhões", icon: Truck },
  ];

  return (
    <div className="space-y-6">
      {/* Vehicle Type Selector */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-3">
          Tipo de Veículo
        </label>
        <div className="grid grid-cols-3 gap-4">
          {vehicleTypes.map(({ value, label, icon: Icon }) => (
            <button
              key={value}
              onClick={() => setVehicleType(value)}
              className={`p-4 rounded-lg border-2 transition-all flex flex-col items-center gap-2 ${
                vehicleType === value
                  ? "border-aura-primary bg-blue-50"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <Icon className="w-6 h-6" />
              <span className="font-semibold text-sm">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Brand Selector */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Marca
        </label>
        <select
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
          disabled={loadingBrands || brands.length === 0}
          className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-aura-primary focus:border-transparent"
        >
          <option value="">
            {loadingBrands ? "Carregando marcas..." : "Selecione a marca"}
          </option>
          {brands.map((brand) => (
            <option key={brand.code} value={brand.code}>
              {brand.name}
            </option>
          ))}
        </select>
      </div>

      {/* Model Selector */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Modelo
        </label>
        <select
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
          disabled={!selectedBrand || loadingModels || models.length === 0}
          className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-aura-primary focus:border-transparent disabled:bg-slate-100"
        >
          <option value="">
            {loadingModels ? "Carregando modelos..." : "Selecione o modelo"}
          </option>
          {models.map((model) => (
            <option key={model.code} value={model.code}>
              {model.name}
            </option>
          ))}
        </select>
      </div>

      {/* Year Selector */}
      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Ano
        </label>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          disabled={!selectedModel || loadingYears || years.length === 0}
          className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-aura-primary focus:border-transparent disabled:bg-slate-100"
        >
          <option value="">
            {loadingYears ? "Carregando anos..." : "Selecione o ano"}
          </option>
          {years.map((year) => (
            <option key={year.code} value={year.code}>
              {year.name}
            </option>
          ))}
        </select>
      </div>

      {/* Consult Button */}
      <button
        onClick={fetchPrice}
        disabled={!selectedYear || loading}
        className="w-full bg-aura-primary text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:bg-slate-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Consultando...
          </>
        ) : (
          <>
            <Search className="w-5 h-5" />
            Consultar Valor FIPE
          </>
        )}
      </button>

      {/* Result */}
      {result && (
        <>
        <Card className="p-6 bg-gradient-to-br from-blue-50 to-white border-l-4 border-l-aura-primary">
          <h3 className="text-xl font-bold text-aura-primary mb-4">
            Resultado da Consulta
          </h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center pb-3 border-b">
              <span className="text-sm font-semibold text-slate-600">Valor FIPE</span>
              <span className="text-2xl font-bold text-green-600">{result.price}</span>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-slate-600">Marca</p>
                <p className="text-slate-800">{result.brand}</p>
              </div>
              <div>
                <p className="font-semibold text-slate-600">Modelo</p>
                <p className="text-slate-800">{result.model}</p>
              </div>
              <div>
                <p className="font-semibold text-slate-600">Ano</p>
                <p className="text-slate-800">{result.modelYear}</p>
              </div>
              <div>
                <p className="font-semibold text-slate-600">Combustível</p>
                <p className="text-slate-800">{result.fuel}</p>
              </div>
              <div>
                <p className="font-semibold text-slate-600">Código FIPE</p>
                <p className="text-slate-800">{result.codeFipe}</p>
              </div>
              <div>
                <p className="font-semibold text-slate-600">Referência</p>
                <p className="text-slate-800">{result.referenceMonth}</p>
              </div>
            </div>
          </div>
        </Card>
        
        <CalculadoraPremio valorFipe={parseFloat(result.price.replace(/[^0-9,]/g, '').replace(',', '.'))} />
        </>
      )}
    </div>
  );
}
