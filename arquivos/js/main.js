// Lazy-loading + local PDF manifest loader
document.addEventListener('DOMContentLoaded', function () {
  // Lazy-loading images using IntersectionObserver
  const lazyImages = [].slice.call(document.querySelectorAll('img.lazy-image'));

  // Marca imagens que já possuem `src` como carregadas para aplicar a transição CSS
  lazyImages.forEach(img => {
    // Se não há data-src, assumimos que o src já está presente
    if (!img.getAttribute('data-src')) {
      if (img.complete) {
        img.classList.add('loaded');
      } else {
        img.addEventListener('load', () => img.classList.add('loaded'));
      }
    }
  });

  if ('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.getAttribute('data-src');
          if (src) {
            img.src = src;
            img.onload = () => img.classList.add('loaded');
            img.removeAttribute('data-src');
          }
          observer.unobserve(img);
        }
      });
    }, { rootMargin: '120px 0px' });

    lazyImages.forEach(img => imgObserver.observe(img));
  } else {
    // Fallback: load all images immediately
    lazyImages.forEach(img => {
      img.src = img.getAttribute('data-src');
      img.onload = () => img.classList.add('loaded');
    });
  }

  // Load local PDFs from a small manifest (arquivos/assets/pdfs/pdfs.json)
  const loadBtn = document.getElementById('load-local'); // may be absent
  const pdfList = document.getElementById('pdf-list');

  async function loadLocalPdfs() {
    try {
      const resp = await fetch('arquivos/assets/pdfs/pdfs.json', {cache: 'no-store'});
      if (!resp.ok) throw new Error('Manifest não encontrado');
      const files = await resp.json();
      if (!Array.isArray(files) || files.length === 0) {
        pdfList.innerHTML = '<li>Nenhum PDF encontrado no manifesto (arquivos/assets/pdfs/pdfs.json).</li>';
        return;
      }

      pdfList.innerHTML = files.map(f => {
        const href = f.path || f.url || '#';
        // encodeURI garante que espaços e caracteres especiais sejam enviados corretamente na URL
        const safeHref = encodeURI(href);
        const name = f.name || href.split('/').pop();
        return `<li><a href="${escapeHtml(safeHref)}" target="_blank" rel="noopener">${escapeHtml(name)}</a></li>`;
      }).join('');
    } catch (err) {
      console.error(err);
      pdfList.innerHTML = `<li>Erro ao carregar manifest: ${escapeHtml(err.message)}</li>`;
    }
  }

  // Load files automatically on page load to show downloads (no user upload)
  // We still keep the button support if present, but auto-render immediately.
  if (pdfList) {
    pdfList.innerHTML = '<li>Carregando arquivos...</li>';
    loadLocalPdfs();
  }
  if (loadBtn) {
    loadBtn.addEventListener('click', () => {
      loadBtn.disabled = true;
      loadBtn.textContent = 'Carregando...';
      loadLocalPdfs().finally(() => {
        loadBtn.disabled = false;
        loadBtn.textContent = 'Carregar PDFs locais';
      });
    });
  }

  function escapeHtml(str){
    return String(str).replace(/[&<>"'`]/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;', '`':'&#96;'}[s]));
  }
});
