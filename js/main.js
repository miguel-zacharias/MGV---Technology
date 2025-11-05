// Lazy-loading + local PDF manifest loader
document.addEventListener('DOMContentLoaded', function () {
  // Lazy-loading images using IntersectionObserver
  const lazyImages = [].slice.call(document.querySelectorAll('img.lazy-image'));

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

  // Load local PDFs from a small manifest (assets/pdfs/pdfs.json)
  const loadBtn = document.getElementById('load-local');
  const pdfList = document.getElementById('pdf-list');

  async function loadLocalPdfs() {
    try {
      const resp = await fetch('assets/pdfs/pdfs.json', {cache: 'no-store'});
      if (!resp.ok) throw new Error('Manifest não encontrado');
      const files = await resp.json();
      if (!Array.isArray(files) || files.length === 0) {
        pdfList.innerHTML = '<li>Nenhum PDF encontrado no manifesto (assets/pdfs/pdfs.json).</li>';
        return;
      }

      pdfList.innerHTML = files.map(f => {
        const href = f.path || f.url || '#';
        const name = f.name || href.split('/').pop();
        return `<li><a href="${escapeHtml(href)}" target="_blank" rel="noopener">${escapeHtml(name)}</a></li>`;
      }).join('');
    } catch (err) {
      console.error(err);
      pdfList.innerHTML = `<li>Erro ao carregar manifest: ${escapeHtml(err.message)}</li>`;
    }
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
