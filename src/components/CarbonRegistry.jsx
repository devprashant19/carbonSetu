import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import registryProjects from "../data/registryProjects.json";
export default function CarbonRegistry() {
  const SCOPE_OPTIONS = ["contains", "equals", "starts with"];
  const FIELD_OPTIONS = ["Scope", "Country", "Project Type"];
  const navigate = useNavigate();
  const sampleProjects = registryProjects;
  const [filters, setFilters] = useState([{ field: "", op: "contains", value: "" },]);
  const [showIssuedOnly, setShowIssuedOnly] = useState(false);
  const [query, setQuery] = useState("");

  function updateFilter(index, patch) {
    setFilters(prev => prev.map((f, i) => (i === index ? { ...f, ...patch } : f)));
  }

  function addFilter() {
    setFilters(prev => [...prev, { field: "Scope", op: "contains", value: "" }]);
  }

  function removeFilter(index) {
    setFilters(prev => prev.filter((_, i) => i !== index));
  }

  const filtered = useMemo(() => {
    return sampleProjects.filter(p => {
      // text search
      if (query && !p.title.toLowerCase().includes(query.toLowerCase())) return false;

      // issued only (sample doesn't include issued flag, so this is a placeholder)
      if (showIssuedOnly) return p.id % 2 === 0; // pretend even IDs are issued

      // filters
      for (const f of filters) {
        const val = (p[f.field.toLowerCase()] || "").toString().toLowerCase();
        const needle = (f.value || "").toString().toLowerCase();
        if (!needle) continue;
        if (f.op === "contains" && !val.includes(needle)) return false;
        if (f.op === "equals" && val !== needle) return false;
        if (f.op === "starts with" && !val.startsWith(needle)) return false;
      }
      return true;
    });
  }, [filters, query, showIssuedOnly]);
  const ProjClick = (link) => {
    console.log(link);
    navigate('/registry/projects/' + link);
  }
  return (
    <div className="min-h-screen text-black bg-gray-50">
      <main className="max-w-6xl mx-auto px-4 py-8">
        <section className="bg-white p-6">
          <div className="space-y-4">
            {/* Filters toolbar */}
            <div className="flex flex-wrap gap-3  items-end">
              {filters.map((f, i) => (
                <div key={i} className="flex items-center bg-gray-100 gap-2 rounded p-2">
                  <select
                    className="px-2 py-1 "
                    value={f.field}
                    onChange={e => updateFilter(i, { field: e.target.value })}
                  >
                    {FIELD_OPTIONS.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>

                  <select
                    className="px-2 py-1"
                    value={f.op}
                    onChange={e => updateFilter(i, { op: e.target.value })}
                  >
                    {SCOPE_OPTIONS.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>

                  <input
                    className="px-2 py-1 w-48"
                    value={f.value}
                    onChange={e => updateFilter(i, { value: e.target.value })}
                    placeholder="value"
                  />

                  <button
                    className="px-2 py-1 rounded text-sm"
                    onClick={() => updateFilter(i, { value: "" })}
                    title="Clear"
                  >
                    −
                  </button>
                  <button
                    className="px-2 py-1 rounded text-sm"
                    onClick={() => addFilter()}
                    title="Add"
                  >
                    +
                  </button>

                  {filters.length > 1 && (
                    <button className="ml-2 text-red-600" onClick={() => removeFilter(i)}>Remove</button>
                  )}
                </div>
              ))}

              <div className="ml-auto flex items-center gap-3">
                <label className="flex items-center gap-2">
                  <input type="checkbox" checked={showIssuedOnly} onChange={e => setShowIssuedOnly(e.target.checked)} />
                  <span className="text-sm">Show only projects with issued credits</span>
                </label>
              </div>
            </div>

            {/* Search row */}
            <div className="flex gap-3">
              <input
                value={query}
                onChange={e => setQuery(e.target.value)}
                className="flex-1 border rounded px-3 py-2"
                placeholder="Search projects"
              />
              <button className="bg-green-600 text-white px-4 py-2 rounded">Search</button>
            </div>
          </div>
        </section>

        {/* Projects list */}
        <section className="mt-6">
          <h2 className="text-lg font-medium mb-3">Projects List</h2>

          <div className="bg-white border rounded divide-y">
            {filtered.length === 0 && (
              <div className="p-4 text-sm text-gray-500">No projects match your filters.</div>
            )}

            {filtered.map(p => (
              <div key={p.id} onClick={() => ProjClick(p.id)} className="p-4 cursor-pointer hover:bg-gray-100 flex items-center justify-between">
                <div>
                  <div className="font-medium">{p.name}</div>
                </div>
                <div className="text-sm cursor-pointer text-gray-600">View</div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
