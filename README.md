# Bem-Estar App

## Pré-requisitos

- Node.js
- pnpm
- Expo CLI

## Instalação

```bash
pnpm install
```

## Executando o Aplicativo

### Modo de Desenvolvimento

```bash
pnpm dev
```

Após iniciar o servidor:

- **iOS** (somente macOS): Pressione `i`
- **Android**: Pressione `a`
- **Web**: Pressione `w`
- **Expo Go**: Escaneie o QR code com o app Expo Go

## Testes

```bash
pnpm test
```

## Padrões de Nomenclatura

### Arquivos e Pastas

Usar **kebab-case** (letras minúsculas separadas por hífen):

```
components/ui/custom-button.tsx
screens/user-profile.tsx
utils/format-date.ts
```

### Componentes React

Usar **PascalCase** para nomes de componentes:

```typescript
// arquivo: components/ui/custom-button.tsx
export const CustomButton = () => { ... }
```

### Variáveis e Funções

Usar **camelCase**:

```typescript
const userName = 'João';
const fetchUserData = () => { ... }
```

### Constantes Globais

Usar **UPPER_SNAKE_CASE**:

```typescript
const API_BASE_URL = 'https://api.example.com';
const MAX_RETRY_ATTEMPTS = 3;
```

## Adicionando Componentes

```bash
pnpm dlx @react-native-reusables/cli@latest add <component-name>
```

Exemplos:

```bash
pnpm dlx @react-native-reusables/cli@latest add input
pnpm dlx @react-native-reusables/cli@latest add input textarea button
```

## Tecnologias

- React Native
- Expo
- TypeScript
- NativeWind (Tailwind CSS)
- Expo Router
- Jest

## Contribuindo

1. Seguir os padrões de nomenclatura kebab-case para arquivos e pastas
2. Escrever testes para novas funcionalidades
3. Manter o código TypeScript tipado, evitar utilizar any
4. Usar componentes UI existentes quando possível
