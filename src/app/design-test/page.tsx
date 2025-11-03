export default function DesignTestPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <header className="border-b border-gray-200 pb-8">
          <h1 className="text-6xl font-bold text-deep-slate-900 mb-2">
            Blueprint Lead Design System
          </h1>
          <p className="text-xl text-deep-slate-600">
            Complete design token showcase for Phase 2 verification
          </p>
          <p className="text-sm text-deep-slate-500 mt-2">
            Note: This page will be deleted in Phase 8 (Polish Agent)
          </p>
        </header>

        {/* Color Palettes */}
        <section className="space-y-8">
          <div>
            <h2 className="mb-4">Color Palettes</h2>
            <p className="text-deep-slate-600 mb-6">
              Blueprint Lead uses Deep Slate as the primary color and Emerald Green as the accent color.
            </p>
          </div>

          {/* Deep Slate */}
          <div>
            <h3 className="mb-4 text-deep-slate-900">Deep Slate (Primary)</h3>
            <div className="grid grid-cols-11 gap-2">
              <div className="space-y-2">
                <div className="h-20 rounded bg-deep-slate-50 border border-gray-300"></div>
                <p className="text-xs font-mono">50</p>
                <p className="text-xs font-mono text-deep-slate-500">#f8fafc</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded bg-deep-slate-100 border border-gray-300"></div>
                <p className="text-xs font-mono">100</p>
                <p className="text-xs font-mono text-deep-slate-500">#f1f5f9</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded bg-deep-slate-200"></div>
                <p className="text-xs font-mono">200</p>
                <p className="text-xs font-mono text-deep-slate-500">#e2e8f0</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded bg-deep-slate-300"></div>
                <p className="text-xs font-mono">300</p>
                <p className="text-xs font-mono text-deep-slate-500">#cbd5e1</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded bg-deep-slate-400"></div>
                <p className="text-xs font-mono">400</p>
                <p className="text-xs font-mono text-deep-slate-500">#94a3b8</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded bg-deep-slate-500"></div>
                <p className="text-xs font-mono text-white">500</p>
                <p className="text-xs font-mono text-deep-slate-500">#64748b</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded bg-deep-slate-600"></div>
                <p className="text-xs font-mono text-white">600</p>
                <p className="text-xs font-mono text-deep-slate-500">#475569</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded bg-deep-slate-700"></div>
                <p className="text-xs font-mono text-white">700</p>
                <p className="text-xs font-mono text-deep-slate-500">#334155</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded bg-deep-slate-800"></div>
                <p className="text-xs font-mono text-white">800</p>
                <p className="text-xs font-mono text-deep-slate-500">#1e293b</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded bg-deep-slate-900"></div>
                <p className="text-xs font-mono text-white">900</p>
                <p className="text-xs font-mono text-deep-slate-500">#0f172a</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded bg-deep-slate-950"></div>
                <p className="text-xs font-mono text-white">950</p>
                <p className="text-xs font-mono text-deep-slate-500">#020617</p>
              </div>
            </div>
          </div>

          {/* Emerald Accent */}
          <div>
            <h3 className="mb-4 text-deep-slate-900">Emerald Green (Accent)</h3>
            <div className="grid grid-cols-11 gap-2">
              <div className="space-y-2">
                <div className="h-20 rounded bg-emerald-accent-50 border border-gray-300"></div>
                <p className="text-xs font-mono">50</p>
                <p className="text-xs font-mono text-deep-slate-500">#ecfdf5</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded bg-emerald-accent-100 border border-gray-300"></div>
                <p className="text-xs font-mono">100</p>
                <p className="text-xs font-mono text-deep-slate-500">#d1fae5</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded bg-emerald-accent-200"></div>
                <p className="text-xs font-mono">200</p>
                <p className="text-xs font-mono text-deep-slate-500">#a7f3d0</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded bg-emerald-accent-300"></div>
                <p className="text-xs font-mono">300</p>
                <p className="text-xs font-mono text-deep-slate-500">#6ee7b7</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded bg-emerald-accent-400"></div>
                <p className="text-xs font-mono">400</p>
                <p className="text-xs font-mono text-deep-slate-500">#34d399</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded bg-emerald-accent-500"></div>
                <p className="text-xs font-mono text-white">500</p>
                <p className="text-xs font-mono text-deep-slate-500">#10b981</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded bg-emerald-accent-600"></div>
                <p className="text-xs font-mono text-white">600</p>
                <p className="text-xs font-mono text-deep-slate-500">#059669</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded bg-emerald-accent-700"></div>
                <p className="text-xs font-mono text-white">700</p>
                <p className="text-xs font-mono text-deep-slate-500">#047857</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded bg-emerald-accent-800"></div>
                <p className="text-xs font-mono text-white">800</p>
                <p className="text-xs font-mono text-deep-slate-500">#065f46</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded bg-emerald-accent-900"></div>
                <p className="text-xs font-mono text-white">900</p>
                <p className="text-xs font-mono text-deep-slate-500">#064e3b</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded bg-emerald-accent-950"></div>
                <p className="text-xs font-mono text-white">950</p>
                <p className="text-xs font-mono text-deep-slate-500">#022c22</p>
              </div>
            </div>
          </div>

          {/* Semantic Colors */}
          <div>
            <h3 className="mb-4 text-deep-slate-900">Semantic Colors (CSS Variables)</h3>
            <div className="grid grid-cols-5 gap-4">
              <div className="space-y-2">
                <div className="h-20 rounded border-2 border-gray-300" style={{ backgroundColor: 'var(--color-primary)' }}></div>
                <p className="text-xs font-mono">--color-primary</p>
                <p className="text-xs text-deep-slate-500">Deep Slate 700</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded border-2 border-gray-300" style={{ backgroundColor: 'var(--color-primary-dark)' }}></div>
                <p className="text-xs font-mono">--color-primary-dark</p>
                <p className="text-xs text-deep-slate-500">Deep Slate 800</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded border-2 border-gray-300" style={{ backgroundColor: 'var(--color-accent)' }}></div>
                <p className="text-xs font-mono">--color-accent</p>
                <p className="text-xs text-deep-slate-500">Emerald 500</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded border-2 border-gray-300" style={{ backgroundColor: 'var(--color-accent-dark)' }}></div>
                <p className="text-xs font-mono">--color-accent-dark</p>
                <p className="text-xs text-deep-slate-500">Emerald 600</p>
              </div>
              <div className="space-y-2">
                <div className="h-20 rounded border-2 border-gray-300" style={{ backgroundColor: 'var(--color-accent-light)' }}></div>
                <p className="text-xs font-mono">--color-accent-light</p>
                <p className="text-xs text-deep-slate-500">Emerald 100</p>
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="space-y-8">
          <div>
            <h2 className="mb-4">Typography</h2>
            <p className="text-deep-slate-600 mb-6">
              Blueprint Lead uses Inter font family for all text.
            </p>
          </div>

          {/* Headings */}
          <div>
            <h3 className="mb-4">Heading Scale</h3>
            <div className="space-y-4 border-l-4 border-emerald-accent-500 pl-6">
              <div>
                <h1 className="mb-1">Heading 1 - 3rem (48px)</h1>
                <p className="text-xs font-mono text-deep-slate-500">
                  text-5xl font-semibold leading-tight
                </p>
              </div>
              <div>
                <h2 className="mb-1">Heading 2 - 2.25rem (36px)</h2>
                <p className="text-xs font-mono text-deep-slate-500">
                  text-4xl font-semibold leading-tight
                </p>
              </div>
              <div>
                <h3 className="mb-1">Heading 3 - 1.875rem (30px)</h3>
                <p className="text-xs font-mono text-deep-slate-500">
                  text-3xl font-semibold leading-snug
                </p>
              </div>
              <div>
                <h4 className="mb-1">Heading 4 - 1.5rem (24px)</h4>
                <p className="text-xs font-mono text-deep-slate-500">
                  text-2xl font-semibold leading-snug
                </p>
              </div>
              <div>
                <h5 className="mb-1">Heading 5 - 1.25rem (20px)</h5>
                <p className="text-xs font-mono text-deep-slate-500">
                  text-xl font-semibold leading-normal
                </p>
              </div>
              <div>
                <h6 className="mb-1">Heading 6 - 1.125rem (18px)</h6>
                <p className="text-xs font-mono text-deep-slate-500">
                  text-lg font-semibold leading-normal
                </p>
              </div>
            </div>
          </div>

          {/* Body Text */}
          <div>
            <h3 className="mb-4">Body Text</h3>
            <div className="space-y-4">
              <div>
                <p className="text-xl mb-2">
                  Large body text - 1.25rem (20px) - Ideal for hero sections and important callouts
                </p>
                <p className="text-xs font-mono text-deep-slate-500">text-xl</p>
              </div>
              <div>
                <p className="mb-2">
                  Base body text - 1rem (16px) - Default paragraph text with relaxed line height for optimal readability
                </p>
                <p className="text-xs font-mono text-deep-slate-500">text-base leading-relaxed</p>
              </div>
              <div>
                <p className="text-sm mb-2">
                  Small text - 0.875rem (14px) - For secondary information and fine print
                </p>
                <p className="text-xs font-mono text-deep-slate-500">text-sm</p>
              </div>
              <div>
                <p className="text-xs mb-2">
                  Extra small text - 0.75rem (12px) - For captions and metadata
                </p>
                <p className="text-xs font-mono text-deep-slate-500">text-xs</p>
              </div>
            </div>
          </div>

          {/* Font Weights */}
          <div>
            <h3 className="mb-4">Font Weights</h3>
            <div className="space-y-2">
              <p className="font-light">Light (300) - Rarely used, for decorative purposes</p>
              <p className="font-normal">Normal (400) - Default body text weight</p>
              <p className="font-medium">Medium (500) - Emphasized body text</p>
              <p className="font-semibold">Semibold (600) - Headings and important UI elements</p>
              <p className="font-bold">Bold (700) - Strong emphasis</p>
              <p className="font-extrabold">Extrabold (800) - Maximum emphasis, hero sections</p>
            </div>
          </div>

          {/* Text Styles */}
          <div>
            <h3 className="mb-4">Text Styles</h3>
            <div className="space-y-2">
              <p>This is a <a href="#">link with hover state</a> that transitions smoothly</p>
              <p>This text contains <strong>strong/bold emphasis</strong> for important words</p>
              <p>This is <small>small text</small> for less important content</p>
              <p className="italic">This is italic text for stylistic variation</p>
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section className="space-y-8">
          <div>
            <h2 className="mb-4">Spacing System</h2>
            <p className="text-deep-slate-600 mb-6">
              Tailwind default spacing scale (0.25rem increments)
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-24 text-xs font-mono text-deep-slate-500">space-2 (0.5rem)</div>
              <div className="h-8 bg-emerald-accent-500 rounded" style={{ width: '0.5rem' }}></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 text-xs font-mono text-deep-slate-500">space-4 (1rem)</div>
              <div className="h-8 bg-emerald-accent-500 rounded" style={{ width: '1rem' }}></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 text-xs font-mono text-deep-slate-500">space-8 (2rem)</div>
              <div className="h-8 bg-emerald-accent-500 rounded" style={{ width: '2rem' }}></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 text-xs font-mono text-deep-slate-500">space-16 (4rem)</div>
              <div className="h-8 bg-emerald-accent-500 rounded" style={{ width: '4rem' }}></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-24 text-xs font-mono text-deep-slate-500">space-24 (6rem)</div>
              <div className="h-8 bg-emerald-accent-500 rounded" style={{ width: '6rem' }}></div>
            </div>
          </div>
        </section>

        {/* Component Patterns Preview */}
        <section className="space-y-8">
          <div>
            <h2 className="mb-4">Component Pattern Examples</h2>
            <p className="text-deep-slate-600 mb-6">
              Preview of common component styles using the design system
            </p>
          </div>

          {/* Buttons */}
          <div>
            <h3 className="mb-4">Button Styles (Preview)</h3>
            <div className="flex flex-wrap gap-4">
              <button className="px-6 py-3 bg-emerald-accent-600 text-white rounded-lg font-semibold hover:bg-emerald-accent-700 transition-colors">
                Primary Button
              </button>
              <button className="px-6 py-3 bg-deep-slate-700 text-white rounded-lg font-semibold hover:bg-deep-slate-800 transition-colors">
                Secondary Button
              </button>
              <button className="px-6 py-3 border-2 border-emerald-accent-600 text-emerald-accent-600 rounded-lg font-semibold hover:bg-emerald-accent-50 transition-colors">
                Outline Button
              </button>
              <button className="px-6 py-3 text-emerald-accent-600 font-semibold hover:text-emerald-accent-700 transition-colors">
                Text Button
              </button>
            </div>
          </div>

          {/* Cards */}
          <div>
            <h3 className="mb-4">Card Styles (Preview)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-xl p-6 hover:border-emerald-accent-500 transition-colors">
                <h4 className="mb-2">Light Card</h4>
                <p className="text-sm">Standard card with border and hover effect</p>
              </div>
              <div className="bg-deep-slate-50 rounded-xl p-6 hover:bg-deep-slate-100 transition-colors">
                <h4 className="mb-2">Subtle Background Card</h4>
                <p className="text-sm">Card with light background and hover effect</p>
              </div>
              <div className="bg-deep-slate-900 text-white rounded-xl p-6 hover:bg-deep-slate-800 transition-colors">
                <h4 className="mb-2 text-white">Dark Card</h4>
                <p className="text-sm text-deep-slate-200">Card with dark background and white text</p>
              </div>
            </div>
          </div>

          {/* Trust Badges */}
          <div>
            <h3 className="mb-4">Trust Badge (Preview)</h3>
            <div className="inline-flex items-center gap-2 bg-emerald-accent-50 border border-emerald-accent-200 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-emerald-accent-500 rounded-full"></div>
              <span className="text-sm font-medium text-emerald-accent-700">100% Exclusive Leads</span>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <footer className="border-t border-gray-200 pt-8 mt-16">
          <p className="text-sm text-deep-slate-500">
            <strong>Design System Agent - Phase 2 Complete</strong><br />
            All design tokens have been implemented and verified. This page will be deleted by Polish Agent in Phase 8.
          </p>
        </footer>
      </div>
    </main>
  );
}
