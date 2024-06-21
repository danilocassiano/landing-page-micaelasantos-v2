#!/bin/bash

# Define o caminho para a raiz do projeto
PROJECT_ROOT="$(pwd)"

# Muda para o diretório raiz do projeto
cd "$PROJECT_ROOT"

# Instala as dependências
yarn install

# Executa o comando de build
yarn run build

echo "Deploy concluído com sucesso!"
