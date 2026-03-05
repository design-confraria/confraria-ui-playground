#!/bin/bash

# Confraria Design System - Quick Start

echo "🎉 Bem-vindo ao Confraria Design System!"
echo ""
echo "Este script iniciará o servidor de desenvolvimento..."
echo ""

# Verificar se Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não está instalado. Por favor, instale Node.js 18+."
    exit 1
fi

echo "✅ Node.js encontrado: $(node --version)"
echo ""

# Verificar se dependências estão instaladas
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependências..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Erro ao instalar dependências."
        exit 1
    fi
    echo "✅ Dependências instaladas com sucesso!"
fi

echo ""
echo "🚀 Iniciando servidor de desenvolvimento..."
echo ""
echo "📍 A aplicação estará disponível em: http://localhost:3000"
echo ""
echo "📚 Documentação:"
echo "  • Home: http://localhost:3000"
echo "  • Componentes: http://localhost:3000/docs/components/buttons"
echo "  • Design Tokens: http://localhost:3000/docs/tokens/colors"
echo "  • Ícones: http://localhost:3000/docs/icons"
echo ""
echo "Pressione Ctrl+C para parar o servidor."
echo ""

npm run dev
