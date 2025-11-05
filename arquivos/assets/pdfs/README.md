Coloque seus PDFs nesta pasta e atualize o arquivo `pdfs.json` se necessário.

Exemplo:

  - arquivos/assets/pdfs/Manual-mCaixa.pdf
  - arquivos/assets/pdfs/Esquema-mCaixa.pdf

Edite `pdfs.json` para apontar para os arquivos (campos: name, path).

Obs: Ao abrir `index.html` localmente no navegador sem um servidor, algumas versões de browser bloqueiam fetch de arquivos locais por segurança. Se tiver problemas, recomenda-se servir a pasta com um servidor estático (por exemplo: `npx http-server` ou `python -m http.server`).
