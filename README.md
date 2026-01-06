# Quiz de Culinária 🍳

**Descrição**

Aplicação web simples de quiz focada em culinária, construída com **Next.js**, **React** e **TypeScript**. Permite responder perguntas de múltipla escolha, receber feedback imediato (correta/incorreta), visualizar o resultado ao final e reiniciar o quiz.

---

## Funcionalidades ✅

- Exibir perguntas com múltiplas opções
- Permitir seleção de alternativa com feedback visual (verde/vermelho)
- Avançar automaticamente para a próxima pergunta após resposta
- Exibir resultados finais com indicação de quais respostas estavam corretas
- Reiniciar o quiz para refazer as perguntas

---

## Tecnologias utilizadas 🔧

- **Next.js** (v16.1.1)
- **React** (v19)
- **TypeScript**
- **Tailwind CSS**

> As versões estão pegadas do arquivo `package.json`.

---

## Como rodar localmente ▶️

1. Instale as dependências:
   ```bash
   npm install
   ```
2. Rode a aplicação em modo desenvolvimento:
   ```bash
   npm run dev
   ```
3. Para gerar build de produção:
   ```bash
   npm run build
   ```
4. Para iniciar a build em modo produção:
   ```bash
   npm run start
   ```

> Observação: use `npm run dev` (não `npm dev run`).

---

## Estrutura principal do projeto 📁

- `src/app/page.tsx` — entrada e controle do quiz
- `src/app/components/QuestionItem.tsx` — componente que renderiza cada pergunta
- `src/app/components/Results.tsx` — componente que mostra o resultado final
- `src/app/data/questions.ts` — dados das perguntas
- `src/app/type/Question.ts` — tipagem `Question`

---

## Pessoas desenvolvedoras 👩‍💻👨‍💻

- Gabrielly Mossa
