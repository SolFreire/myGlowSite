# myGlow.com — site estático

Site de 6 páginas (HTML/CSS/JS puro, sem build step) promovendo o app myGlow.

```
index.html            Home
especialistas.html    Equipe de Especialistas
desenvolvedores.html  Equipe de Desenvolvedores
processo.html         Processo de Desenvolvimento
termos.html            Termos de Uso (link no menu)
sobre.html            Sobre o myGlow (link no rodapé de todas as páginas)
css/styles.css        Design system (cores, tipografia, componentes)
js/main.js            Menu mobile + fallback de vídeo
```

A barra de navegação usa a fonte **Life Savers** (Google Fonts, pesos 700/800) para a logo e os
links — carregada via `<link>` no `<head>` de cada página, não precisei do arquivo da fonte.

Para rodar localmente, basta abrir `index.html` no navegador, ou servir a pasta com qualquer servidor estático (ex: `npx serve .`).

## Como anexar os assets reais

As páginas já estão prontas e funcionando com **placeholders** (caixas tracejadas indicando o que
deve entrar em cada espaço). Para trocar um placeholder pelo arquivo real, basta colocar o arquivo
na pasta indicada **com o nome exato abaixo** — nenhum código precisa ser alterado.

## Estrutura de fundo (vale para todas as páginas)

Duas camadas, como no design:

1. **Cenário do salão** (`assets/img/home/cenario-salao-fundo-do-site.svg`) — camada fixa atrás de
   tudo, cobrindo a janela inteira. Só aparece nas laterais.
2. **Painel central** (`assets/img/home/patterns-fundo-para-texto.png`) — o retângulo creme com
   textura de bolinhas e as bordas marrons, repetido verticalmente. É o fundo real do conteúdo.

Os dois arquivos moram em `img/home/` (foi onde chegaram), mas são usados no site inteiro.

**Otimização do pattern (feita):** o arquivo original tinha 3736×21357 px (3,4 MB) mas o desenho se
repete verticalmente. O período real é ~39,36 px e volta a ficar em fase a cada **866 px**, então o
arquivo foi recortado nessa altura e agora repete com `repeat-y`: **3,4 MB → 138 KB**, sem emenda
visível (o erro na junção é 0,48/255, contra um contraste de 25/255 do próprio pontilhado).

Um recorte em altura "redonda" (780 px, 20 fileiras de pontos) **não** funciona: como o período é
fracionário, a emenda acumula desalinhamento e o erro sobe para 2,89 — aí a junção aparece.

**Cenário do salão:** mantido como está. São 1,8 MB de vetor puro, mas comprime para **230 KB** com
gzip, e minificar só levaria a 220 KB — não compensa mexer no arquivo do designer. Só garanta que a
hospedagem sirva com gzip/brotli (Netlify, Vercel, GitHub Pages e Cloudflare já fazem por padrão).

### `assets/img/home/` — ✅ recebidos e já conectados
| Arquivo | Uso |
|---|---|
| `personagem-edna-home.png` | Ilustração da Edna (hero) |
| `personagem-lucy-home.png`, `personagem-sana-home.png`, `personagem-sindy-home.png` | Trio no rodapé da Home |
| `qr-code-app-home.png` | QR code |
| `tag-nome-app-home.png` | Selo "myGlow" |
| `pin-tag-verde-home.png`, `pin-tag-azul-home.png`, `pin-tag-roxo-home.png` | Adesivos ao redor do selo |
| `balao-home.svg` | Formato do balão de fala da Edna |
| `cenario-salao-fundo-do-site.svg` | Cenário de fundo (camarim) da Home inteira |
| `pin-tag-rosa-home.png` | Adesivo do título da página de Especialistas |
| `patterns-fundo-para-texto.png` | Painel central de todas as páginas (ver acima) |

O mockup do telefone com o vídeo de fluxo foi **removido da Home por enquanto** (a pedido) — os
campos do mockup de referência são mais retangulares/quadrados do que um corpo de celular, então
tirei o elemento em vez de forçar um formato errado. Quando tiver `fluxo-app.mp4` (ou uma imagem
de screenshot), me diga como quer que ele apareça (moldura tipo janela com 3 bolinhas + rótulo
"myGlow", como no mockup) que eu recolocamos.

### `assets/img/team/` (Especialistas) — ✅ recebidos e já conectados
| Arquivo | Uso |
|---|---|
| `card-especialista-lucy.png`, `-cindy.png`, `-sana.png` | Cards completos (moldura, nome, bio e personagem já embutidos na arte) |
| `icone-urso-lucy.svg` | Adesivo da aranha de pelúcia (Lucy) |
| `Disco Animado.svg` | Adesivo do disco de vinil (Cindy) |
| `icone-urso-sana.svg` | Adesivo do ursinho (Sana) |

Como o texto das bios está **dentro das imagens**, ele foi repetido no `alt` de cada card para
leitores de tela e busca. Se a arte mudar, atualize o `alt` junto.

O arquivo `Disco Animado.svg` tem espaço e maiúsculas no nome — mantive como está e referenciei
como `Disco%20Animado.svg` no HTML. Se preferir padronizar para `disco-animado.svg`, me avise que
eu renomeio e ajusto.

### `assets/img/dev/` (Desenvolvedores)
| Arquivo | Descrição |
|---|---|
| `dev-01.jpg` … `dev-04.jpg` | Foto de cada integrante |

Junto com as fotos, envie por texto: **nome, cargo, bio curta, link LinkedIn e GitHub** de cada
dev — pode ser aos poucos, o que faltar fica com placeholder `[a definir]`.

### `assets/video/`
| Arquivo | Descrição |
|---|---|
| `documentario.mp4` | Vídeo da página Processo (+ texto de descrição) |
| `fluxo-app.mp4` | Vídeo de fluxo do app (Home — elemento removido por enquanto, ver acima) |

### `assets/img/dev/` (Desenvolvedores) — ✅ recebidos e já conectados
| Arquivo | Uso |
|---|---|
| `polaroid-foto-soraia.svg`, `-virna.svg`, `-leticia.svg`, `-marquinhos.svg` | Fotos com moldura, rotação e nome já embutidos na arte |
| `LinkedIn, Negative.svg`, `GitHub, Normal.svg` | Ícones dos links de cada pessoa |
| `titulo-equipe-de-desenvolvedores.svg` | **Não usado** — ver nota abaixo |

Os dois ícones têm vírgula e espaço no nome; mantive os arquivos como estão e referenciei
codificado (`LinkedIn,%20Negative.svg`). A cor do texto dos links é `#505050` (variável `--link`).

O título da página foi montado em HTML/CSS (tags de papel + adesivos), igual ao das outras páginas,
em vez de usar `titulo-equipe-de-desenvolvedores.svg`. Motivos: o texto fica sendo texto de verdade
(busca e leitor de tela), o mesmo componente serve para todas as páginas, e o SVG pronto pesa
1,9 MB. Se preferir a arte exata, é só pedir que eu troco.

### Otimização da foto do Marcos (feita)

`polaroid-foto-marquinhos.svg` tinha **41,7 MB**: embutia a foto como PNG sem compressão em
4284×5712. Os outros polaroids embutem JPEG em ~1080–1280 px.

O arquivo foi regravado com a mesma foto em JPEG 1080×1440 (qualidade 82), igualando o padrão dos
outros: **41,7 MB → 370 KB**, sem mudança visual (o vetor da moldura, a rotação e o nome continuam
intactos; só a imagem embutida mudou). A página de Desenvolvedores saiu de ~47 MB para 6,5 MB.

Se precisar do arquivo original, ele não está no projeto — reexporte do Figma.

> 💡 O que sobrou de peso são os dois fundos, que carregam em **toda** página:
> `patterns-fundo-para-texto.png` (3,5 MB) e `cenario-salao-fundo-do-site.svg` (1,8 MB).
> O pattern tem 3736×21357 px mas se repete verticalmente — dá para recortar só uma fatia
> repetível dele e cair para poucos KB, com renderização idêntica.

## Paleta de cores (confirmada)

| Uso | Hex |
|---|---|
| Rosa — barra de navegação / destaque | `#FF299B` |
| Rosa — card desenvolvedor | `#DE4F9B` |
| Bege — fundo (com pattern, ver `bg-pattern.png` acima) | `#D4D0BB` |
| Roxo — card desenvolvedor | `#8A38F5` |
| Azul — card desenvolvedor | `#2BB7CD` |
| Verde — card desenvolvedor | `#7CAA33` |

Os cards de **Especialistas** não usam essas variáveis — as cores vêm prontas nas próprias imagens.

## Cabeçalhos

Todas as páginas usam o mesmo componente `.section-title`: duas tags de papel sobrepostas com um
adesivo em cantos opostos. Os adesivos são ancorados nos cantos da própria tag, então funcionam com
títulos de qualquer tamanho. Para uma página nova, basta copiar o bloco e trocar o texto e os dois
`pin-tag-*.png`.

## Pendências de conteúdo

- **Processo**: vídeo `documentario.mp4` e o texto de descrição.
- **Termos de Uso**: texto completo.
- **Home**: texto do balão da Edna e o vídeo/screenshot do app (elemento removido por ora).

## Observação

O repositório git deste diretório está com a raiz na pasta pessoal do usuário (`~`), não em
`myGlowSite/`. Recomenda-se rodar `git init` dentro de `myGlowSite/` antes de versionar este
projeto separadamente.
