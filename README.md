# Rise Agency — GitHub + Vercel

Versão adaptada para Next.js padrão, com todas as alterações do site. Build de produção e TypeScript verificados localmente em Node.js 24. Publicação na Vercel ainda depende de importar este pacote no seu repositório.

## Publicar

1. Extraia o ZIP. Substitua os arquivos do projeto anterior no repositório pelo CONTEÚDO da pasta rise-vercel. Preserve apenas arquivos próprios que não pertençam ao pacote anterior, como sua licença, se houver.
2. Na raiz do repositório devem aparecer package.json, package-lock.json, app/, public/, next.config.ts, postcss.config.mjs, tsconfig.json e vercel.json. Envie as pastas inteiras com seus conteúdos, não só os arquivos soltos. Não envie o ZIP como arquivo único.
3. Se estiver substituindo o projeto anterior, remova os arquivos antigos de scripts/, build/, db/, drizzle/, examples/, lib/, components/, hooks/, vendor/, .openai/ e vite.config.ts; eles não são usados nesta versão.
4. Na Vercel: Framework Preset = Next.js; Node.js = 24.x; Build Command = npm run build; Install Command = npm ci. Output Directory deve ficar no padrão Next.js (desative um override antigo como dist ou public).
5. Root Directory deve ser a pasta onde está package.json. Se o conteúdo foi enviado à raiz do GitHub, deixe a raiz padrão. Se você enviou a pasta rise-vercel inteira, selecione rise-vercel.
6. Faça commit. Aguarde a nova implantação; se necessário, clique em Redeploy no commit atualizado.

Nenhuma variável de ambiente ou banco de dados é necessário para esta página. Os contatos abrem o WhatsApp e o botão da Temak House abre o Instagram.

## Rodar localmente

Node.js 24 e npm:

```sh
npm ci
npm run dev
```

Acesse http://localhost:3000.

```sh
npm run build
npm start
```

## Conteúdo

Código, imagens e logos transparentes incluídos. Animações de tráfego pago, contadores, cena da Temak House e WhatsApp preservados. Imagens gastronômicas e relatório animado são conceituais. Não inclui dependências instaladas, caches ou credenciais.
