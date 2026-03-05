'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

const navigation = [
  {
    title: 'Componentes Base',
    href: '/docs/components/buttons',
    items: [
      { title: 'Button', href: '/docs/components/buttons' },
      { title: 'Card', href: '/docs/components/card' },
      { title: 'Input', href: '/docs/components/input' },
      { title: 'Badge', href: '/docs/components/badge' },
    ],
  },
  {
    title: 'Componentes Confraria',
    href: '/docs/components/alert',
    items: [
      { title: 'Alert', href: '/docs/components/alert' },
      { title: 'Avatar', href: '/docs/components/avatar' },
      { title: 'StatCard', href: '/docs/components/stat-card' },
      { title: 'EmptyState', href: '/docs/components/empty-state' },
    ],
  },
  {
    title: 'Design Tokens',
    href: '/docs/tokens/colors',
    items: [
      { title: 'Cores', href: '/docs/tokens/colors' },
      { title: 'Tipografia', href: '/docs/tokens/typography' },
      { title: 'Espaçamento', href: '/docs/tokens/spacing' },
    ],
  },
  {
    title: 'Recursos',
    href: '/docs/icons',
    items: [
      { title: 'Ícones Lucide', href: '/docs/icons' },
    ],
  },
]

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 w-64 transform bg-white border-r border-slate-200 transition-transform duration-200 ease-in-out md:translate-x-0',
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200">
            <Link href="/" className="font-bold text-xl text-slate-900">
              Confraria
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden p-2"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 overflow-y-auto p-6 space-y-6">
            {navigation.map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-semibold text-slate-900 uppercase tracking-wide mb-3">
                  {section.title}
                </h3>
                <div className="space-y-2">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        'block px-3 py-2 rounded-lg text-sm transition-colors',
                        pathname === item.href
                          ? 'bg-blue-50 text-blue-600 font-semibold'
                          : 'text-slate-600 hover:bg-slate-50'
                      )}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-slate-200">
            <p className="text-xs text-slate-600">
              v1.0.0 • {new Date().getFullYear()}
            </p>
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 md:ml-64">
        {/* Top Bar */}
        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white">
          <div className="flex items-center justify-between px-4 py-4 md:px-6">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex-1" />
            <Link href="/" className="text-sm text-slate-600 hover:text-slate-900">
              ← Voltar para Home
            </Link>
          </div>
        </header>

        {/* Content */}
        <main className="bg-white">{children}</main>
      </div>
    </div>
  )
}
